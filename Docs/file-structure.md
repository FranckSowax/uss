# Document de Structure des Fichiers (File Structure)
# Site Web École Supérieure au Gabon

## 1. Introduction

Ce document définit l'organisation des fichiers et des dossiers pour le site web de l'École Supérieure au Gabon. Une structure claire et cohérente favorise la maintenabilité, la scalabilité et la collaboration entre les membres de l'équipe de développement. Ce guide couvre à la fois la structure du projet frontend basé sur Next.js et l'organisation des données dans Supabase.

## 2. Structure générale du projet

```
ecole-superieure-gabon/
├── .github/                  # Workflows et configuration GitHub
├── .husky/                   # Hooks Git (linting, formatting)
├── .vscode/                  # Configuration VS Code
├── docs/                     # Documentation du projet
├── migrations/               # Scripts de migration Supabase
├── public/                   # Assets statiques
├── scripts/                  # Scripts utilitaires
├── src/                      # Code source principal
├── supabase/                 # Configuration Supabase et fonctions edge
├── .env.example              # Template de variables d'environnement
├── .eslintrc.js              # Configuration ESLint
├── .gitignore                # Fichiers ignorés par Git
├── .prettierrc.js            # Configuration Prettier
├── jest.config.js            # Configuration Jest pour les tests
├── next.config.js            # Configuration Next.js
├── package.json              # Dépendances et scripts
├── postcss.config.js         # Configuration PostCSS
├── README.md                 # Documentation principale
├── tailwind.config.js        # Configuration Tailwind CSS
└── tsconfig.json             # Configuration TypeScript
```

## 3. Structure détaillée du code source (src/)

```
src/
├── app/                      # Structure basée sur App Router de Next.js 13+
│   ├── (public)/             # Routes publiques
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── a-propos/         # Section À propos
│   │   ├── filieres/         # Section Filières
│   │   │   ├── page.tsx      # Liste des filières
│   │   │   ├── [slug]/       # Page détaillée d'une filière
│   │   │   │   └── page.tsx
│   │   ├── admissions/       # Section Admissions
│   │   ├── vie-etudiante/    # Section Vie étudiante
│   │   ├── actualites/       # Section Actualités
│   │   │   ├── page.tsx      # Liste des actualités
│   │   │   ├── [slug]/       # Article d'actualité
│   │   │   │   └── page.tsx
│   │   └── contact/          # Page de contact
│   │
│   ├── (auth)/               # Routes d'authentification
│   │   ├── connexion/        # Page de connexion
│   │   ├── inscription/      # Page d'inscription
│   │   ├── mot-de-passe/     # Récupération mot de passe
│   │   └── verification/     # Vérification de compte
│   │
│   ├── (candidat)/           # Portail candidat (protégé)
│   │   ├── layout.tsx        # Layout pour candidats
│   │   ├── page.tsx          # Dashboard candidat
│   │   ├── candidature/      # Processus de candidature
│   │   ├── documents/        # Gestion des documents
│   │   ├── messages/         # Messagerie
│   │   └── paiements/        # Paiements des frais
│   │
│   ├── (etudiant)/           # Portail étudiant (protégé)
│   │   ├── layout.tsx        # Layout pour étudiants
│   │   ├── page.tsx          # Dashboard étudiant
│   │   ├── cours/            # Cours et programmes
│   │   ├── emploi-du-temps/  # Emploi du temps
│   │   ├── notes/            # Notes et évaluations
│   │   ├── documents/        # Documents administratifs
│   │   ├── bibliotheque/     # Ressources de la bibliothèque
│   │   └── paiements/        # Frais de scolarité
│   │
│   ├── (professeur)/         # Portail professeur (protégé)
│   │   ├── layout.tsx        # Layout pour professeurs
│   │   ├── page.tsx          # Dashboard professeur
│   │   ├── cours/            # Gestion des cours
│   │   ├── etudiants/        # Listes et évaluations
│   │   ├── ressources/       # Ressources pédagogiques
│   │   └── planning/         # Emploi du temps
│   │
│   ├── (admin)/              # Portail administratif (protégé)
│   │   ├── layout.tsx        # Layout pour admins
│   │   ├── page.tsx          # Dashboard admin
│   │   ├── admissions/       # Gestion des admissions
│   │   ├── utilisateurs/     # Gestion des utilisateurs
│   │   ├── contenu/          # Gestion de contenu
│   │   ├── finances/         # Gestion financière
│   │   ├── rapports/         # Statistiques et rapports
│   │   └── parametres/       # Paramètres du système
│   │
│   ├── api/                  # API Routes pour fonctionnalités spécifiques
│   │   ├── webhooks/         # Endpoints pour webhooks (paiements, etc.)
│   │   ├── contact/          # Endpoint formulaire de contact
│   │   └── export/           # Endpoints pour exports (PDF, Excel)
│   │
│   ├── layout.tsx            # Layout racine pour toute l'application
│   ├── not-found.tsx         # Page 404
│   ├── error.tsx             # Composant d'erreur global
│   ├── loading.tsx           # Composant de chargement global
│   └── globals.css           # Styles CSS globaux
│
├── components/               # Composants React réutilisables
│   ├── common/               # Composants génériques
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Form/
│   │   │   ├── Input/
│   │   │   ├── Select/
│   │   │   ├── Checkbox/
│   │   │   └── ...
│   │   ├── Modal/
│   │   ├── Table/
│   │   ├── Tabs/
│   │   └── ...
│   │
│   ├── layout/               # Composants de structure
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Sidebar/
│   │   ├── Navigation/
│   │   └── ...
│   │
│   ├── sections/             # Sections spécifiques de pages
│   │   ├── home/             # Sections page d'accueil
│   │   ├── filieres/         # Sections pages filières
│   │   ├── etudiants/        # Sections portail étudiant
│   │   └── ...
│   │
│   ├── dashboards/           # Composants pour tableaux de bord
│   │   ├── etudiant/
│   │   ├── professeur/
│   │   ├── admin/
│   │   └── ...
│   │
│   └── ui/                   # Composants UI réutilisables (atomiques)
│       ├── Avatar/
│       ├── Badge/
│       ├── Breadcrumb/
│       ├── Dropdown/
│       ├── Icon/
│       └── ...
│
├── context/                  # Contextes React
│   ├── AuthContext.tsx       # Contexte d'authentification
│   ├── ThemeContext.tsx      # Contexte de thème
│   ├── NotificationContext.tsx # Contexte de notifications
│   └── ...
│
├── hooks/                    # Hooks React personnalisés
│   ├── useAuth.ts            # Gestion authentification
│   ├── useFetch.ts           # Récupération données
│   ├── useForm.ts            # Gestion formulaires
│   ├── useMediaQuery.ts      # Responsive design
│   ├── useLocalStorage.ts    # Stockage local
│   └── ...
│
├── lib/                      # Bibliothèques et utilitaires
│   ├── supabase/             # Client et fonctions Supabase
│   │   ├── client.ts         # Instance du client Supabase
│   │   ├── auth.ts           # Fonctions d'authentification
│   │   ├── queries/          # Requêtes Supabase organisées
│   │   └── types.ts          # Types pour données Supabase
│   │
│   ├── api/                  # Fonctions API
│   │   ├── client.ts         # Client API de base
│   │   ├── endpoints.ts      # Configuration des endpoints
│   │   └── ...
│   │
│   ├── utils/                # Fonctions utilitaires
│   │   ├── date.ts           # Manipulation des dates
│   │   ├── format.ts         # Formatage (monnaie, nombres)
│   │   ├── validation.ts     # Validation de données
│   │   ├── storage.ts        # Gestion du stockage
│   │   └── ...
│   │
│   └── config/               # Configurations
│       ├── constants.ts      # Constantes globales
│       ├── routes.ts         # Configuration des routes
│       ├── menu.ts           # Structure des menus
│       └── ...
│
├── store/                    # État global (Zustand/Redux)
│   ├── index.ts              # Configuration du store
│   ├── slices/               # Découpage par fonctionnalité
│   │   ├── authSlice.ts
│   │   ├── uiSlice.ts
│   │   └── ...
│   └── middlewares/          # Middlewares pour le store
│
├── styles/                   # Styles et thèmes
│   ├── theme.ts              # Configuration du thème
│   ├── animations.css        # Animations globales
│   ├── mixins.scss           # Mixins SCSS
│   └── ...
│
└── types/                    # Types TypeScript globaux
    ├── auth.ts               # Types d'authentification
    ├── user.ts               # Types utilisateur
    ├── data.ts               # Types de données métier
    └── ...
```

## 4. Structure des assets statiques (public/)

```
public/
├── favicon.ico               # Favicon principal
├── logo/                     # Logos de l'école
│   ├── logo-full.svg         # Logo complet
│   ├── logo-symbol.svg       # Symbole seul
│   ├── logo-full-white.svg   # Version blanche
│   └── favicon/              # Favicons toutes tailles
│
├── images/                   # Images du site
│   ├── heros/                # Images grandes bannières
│   ├── campus/               # Photos du campus
│   ├── people/               # Photos du personnel et étudiants
│   ├── illustrations/        # Illustrations et icônes
│   └── backgrounds/          # Arrière-plans et textures
│
├── fonts/                    # Polices si hébergées localement
│
├── documents/                # Documents téléchargeables
│   ├── brochures/            # Brochures programmes
│   ├── formulaires/          # Formulaires administratifs
│   └── reglements/           # Règlements et chartes
│
└── locales/                  # Fichiers de traduction
    ├── fr/                   # Français (défaut)
    └── en/                   # Anglais
```

## 5. Structure de documentation (docs/)

```
docs/
├── architecture/             # Documentation architecture
│   ├── overview.md           # Vue d'ensemble
│   ├── frontend.md           # Architecture frontend
│   ├── backend.md            # Architecture backend
│   └── database.md           # Structure de la base de données
│
├── guides/                   # Guides développeur
│   ├── getting-started.md    # Mise en place environnement
│   ├── coding-standards.md   # Standards de code
│   ├── testing.md            # Guide de tests
│   └── deployment.md         # Processus de déploiement
│
├── wireframes/               # Wireframes et maquettes
│
├── api/                      # Documentation API
│
└── user/                     # Documentation utilisateur
    ├── admin-guide.md        # Guide administrateur
    ├── teacher-guide.md      # Guide professeur
    └── student-guide.md      # Guide étudiant
```

## 6. Structure Supabase

### 6.1 Tables principales

```
Tables Supabase:
├── auth.users                # Table Supabase Auth
│
├── public.user_profiles      # Profils utilisateurs étendus
├── public.user_roles         # Rôles des utilisateurs
├── public.user_permissions   # Permissions spécifiques
│
├── public.programs           # Programmes académiques/Filières
├── public.courses            # Cours disponibles
├── public.sections           # Sections de cours (par semestre)
├── public.modules            # Modules dans les cours
│
├── public.students           # Informations étudiants
├── public.student_courses    # Inscriptions aux cours
├── public.grades             # Notes et évaluations
├── public.attendance         # Présence aux cours
│
├── public.professors         # Informations professeurs
├── public.professor_courses  # Affectations de cours
│
├── public.applications       # Candidatures
├── public.application_docs   # Documents de candidature
├── public.application_status # Statuts de candidature
│
├── public.schedules          # Emplois du temps
├── public.rooms              # Salles et espaces
├── public.events             # Événements et activités
│
├── public.content_pages      # Pages de contenu CMS
├── public.news               # Actualités
├── public.media              # Fichiers médias
│
├── public.payments           # Paiements
├── public.invoices           # Factures
├── public.payment_methods    # Méthodes de paiement
│
└── public.settings           # Paramètres du système
```

### 6.2 Structure des fonctions edge (supabase/functions/)

```
supabase/functions/
├── auth-hooks/               # Hooks d'authentification
│   └── index.ts
│
├── payment-webhook/          # Webhook pour intégration paiement
│   └── index.ts
│
├── generate-document/        # Génération de documents PDF
│   └── index.ts
│
├── send-notifications/       # Envoi de notifications
│   └── index.ts
│
└── utils/                    # Utilitaires partagés pour fonctions
    ├── cors.ts
    ├── auth.ts
    └── ...
```

### 6.3 Structure des migrations (migrations/)

```
migrations/
├── 0000_initial_schema.sql       # Schema initial
├── 0001_add_user_profiles.sql    # Ajout profils utilisateurs
├── 0002_create_programs.sql      # Création tables programmes
├── 0003_create_applications.sql  # Tables candidatures
├── 0004_add_schedules.sql        # Tables emplois du temps
├── ...
└── seed/                         # Données initiales
    ├── programs_seed.sql         # Données programmes
    ├── courses_seed.sql          # Données cours
    └── admin_seed.sql            # Utilisateur admin
```

## 7. Structure de tests

```
src/
├── __tests__/                # Tests globaux
│   ├── integration/          # Tests d'intégration
│   └── e2e/                  # Tests end-to-end
│
└── components/               # Tests de composants (co-localisés)
    ├── common/
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.test.tsx    # Tests unitaires pour Button
    │   │   └── Button.stories.tsx # Storybook pour Button
    │   └── ...
    └── ...
```

## 8. Conventions de nommage

### 8.1 Fichiers et dossiers

- **Composants React** : PascalCase (ex: `Button.tsx`, `UserProfile.tsx`)
- **Hooks et utilitaires** : camelCase (ex: `useAuth.ts`, `formatDate.ts`)
- **Pages Next.js** : kebab-case pour les dossiers, `page.tsx` pour les fichiers
- **Dossiers de fonctionnalités** : kebab-case (ex: `user-profile/`, `course-list/`)
- **Fichiers de test** : Même nom que le fichier testé avec suffixe `.test.ts` ou `.spec.ts`
- **Fichiers Storybook** : Même nom que le composant avec suffixe `.stories.tsx`

### 8.2 Modules CSS

- **Modules CSS globaux** : `[name].css` (ex: `globals.css`)
- **Modules CSS de composants** : `[ComponentName].module.css` (ex: `Button.module.css`)
- **Variables CSS** : kebab-case (ex: `--primary-color`, `--header-height`)

### 8.3 URLs et routes

- **Routes publiques** : kebab-case, descriptives (ex: `/filieres/informatique`)
- **Routes d'API** : kebab-case, commençant par `/api` (ex: `/api/user-profile`)
- **Routes protégées** : préfixées par le type d'utilisateur (ex: `/etudiant/cours`)

## 9. Organisation et dépendances

### 9.1 Dépendances principales

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@supabase/supabase-js": "^2.38.0",
    "@supabase/auth-helpers-nextjs": "^0.8.0",
    "zustand": "^4.4.1",
    "tailwindcss": "^3.3.3",
    "zod": "^3.22.2",
    "react-hook-form": "^7.46.1",
    "@hookform/resolvers": "^3.3.1",
    "date-fns": "^2.30.0",
    "framer-motion": "^10.16.4",
    "react-query": "^3.39.3",
    "next-i18next": "^14.0.3",
    "axios": "^1.5.0",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "eslint": "^8.49.0",
    "prettier": "^3.0.3",
    "jest": "^29.7.0",
    "@testing-library/react": "^14.0.0",
    "cypress": "^13.3.0",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "postcss": "^8.4.30",
    "autoprefixer": "^10.4.16",
    "storybook": "^7.4.5"
  }
}
```

### 9.2 Structure de TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@lib/*": ["./src/lib/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@styles/*": ["./src/styles/*"],
      "@context/*": ["./src/context/*"],
      "@store/*": ["./src/store/*"],
      "@types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 10. Bonnes pratiques d'organisation

### 10.1 Structure de composants

Chaque composant important devrait suivre une structure cohérente:

```
components/common/Button/
├── Button.tsx               # Composant principal
├── Button.module.css        # Styles spécifiques (si non Tailwind)
├── Button.test.tsx          # Tests unitaires
├── Button.stories.tsx       # Documentation Storybook
├── useButton.ts             # Hook spécifique (si nécessaire)
└── index.ts                 # Export principal
```

### 10.2 État global vs local

- **État global** : Géré par Zustand pour les données partagées entre composants distants
  - Authentification utilisateur
  - Préférences globales
  - Notifications
  - Données de référence fréquemment utilisées

- **État local** : Géré par React useState ou useReducer pour:
  - État UI des composants
  - Formulaires isolés
  - Données temporaires
  - États de modalités

### 10.3 Isolation des préoccupations

- **Logique métier** : Isolée dans des hooks et services
- **Présentation** : Isolée dans des composants
- **Routage et layout** : Gérés par Next.js
- **Accès aux données** : Centralisé dans les services API
- **Validation** : Zod pour validation de formulaire et de données

## 11. Configuration et environnements

### 11.1 Variables d'environnement (.env)

```
# Base URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Auth
NEXT_PUBLIC_AUTH_COOKIE_NAME=ecole-superieure-auth

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA-XXXXX

# Paiement
NEXT_PUBLIC_PAYMENT_GATEWAY_PUBLIC_KEY=pk_test_xxxx
PAYMENT_GATEWAY_SECRET_KEY=sk_test_xxxx

# i18n
NEXT_PUBLIC_DEFAULT_LOCALE=fr
```

### 11.2 Environnements distincts

- **Développement** : `.env.development`
- **Test** : `.env.test`
- **Production** : `.env.production`
- **Local** : `.env.local` (pour surcharges locales, non versionnées)

## 12. Stratégies et considérations avancées

### 12.1 Code splitting et chargement différé

- Utilisation de `React.lazy()` et `next/dynamic` pour les composants lourds
- Préchargement des routes fréquemment visitées
- Stratégie de chunking pour optimiser le First Contentful Paint (FCP)

```tsx
// Exemple de chargement différé avec Next.js
import dynamic from 'next/dynamic';

const DynamicDataTable = dynamic(() => import('@components/common/DataTable'), {
  loading: () => <TableSkeleton />,
  ssr: false // Si le composant utilise des API navigateur
});
```

### 12.2 Optimisation des médias

- Format WebP avec fallbacks
- Conversion automatique des images via Next.js Image
- Stratégie de lazy loading des médias sous la ligne de flottaison
- Préchargement des ressources critiques

### 12.3 Organisation des styles avec Tailwind

- Utilisation de la directive `@layer` pour organisation
- Composants de style réutilisables via `@apply`
- Thème centralisé dans `tailwind.config.js`
- Utilisation de CSS modules pour styles complexes

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A6E4E',
          light: '#0F8A63',
          dark: '#07503A'
        },
        accent: {
          DEFAULT: '#F5C945',
          light: '#FFDA6A',
          dark: '#E2B52F'
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      // Autres extensions
    }
  },
  // Autres configurations
}
```

## 13. Ressources et documentation

### 13.1 Documentation interne

- README.md principal avec guide de démarrage rapide
- Documentation composants dans Storybook
- Documentation API avec Swagger/OpenAPI

### 13.2 Liens et ressources externes

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

---

Document préparé le 16 mai 2025  
Version 1.0
