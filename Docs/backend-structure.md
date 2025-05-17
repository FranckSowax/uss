## 13. Guide d'implémentation pour l'équipe de développement avec Supabase

### 13.1 Mise en place de l'environnement
```bash
# Installation des dépendances pour un projet React/Next.js avec Supabase
npm init
npm install @supabase/supabase-js @supabase/auth-helpers-react axios react-query

# Pour un backend Node.js complémentaire (optionnel)
npm install express cors helmet express-validator

# Configuration de l'environnement
touch .env.local
echo "NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key" >> .env.local
echo "SUPABASE_SERVICE_ROLE_KEY=your-service-role-key" >> .env.local
```

### 13.2 Exemple d'implémentation avec Supabase
```javascript
// src/lib/supabase.js - Client Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Exemple d'utilitaire d'authentification
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

// Exemple de hook utilisateur
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;
  
  // Récupérer les informations de profil
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single();
    
  return {
    ...user,
    profile
  };
};
```

### 13.3 Exemple d'utilisation des RLS (Row Level Security)
```sql
-- Politique permettant aux étudiants de voir uniquement leurs notes
CREATE POLICY "Students can view only their grades"
ON grades
FOR SELECT
USING (
  auth.uid() IN (
    SELECT user_id FROM students 
    WHERE id = grades.student_id
  )
);

-- Politique permettant aux professeurs de voir et modifier les notes de leurs cours
CREATE POLICY "Professors can manage grades for their courses"
ON grades
FOR ALL
USING (
  auth.uid() IN (
    SELECT user_id FROM professors 
    WHERE id = (
      SELECT professor_id FROM course_sections 
      WHERE id = grades.section_id
    )
  )
);
```

### 13.4 Exemple de service pour les données académiques
```javascript
// src/services/academicService.js
import { supabase } from '../lib/supabase';

export const AcademicService = {
  // Récupérer l'emploi du temps d'un étudiant
  getStudentSchedule: async (studentId) => {
    const { data, error } = await supabase
      .from('schedules')
      .select(`
        id,
        day_of_week,
        start_time,
        end_time,
        room,
        course_sections(
          id,
          courses(id, name, code),
          professors(id, user_profiles(first_name, last_name))
        )
      `)
      .eq('student_id', studentId)
      .order('day_of_week')
      .order('start_time');
      
    if (error) throw error;
    return data;
  },
  
  // Récupérer les notes d'un étudiant
  getStudentGrades: async (studentId) => {
    const { data, error } = await supabase
      .from('grades')
      .select(`
        id,
        value,
        weight,
        comment,
        graded_at,
        course_sections(
          id,
          courses(id, name, code, credits)
        ),
        grade_types(id, name, description)
      `)
      .eq('student_id', studentId)
      .order('graded_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },
  
  // Enregistrer une nouvelle note (pour professeur)
  saveGrade: async (gradeData) => {
    const { data, error } = await supabase
      .from('grades')
      .insert([gradeData])
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Récupérer la liste des étudiants d'un cours (pour professeur)
  getCourseStudents: async (sectionId) => {
    const { data, error } = await supabase
      .from('course_enrollments')
      .select(`
        students(
          id,
          student_id,
          user_profiles(id, first_name, last_name, profile_image_path)
        )
      `)
      .eq('section_id', sectionId)
      .eq('status', 'active');
      
    if (error) throw error;
    return data.map(enrollment => enrollment.students);
  }
};
```

### 13.5 Exemple d'implémentation Edge Function Supabase

Les Edge Functions de Supabase permettent d'exécuter du code côté serveur sans gérer l'infrastructure. Voici un exemple pour une fonction qui génère un rapport de progression:

```javascript
// supabase/functions/generate-progress-report/index.ts
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

interface WebhookPayload {
  studentId: string;
  semesterId: string;
}

serve(async (req) => {
  try {
    // Création du client Supabase avec clé de service (pour contourner RLS)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );
    
    // Vérification d'authentification avec JWT du header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Non autorisé' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Non autorisé' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Récupération et validation des paramètres
    const { studentId, semesterId }: WebhookPayload = await req.json();
    
    if (!studentId || !semesterId) {
      return new Response(JSON.stringify({ error: 'Paramètres incomplets' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Vérification des permissions
    const { data: permData, error: permError } = await supabaseAdmin
      .from('students')
      .select('user_id')
      .eq('id', studentId)
      .single();
      
    // Vérifier si l'utilisateur est le propriétaire ou un admin
    const isOwner = permData?.user_id === user.id;
    const { data: roleData } = await supabaseAdmin
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .in('role', ['admin', 'staff', 'professor']);
      
    const isStaff = roleData && roleData.length > 0;
    
    if (!isOwner && !isStaff) {
      return new Response(JSON.stringify({ error: 'Permission refusée' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Récupération des données pour le rapport
    const { data: grades, error: gradesError } = await supabaseAdmin
      .from('grades')
      .select(`
        id,
        value,
        weight,
        course_sections(
          id,
          courses(id, name, code, credits)
        )
      `)
      .eq('student_id', studentId)
      .eq('semester_id', semesterId);
      
    if (gradesError) throw gradesError;
    
    // Calcul des statistiques et génération du rapport
    const courseMap = new Map();
    let totalCredits = 0;
    let weightedSum = 0;
    
    grades.forEach(grade => {
      const courseId = grade.course_sections.courses.id;
      const credits = grade.course_sections.courses.credits;
      
      if (!courseMap.has(courseId)) {
        courseMap.set(courseId, {
          id: courseId,
          name: grade.course_sections.courses.name,
          code: grade.course_sections.courses.code,
          credits,
          grades: [],
          average: 0
        });
        totalCredits += credits;
      }
      
      courseMap.get(courseId).grades.push({
        value: grade.value,
        weight: grade.weight
      });
    });
    
    // Calcul des moyennes par cours
    for (const course of courseMap.values()) {
      let courseSum = 0;
      let weightSum = 0;
      
      course.grades.forEach(grade => {
        courseSum += grade.value * grade.weight;
        weightSum += grade.weight;
      });
      
      course.average = weightSum > 0 ? courseSum / weightSum : 0;
      weightedSum += course.average * course.credits;
    }
    
    const gpa = totalCredits > 0 ? weightedSum / totalCredits : 0;
    
    // Génération du rapport final
    const report = {
      studentId,
      semesterId,
      generatedAt: new Date().toISOString(),
      courses: Array.from(courseMap.values()),
      statistics: {
        gpa: gpa.toFixed(2),
        totalCredits,
        courseCount: courseMap.size
      }
    };
    
    // Enregistrement du rapport dans la base de données
    const { data: reportData, error: reportError } = await supabaseAdmin
      .from('progress_reports')
      .insert([{
        student_id: studentId,
        semester_id: semesterId,
        report_data: report,
        generated_by: user.id
      }])
      .select()
      .single();
      
    if (reportError) throw reportError;
    
    return new Response(JSON.stringify({ 
      success: true, 
      report: reportData 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Erreur serveur', 
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
```

### 13.6 Utilisation de Supabase Storage

```javascript
// src/services/mediaService.js
import { supabase } from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export const MediaService = {
  // Télécharger un fichier dans le bucket "documents"
  uploadDocument: async (file, folder = 'general') => {
    try {
      // Générer un nom de fichier unique
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${folder}/${fileName}`;
      
      // Télécharger le fichier
      const { data, error } = await supabase.storage
        .from('documents')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });
        
      if (error) throw error;
      
      // Créer une entrée dans la table media
      const { data: mediaData, error: mediaError } = await supabase
        .from('media')
        .insert([{
          storage_path: data.path,
          file_name: file.name,
          mime_type: file.type,
          size: file.size,
          metadata: { originalName: file.name }
        }])
        .select()
        .single();
        
      if (mediaError) throw mediaError;
      
      // Récupérer l'URL publique
      const { data: { publicUrl } } = supabase.storage
        .from('documents')
        .getPublicUrl(data.path);
        
      return {
        ...mediaData,
        url: publicUrl
      };
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      throw error;
    }
  },
  
  // Récupérer les fichiers d'un étudiant
  getStudentDocuments: async (studentId) => {
    try {
      const { data, error } = await supabase
        .from('student_documents')
        .select(`
          id,
          document_type,
          submission_date,
          status,
          comment,
          media(id, file_name, mime_type, storage_path)
        `)
        .eq('student_id', studentId)
        .order('submission_date', { ascending: false });
        
      if (error) throw error;
      
      // Ajouter des URLs publiques aux documents
      return data.map(doc => ({
        ...doc,
        media: {
          ...doc.media,
          url: supabase.storage
            .from('documents')
            .getPublicUrl(doc.media.storage_path).data.publicUrl
        }
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des documents:', error);
      throw error;
    }
  },
  
  // Supprimer un document
  deleteDocument: async (mediaId) => {
    try {
      // Récupérer d'abord le chemin de stockage
      const { data: media, error: fetchError } = await supabase
        .from('media')
        .select('storage_path')
        .eq('id', mediaId)
        .single();
        
      if (fetchError) throw fetchError;
      
      // Supprimer de Supabase Storage
      const { error: storageError } = await supabase.storage
        .from('documents')
        .remove([media.storage_path]);
        
      if (storageError) throw storageError;
      
      // Supprimer l'entrée de la base de données
      const { error: dbError } = await supabase
        .from('media')
        .delete()
        .eq('id', mediaId);
        
      if (dbError) throw dbError;
      
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      throw error;
    }
  }
};
```# Document de Structure Backend
# Site Web École Supérieure au Gabon

## 1. Vue d'ensemble de l'architecture

### 1.1 Architecture globale
Le backend du site web de l'École Supérieure au Gabon sera développé selon une architecture orientée services (SOA) avec une API RESTful centrale. Cette approche permettra une séparation claire entre le frontend et le backend, facilitant la maintenance et les évolutions futures.

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Frontend     │     │   API Gateway   │     │  Microservices  │
│                 │────▶│                 │────▶│                 │
│ (React/Vue.js)  │     │  (Express/NestJS) │   │   (Modules)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                                ┌─────────────────┐
                                                │  Base de données│
                                                │                 │
                                                │   (MySQL/PG)    │
                                                └─────────────────┘
```

### 1.2 Principes architecturaux
- **Modularité** : Organisation en services distincts et indépendants
- **Scalabilité** : Architecture permettant d'ajouter des ressources à la demande
- **Sécurité** : Protection des données à tous les niveaux
- **Performance** : Optimisation pour les connexions variables au Gabon
- **Maintenabilité** : Code structuré, documenté et testable

### 1.3 Choix technologiques principaux
- **Langage principal** : Node.js (Express.js ou NestJS) ou PHP (Laravel)
- **Base de données** : Supabase (basé sur PostgreSQL)
- **Cache** : Redis pour sessions et données fréquemment accédées
- **ORM** : Supabase JavaScript Client / API REST Supabase
- **Documentation API** : Swagger / OpenAPI 3.0
- **Gestion d'authentification** : Supabase Auth (compatible JWT)
- **Stockage de fichiers** : Supabase Storage (compatible S3)

## 2. Structure des services

### 2.1 Core Services

#### 2.1.1 Service d'authentification et gestion utilisateurs
- **Responsabilités** :
  - Inscription et enregistrement utilisateurs
  - Authentification (login/logout)
  - Gestion sessions et tokens
  - Gestion des profils utilisateurs
  - Récupération et réinitialisation de mot de passe
  - Authentification à deux facteurs
  - Gestion des rôles et permissions

- **Endpoints principaux** :
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `POST /api/auth/logout`
  - `POST /api/auth/refresh-token`
  - `PUT /api/users/profile`
  - `GET /api/users/me`
  - `POST /api/auth/password-reset`

- **Modèles de données** :
  - Users
  - Roles
  - Permissions
  - UserRoles (table pivot)
  - Sessions

#### 2.1.2 Service de gestion de contenu
- **Responsabilités** :
  - Gestion des pages et sections dynamiques
  - Gestion des nouvelles et articles
  - Gestion des événements
  - Gestion multilingue du contenu
  - Système de média (images, vidéos, documents)

- **Endpoints principaux** :
  - `GET /api/content/pages`
  - `GET /api/content/pages/{slug}`
  - `GET /api/content/news`
  - `GET /api/content/news/{id}`
  - `GET /api/content/events`
  - `GET /api/content/media`
  - `POST /api/admin/content/pages` (admin)
  - `PUT /api/admin/content/pages/{id}` (admin)
  - `POST /api/admin/content/news` (admin)

- **Modèles de données** :
  - Pages
  - PageSections
  - News
  - Events
  - Media
  - Categories
  - Tags
  - Translations

#### 2.1.3 Service de notifications
- **Responsabilités** :
  - Envoi d'emails automatiques et manuels
  - Notifications internes système
  - Notifications push (pour future app mobile)
  - Gestion des abonnements aux notifications
  - Historique des notifications

- **Endpoints principaux** :
  - `POST /api/notifications/send`
  - `GET /api/notifications/unread`
  - `PUT /api/notifications/{id}/read`
  - `PUT /api/notifications/preferences`

- **Modèles de données** :
  - Notifications
  - NotificationTemplates
  - NotificationPreferences
  - EmailQueue

### 2.2 Services métier

#### 2.2.1 Service de gestion des formations
- **Responsabilités** :
  - Catalogue des formations et filières
  - Gestion des modules et cours
  - Informations sur les enseignants
  - Débouchés professionnels
  - Prérequis et conditions d'admission

- **Endpoints principaux** :
  - `GET /api/programs`
  - `GET /api/programs/{id}`
  - `GET /api/programs/{id}/courses`
  - `GET /api/programs/{id}/professors`
  - `GET /api/courses`
  - `GET /api/courses/{id}`
  - `POST /api/admin/programs` (admin)
  - `PUT /api/admin/programs/{id}` (admin)

- **Modèles de données** :
  - Programs (formations)
  - Courses (cours)
  - Modules
  - ProgramOutcomes (débouchés)
  - Prerequisites
  - ProfessorProgram (table pivot)

#### 2.2.2 Service d'admission et inscriptions
- **Responsabilités** :
  - Processus de candidature
  - Upload et gestion des documents
  - Statut des demandes d'admission
  - Paiement des frais de dossier
  - Communication avec les candidats
  - Validation des inscriptions

- **Endpoints principaux** :
  - `POST /api/admissions/apply`
  - `GET /api/admissions/applications`
  - `GET /api/admissions/applications/{id}`
  - `PUT /api/admissions/applications/{id}/documents`
  - `GET /api/admissions/documents`
  - `POST /api/admissions/payments`
  - `PUT /api/admissions/applications/{id}/status` (admin)

- **Modèles de données** :
  - Applications
  - ApplicationStatus
  - ApplicantDocuments
  - AdmissionPayments
  - AdmissionSessions
  - ApplicationNotes

#### 2.2.3 Service académique
- **Responsabilités** :
  - Gestion des emplois du temps
  - Gestion des notes et évaluations
  - Suivi d'assiduité
  - Inscription aux cours
  - Gestion des examens
  - Génération des bulletins

- **Endpoints principaux** :
  - `GET /api/academic/schedule`
  - `GET /api/academic/grades`
  - `GET /api/academic/attendance`
  - `POST /api/academic/course-registration`
  - `GET /api/academic/exams`
  - `GET /api/academic/reports`
  - `POST /api/academic/grades` (professeurs)
  - `POST /api/academic/attendance` (professeurs)

- **Modèles de données** :
  - Schedule
  - StudentCourses
  - Grades
  - Attendance
  - Exams
  - ExamRegistrations
  - AcademicReports
  - Semesters

#### 2.2.4 Service comptabilité et paiements
- **Responsabilités** :
  - Gestion des frais de scolarité
  - Suivi des paiements
  - Gestion des bourses et aides
  - Génération des factures
  - Intégration avec passerelles de paiement
  - Rapports financiers

- **Endpoints principaux** :
  - `GET /api/finance/tuition`
  - `GET /api/finance/payments`
  - `GET /api/finance/invoices`
  - `GET /api/finance/invoices/{id}/download`
  - `POST /api/finance/payments`
  - `GET /api/finance/scholarships`
  - `POST /api/admin/finance/invoices` (admin)

- **Modèles de données** :
  - Tuition
  - Payments
  - PaymentMethods
  - Invoices
  - Scholarships
  - FinancialAids
  - StudentFinancialStatus

#### 2.2.5 Service de vie étudiante
- **Responsabilités** :
  - Gestion des clubs et associations
  - Événements campus
  - Logement étudiant
  - Services aux étudiants
  - Réservations de ressources

- **Endpoints principaux** :
  - `GET /api/campus-life/clubs`
  - `GET /api/campus-life/events`
  - `GET /api/campus-life/housing`
  - `GET /api/campus-life/services`
  - `POST /api/campus-life/resource-booking`
  - `GET /api/campus-life/resource-booking`

- **Modèles de données** :
  - Clubs
  - ClubMemberships
  - CampusEvents
  - Housing
  - HousingApplications
  - CampusServices
  - Resources
  - ResourceBookings

### 2.3 Services utilitaires

#### 2.3.1 Service de recherche
- **Responsabilités** :
  - Indexation du contenu
  - Recherche full-text
  - Suggestions et auto-complétion
  - Filtrage et tri des résultats

- **Technologies** :
  - Elasticsearch ou Algolia
  - Indexation automatisée

- **Endpoints principaux** :
  - `GET /api/search`
  - `GET /api/search/suggestions`

#### 2.3.2 Service de reporting et analytiques
- **Responsabilités** :
  - Génération de rapports
  - Tableaux de bord administratifs
  - Statistiques du site
  - KPIs académiques

- **Endpoints principaux** :
  - `GET /api/analytics/dashboard`
  - `GET /api/analytics/reports/admissions`
  - `GET /api/analytics/reports/academic`
  - `GET /api/analytics/reports/finance`
  - `GET /api/analytics/site-statistics`

- **Modèles de données** :
  - Reports
  - ReportTemplates
  - AnalyticsData
  - Dashboards
  - UserDashboardPreferences

#### 2.3.3 Service de communication
- **Responsabilités** :
  - Messagerie interne
  - Chat en direct
  - Gestion des formulaires de contact
  - Newsletter

- **Endpoints principaux** :
  - `POST /api/communication/messages`
  - `GET /api/communication/messages`
  - `GET /api/communication/messages/{id}`
  - `POST /api/communication/contact`
  - `POST /api/communication/chat/send`
  - `GET /api/communication/chat/history`
  - `POST /api/communication/newsletters/subscribe`

- **Modèles de données** :
  - Messages
  - MessageThreads
  - MessageRecipients
  - ContactSubmissions
  - ChatMessages
  - ChatSessions
  - NewsletterSubscribers

## 3. Modèle de données sur Supabase

### 3.1 Utilisation de Supabase

Supabase sera utilisé comme plateforme principale pour la gestion de base de données, l'authentification et le stockage. Cette plateforme offre plusieurs avantages:

- **Base sur PostgreSQL** : Accès à toutes les fonctionnalités avancées de PostgreSQL
- **API REST et temps réel** : API générée automatiquement pour toutes les tables
- **Authentification intégrée** : Système complet avec support OAuth, emails, 2FA
- **Stockage de fichiers** : Compatible S3 avec gestion des droits d'accès
- **Fonctions Edge** : Possibilité d'exécuter du code côté serveur
- **Sécurité par Row Level Security (RLS)** : Contrôle d'accès granulaire au niveau des lignes

### 3.2 Structure de base de données

Supabase étant basé sur PostgreSQL, nous utiliserons pleinement les fonctionnalités avancées comme:
- Les types JSON/JSONB pour les données structurées
- Les vues matérialisées pour les requêtes complexes fréquentes
- Les triggers et fonctions PostgreSQL
- Les index GIN pour la recherche texte
- Les politiques RLS pour la sécurité

### 3.3 Groupes d'entités
Le schéma de la base de données est organisé par domaines fonctionnels:

1. **Gestion des utilisateurs**:
   - `users`
   - `roles`
   - `permissions`
   - `user_roles`
   - `user_permissions`
   - `password_resets`

2. **Gestion de contenu**:
   - `pages`
   - `page_translations`
   - `page_sections`
   - `news`
   - `news_translations`
   - `events`
   - `media`
   - `categories`
   - `tags`

3. **Académique**:
   - `programs`
   - `courses`
   - `modules`
   - `professors`
   - `students`
   - `semesters`
   - `schedules`
   - `grades`
   - `attendance`
   - `exams`

4. **Admissions**:
   - `applications`
   - `application_status`
   - `application_documents`
   - `application_notes`
   - `admission_sessions`

5. **Finance**:
   - `tuition_fees`
   - `payments`
   - `invoices`
   - `scholarships`
   - `financial_aids`

6. **Communication**:
   - `messages`
   - `message_recipients`
   - `chat_sessions`
   - `chat_messages`
   - `notifications`
   - `newsletter_subscribers`

### 3.2 Modèles de données détaillés

#### 3.2.1 Structure des tables principales avec Supabase

Les exemples suivants montrent comment définir les tables principales en utilisant la syntaxe SQL compatible avec Supabase:

**Users** (extension du système d'authentification Supabase)
```sql
-- Cette table étend auth.users qui est déjà fournie par Supabase
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  username VARCHAR(50) UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  birth_date DATE,
  address TEXT,
  profile_image_path TEXT,
  user_type VARCHAR(20) NOT NULL CHECK (user_type IN ('student', 'professor', 'parent', 'staff', 'admin')),
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Trigger pour mettre à jour le timestamp
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.user_profiles
FOR EACH ROW
EXECUTE PROCEDURE fn_set_updated_at();

-- RLS (Row Level Security)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Politique : les utilisateurs ne peuvent voir et modifier que leur profil
CREATE POLICY "Users can view their own profile"
  ON public.user_profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.user_profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Politique : les admins peuvent tout voir
CREATE POLICY "Admins can view all profiles"
  ON public.user_profiles
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );
```

**Students**
```sql
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  student_id VARCHAR(20) UNIQUE NOT NULL,
  program_id UUID REFERENCES public.programs(id),
  current_semester INT,
  enrollment_date DATE,
  expected_graduation_date DATE,
  parent_id UUID REFERENCES public.user_profiles(id),
  status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'graduated', 'suspended')) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Création d'index pour améliorer les performances des recherches
CREATE INDEX idx_students_user_id ON public.students(user_id);
CREATE INDEX idx_students_program_id ON public.students(program_id);
CREATE INDEX idx_students_status ON public.students(status);

-- RLS (Row Level Security)
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- Politique : les étudiants peuvent voir leur propre dossier
CREATE POLICY "Students can view their own record"
  ON public.students
  FOR SELECT
  USING (auth.uid() = user_id);

-- Politique : les parents peuvent voir les dossiers de leurs enfants
CREATE POLICY "Parents can view their children's records"
  ON public.students
  FOR SELECT
  USING (
    parent_id = auth.uid()
  );

-- Politique : les professeurs et le personnel peuvent voir tous les dossiers étudiants
CREATE POLICY "Staff and professors can view all student records"
  ON public.students
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid()
      AND user_type IN ('professor', 'staff', 'admin')
    )
  );
```

**Programs**
```sql
CREATE TABLE public.programs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  duration INT,
  degree_level VARCHAR(20) CHECK (degree_level IN ('bachelor', 'master', 'phd', 'certificate', 'diploma')),
  department_id UUID REFERENCES public.departments(id),
  credits_required INT,
  is_active BOOLEAN DEFAULT true,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Utilisation de JSONB pour stocker des métadonnées flexibles
COMMENT ON COLUMN public.programs.metadata IS 'Stocke des informations supplémentaires comme conditions d''admission, débouchés, etc.';

-- RLS (Row Level Security)
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;

-- Politique : tout le monde peut voir les programmes
CREATE POLICY "Anyone can view programs"
  ON public.programs
  FOR SELECT
  USING (true);

-- Politique : seuls les admins/personnel peuvent modifier les programmes
CREATE POLICY "Only staff can modify programs"
  ON public.programs
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid()
      AND user_type IN ('staff', 'admin')
    )
  );
```

**Vue pour recherche de cours**
```sql
-- Vue matérialisée pour optimiser les recherches de cours avec informations enrichies
CREATE MATERIALIZED VIEW public.courses_search AS
SELECT 
  c.id,
  c.code,
  c.name,
  c.description,
  c.credits,
  c.hours,
  p.name as program_name,
  p.code as program_code,
  d.name as department_name,
  to_tsvector('french', 
    c.name || ' ' || 
    c.description || ' ' || 
    p.name || ' ' || 
    COALESCE(d.name, '')
  ) as search_vector
FROM public.courses c
JOIN public.programs p ON c.program_id = p.id
LEFT JOIN public.departments d ON p.department_id = d.id
WHERE c.is_active = true;

-- Index pour recherche fulltext performante
CREATE INDEX idx_courses_search ON public.courses_search USING GIN(search_vector);

-- Procédure pour rafraîchir la vue matérialisée
CREATE OR REPLACE FUNCTION refresh_courses_search()
RETURNS TRIGGER AS $
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY public.courses_search;
  RETURN NULL;
END;
$ LANGUAGE plpgsql;

CREATE TRIGGER refresh_courses_search_trigger
AFTER INSERT OR UPDATE OR DELETE ON public.courses
FOR EACH STATEMENT
EXECUTE PROCEDURE refresh_courses_search();
```