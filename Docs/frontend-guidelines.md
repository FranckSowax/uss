# Document de Directives Frontend
# Site Web École Supérieure au Gabon

## 1. Introduction

Ce document définit les directives et standards pour le développement frontend du site web de l'École Supérieure au Gabon. Il vise à établir une base cohérente pour l'interface utilisateur, en respectant l'identité visuelle de l'institution tout en garantissant une expérience utilisateur optimale.

## 2. Charte graphique

### 2.1 Palette de couleurs

#### 2.1.1 Couleurs principales
- **Vert principal** : `#0A6E4E` - Utilisé pour les éléments principaux, en-têtes, boutons d'action primaires
- **Jaune accent** : `#F5C945` - Utilisé pour les accents, mises en évidence, call-to-action secondaires
- **Blanc** : `#FFFFFF` - Arrière-plan principal, textes sur fond foncé
- **Noir/Gris foncé** : `#212121` - Textes principaux, titres

#### 2.1.2 Couleurs secondaires
- **Vert clair** : `#0F8A63` - Variante plus claire du vert principal pour les survols, gradients
- **Gris clair** : `#F5F5F5` - Arrière-plans secondaires, sections alternées
- **Gris moyen** : `#E0E0E0` - Bordures, séparateurs, ombres légères
- **Bleu académique** : `#2D5B8E` - Utilisé spécifiquement pour les sections académiques

#### 2.1.3 Utilisation des couleurs
- Maintenir un ratio de contraste minimum de 4.5:1 pour la lisibilité du texte
- Limiter l'utilisation des couleurs vives pour éviter la surcharge visuelle
- Utiliser des dégradés subtils pour les boutons et les sections importantes
- Appliquer systématiquement les couleurs de l'institution pour renforcer l'identité de marque

### 2.2 Typographie

#### 2.2.1 Polices principales
- **Titres et en-têtes** : `Montserrat` - Semi-bold (600) pour les titres principaux, Medium (500) pour sous-titres
- **Corps de texte** : `Noto Sans` - Regular (400) pour le texte courant, Light (300) pour textes secondaires
- **Accents et CTAs** : `Montserrat` - Bold (700) pour les boutons et éléments d'accent

#### 2.2.2 Hiérarchie typographique
- **H1** : 36px/44px, Montserrat Semi-bold
- **H2** : 28px/36px, Montserrat Semi-bold
- **H3** : 24px/32px, Montserrat Medium
- **H4** : 20px/28px, Montserrat Medium
- **Corps de texte** : 16px/24px, Noto Sans Regular
- **Texte secondaire** : 14px/20px, Noto Sans Regular
- **Petit texte / Notes** : 12px/16px, Noto Sans Light

#### 2.2.3 Règles typographiques
- Utiliser l'interlignage (line-height) spécifié pour assurer une bonne lisibilité
- Limiter les lignes de texte à 75 caractères maximum pour le confort de lecture
- Maintenir une hiérarchie cohérente sur toutes les pages
- Assurer une taille minimale de 14px pour le texte standard, 12px pour les informations secondaires

### 2.3 Iconographie

#### 2.3.1 Style d'icônes
- Utiliser des icônes de ligne moderne avec une épaisseur de trait cohérente
- Option recommandée : [Phosphor Icons](https://phosphoricons.com/) ou [Heroicons](https://heroicons.com/)
- Taille standard : 24px pour les icônes d'interface, 20px pour les icônes contextuelles

#### 2.3.2 Utilisation des icônes
- Accompagner les icônes de texte explicatif lorsqu'elles sont utilisées pour la navigation
- Maintenir un style cohérent sur l'ensemble du site
- Utiliser des couleurs de la palette principale pour les icônes
- Fournir des états de survol et actifs pour les icônes interactives

### 2.4 Imagerie et médias

#### 2.4.1 Style photographique
- Privilégier des photos du campus et des étudiants en situation réelle
- Appliquer une correction colorimétrique cohérente pour toutes les images
- Ratio d'images recommandés : 16:9 pour les bannières, 3:2 pour les vignettes, 1:1 pour les avatars
- Résolution minimum : 1920x1080px pour les bannières, 800x600px pour les images de contenu

#### 2.4.2 Traitement des images
- Appliquer un léger filtre vert (teinte #0A6E4E à 10% d'opacité) pour les images principales
- Optimiser toutes les images pour le web (compression, format WebP avec fallback JPEG)
- Prévoir des versions mobile et desktop pour les images importantes
- Utiliser des effets de masque arrondis (12px) pour les vignettes et témoignages

## 3. Composants d'interface

### 3.1 Grille et mise en page

#### 3.1.1 Système de grille
- Layout à 12 colonnes pour desktop et tablette
- Layout à 4 colonnes pour mobile
- Gouttières : 24px desktop, 16px mobile
- Marges extérieures : 64px desktop, 32px tablette, 16px mobile

#### 3.1.2 Points de rupture (breakpoints)
- **Mobile** : 320px - 767px
- **Tablette** : 768px - 1023px
- **Desktop** : 1024px - 1439px
- **Large Desktop** : 1440px et plus

#### 3.1.3 Espacement
- Suivre une échelle d'espacement cohérente : 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Espacement vertical entre sections : 64px desktop, 48px mobile
- Espacement vertical entre éléments : 24px desktop, 16px mobile
- Espacement horizontal entre éléments : 16px desktop, 8px mobile

### 3.2 Composants primaires

#### 3.2.1 Boutons
- **Primaire** : Fond vert (#0A6E4E), texte blanc, arrondi 8px, padding 16px 24px
- **Secondaire** : Fond jaune (#F5C945), texte noir, arrondi 8px, padding 16px 24px
- **Tertiaire** : Fond transparent, bordure verte, texte vert, arrondi 8px, padding 16px 24px
- **États** : Survol (-10% luminosité), Focus (anneau lumineux), Désactivé (opacité 50%)
- **Tailles** : Grand (padding 16px 32px), Standard (padding 12px 24px), Petit (padding 8px 16px)

```css
/* Exemple de style pour bouton primaire */
.btn-primary {
  background-color: #0A6E4E;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0F8A63;
}
```

#### 3.2.2 Cartes
- Arrière-plan blanc
- Ombre portée légère : `0 4px 12px rgba(0, 0, 0, 0.05)`
- Coins arrondis : 12px
- Padding interne : 24px
- Options de bordure : sans bordure ou bordure fine 1px (#E0E0E0)
- Options d'accent : barre supérieure 4px verte ou jaune

```css
/* Exemple de style pour carte standard */
.card {
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.card--accent-green {
  border-top: 4px solid #0A6E4E;
}

.card--accent-yellow {
  border-top: 4px solid #F5C945;
}
```

#### 3.2.3 Formulaires
- Labels : Montserrat Medium 14px, placés au-dessus des champs
- Champs : Padding 12px 16px, bordure 1px (#E0E0E0), coins arrondis 8px
- Focus : Bordure verte 2px, ombre légère
- Validation : Vert pour succès, Rouge pour erreur
- Messages d'erreur : Rouge, 12px, positionnés sous le champ
- Espacement entre champs : 24px

```css
/* Exemple de style pour champ de formulaire */
.form-field {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: #0A6E4E;
  box-shadow: 0 0 0 2px rgba(10, 110, 78, 0.2);
  outline: none;
}
```

#### 3.2.4 Navigation
- Navigation principale : Fond blanc, ombre légère, hauteur 80px
- Navigation mobile : Menu hamburger, vue plein écran
- Liens actifs : Bordure inférieure verte 2px ou texte vert
- Dropdown : Apparition avec légère animation, coins arrondis 8px
- Mega menu : Pour les sections complexes (formations, vie étudiante)

```css
/* Exemple de style pour navigation principale */
.main-nav {
  background-color: #FFFFFF;
  height: 80px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #212121;
  padding: 8px 16px;
  text-decoration: none;
  position: relative;
}

.nav-link.active {
  color: #0A6E4E;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 16px;
  right: 16px;
  height: 2px;
  background-color: #0A6E4E;
}
```

### 3.3 Composants spécifiques

#### 3.3.1 Tableaux de cours/programmes
- En-têtes : Fond vert clair, texte blanc, alignement gauche
- Lignes alternées : Blanc et gris très clair (#F9F9F9)
- Bordures : Subtiles, 1px (#E0E0E0)
- Responsive : Scroll horizontal sur mobile, ou recomposition en cards

#### 3.3.2 Calendrier d'événements
- Vue mensuelle par défaut, options jour/semaine
- Événements : Pastilles de couleur selon catégorie
- Aujourd'hui : Mise en évidence avec cercle vert
- Responsive : Vue liste sur mobile

#### 3.3.3 Profils enseignants/étudiants
- Photo : Format carré avec masque arrondi (8px)
- Informations : Nom, titre, spécialité
- Options : Liens réseaux sociaux académiques, contact
- Disposition : Grille sur desktop, liste sur mobile

#### 3.3.4 Témoignages
- Format : Citation avec photo, nom et statut
- Style : Carte avec accent jaune, guillemets décoratifs
- Carousel : Navigation par flèches et points
- Options : Vidéo ou texte

```css
/* Exemple de style pour témoignage */
.testimonial {
  position: relative;
  padding: 32px 24px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-top: 4px solid #F5C945;
}

.testimonial__quote {
  font-style: italic;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.testimonial__author {
  display: flex;
  align-items: center;
}

.testimonial__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}

.testimonial__name {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
}

.testimonial__position {
  font-size: 12px;
  color: #757575;
}
```

## 4. Patterns d'interaction

### 4.1 Animations et transitions

#### 4.1.1 Principes généraux
- Fluidité : Transitions entre 200ms et 300ms
- Courbes d'accélération : Ease-out pour apparitions, ease-in-out pour changements d'état
- Subtilité : Animations discrètes et utiles, jamais distrayantes
- Accessibilité : Possibilité de réduire les animations (prefers-reduced-motion)

#### 4.1.2 Animations spécifiques
- Boutons : Léger scale (1.05) et changement de couleur au survol
- Navigation : Transition douce pour les dropdowns (opacity et transform)
- Cartes : Légère élévation au survol (augmentation de l'ombre)
- Page transitions : Fade-in pour les changements de page (avec Next.js/React Router)

```css
/* Exemple de transition pour carte interactive */
.interactive-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.interactive-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Support des préférences de réduction de mouvement */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.001s !important;
    animation-duration: 0.001s !important;
  }
}
```

### 4.2 États et feedback

#### 4.2.1 États interactifs
- Survol (hover) : Changement de couleur/opacité subtil
- Focus : Anneau de focus visible (outline) pour accessibilité clavier
- Actif/Pressé : Légère réduction d'échelle (scale 0.98)
- Désactivé : Opacité réduite (0.5) et curseur non-disponible

#### 4.2.2 Feedback utilisateur
- Boutons de soumission : État de chargement avec spinner
- Formulaires : Validation instantanée lorsque possible
- Actions réussies : Message toast vert avec icône de confirmation
- Erreurs : Message toast rouge avec icône d'alerte

### 4.3 Navigation et structure

#### 4.3.1 Navigation principale
- Desktop : Barre horizontale avec dropdowns
- Mobile : Menu hamburger avec panneau latéral
- Sticky on scroll : Réduit en hauteur lors du défilement
- Indicateur de section active visible

#### 4.3.2 Navigation secondaire
- Fils d'Ariane (Breadcrumbs) pour la hiérarchie des pages
- Menu latéral pour les sections avec beaucoup de sous-pages
- Onglets pour grouper du contenu connexe
- "Retour à" pour faciliter la navigation en arrière

#### 4.3.3 Recherche
- Champ visible dans la navigation ou icône expandable
- Suggestions de recherche et autocomplétion
- Résultats groupés par catégorie
- Mise en évidence des termes recherchés

## 5. Implémentation technique

### 5.1 Technologies frontend

#### 5.1.1 Stack principal
- **Framework** : Next.js (React) pour le rendu côté serveur et l'optimisation
- **Styles** : Tailwind CSS avec thème personnalisé
- **Animations** : Framer Motion pour les animations complexes
- **Formulaires** : React Hook Form avec Zod pour la validation
- **État global** : Zustand ou Redux Toolkit selon la complexité

#### 5.1.2 Polyfills et compatibilité
- Support des navigateurs : 2 dernières versions des navigateurs principaux
- Compilation babel pour compatibilité ES5 quand nécessaire
- Polyfills automatiques via Next.js

### 5.2 Performance

#### 5.2.1 Images et médias
- Format WebP avec fallback JPEG/PNG
- Lazy loading pour toutes les images sous la ligne de flottaison
- Tailles responsives avec `srcset` et `sizes`
- Optimisation automatique via Next.js Image

```jsx
// Exemple de composant image optimisé avec Next.js
import Image from 'next/image';

const ResponsiveImage = ({ src, alt, className }) => (
  <div className={`relative ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
      loading="lazy"
    />
  </div>
);
```

#### 5.2.2 Code et ressources
- Bundle splitting automatique via Next.js
- Minification de CSS, JS et HTML en production
- Preloading des ressources critiques
- Code-splitting basé sur les routes

#### 5.2.3 Métriques de performance
- Core Web Vitals comme objectifs de performance
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- Lighthouse score minimum: 90+ dans toutes les catégories

### 5.3 Accessibilité

#### 5.3.1 Standards WCAG
- Conformité WCAG 2.1 niveau AA
- Structure sémantique du HTML
- Attributs ARIA quand nécessaire
- Navigation au clavier complète

#### 5.3.2 Mesures spécifiques
- Contrastes de couleur conformes (4.5:1 minimum)
- Textes alternatifs pour toutes les images
- Labels explicites pour tous les contrôles de formulaire
- Messages d'erreur clairs et suggestions de correction

#### 5.3.3 Tests d'accessibilité
- Audit automatisé via axe-core
- Tests manuels avec lecteurs d'écran (NVDA, VoiceOver)
- Navigation au clavier pour tous les parcours utilisateur

```jsx
// Exemple de composant bouton accessible
const Button = ({ children, onClick, disabled = false, variant = 'primary' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`btn btn-${variant}`}
    aria-disabled={disabled}
  >
    {children}
  </button>
);
```

### 5.4 Internationalisation

#### 5.4.1 Structure i18n
- Français comme langue principale
- Support de l'anglais dans les sections clés
- Architecture basée sur next-i18next
- Détection automatique de la langue du navigateur

#### 5.4.2 Gestion des traductions
- Fichiers JSON par langue et par namespace
- Variables pour les éléments dynamiques
- Support du pluriel et des formats de date localisés

```jsx
// Exemple de composant avec i18n
import { useTranslation } from 'next-i18next';

const WelcomeMessage = () => {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.subtitle')}</p>
    </div>
  );
};
```

## 6. Conventions de code

### 6.1 Structure des dossiers

```
/src
  /components
    /common          # Composants réutilisables (boutons, cartes, etc.)
    /layout          # Éléments de layout (header, footer, etc.)
    /sections        # Sections spécifiques des pages
    /forms           # Composants de formulaire
  /hooks             # Hooks React personnalisés
  /lib               # Fonctions utilitaires, constantes, etc.
  /context           # Contextes React (thème, auth, etc.)
  /pages             # Pages Next.js
  /public            # Assets statiques
  /styles            # Fichiers CSS/SCSS globaux
  /data              # Données statiques ou mocks
```

### 6.2 Conventions de nommage

- **Composants React** : PascalCase (ex: `ProgramCard.js`)
- **Hooks** : camelCase préfixé par 'use' (ex: `useFormValidation.js`)
- **Fonctions utilitaires** : camelCase (ex: `formatDate.js`)
- **Classes CSS avec Tailwind** : kebab-case (ex: `card-container`)
- **Variables d'état** : camelCase descriptif (ex: `isLoading`, `userData`)

### 6.3 Bonnes pratiques React

- Composants fonctionnels avec Hooks
- Props destructuring en paramètres
- Utilisation de `React.memo()` pour optimiser les re-renders
- PropTypes ou TypeScript pour la validation des props
- Organisation par feature plutôt que par type

```jsx
// Exemple de composant React suivant les conventions
import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '@/lib/utils';

const EventCard = ({ title, date, location, imageUrl }) => {
  const formattedDate = formatDate(date, 'DD MMMM YYYY');
  
  return (
    <div className="event-card">
      <div className="event-card__image-container">
        <img src={imageUrl} alt={title} className="event-card__image" />
      </div>
      <div className="event-card__content">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__date">{formattedDate}</p>
        <p className="event-card__location">{location}</p>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EventCard;
```

## 7. Optimisations pour le contexte gabonais

### 7.1 Performance réseau

- Optimisation pour connexions lentes et instables
- Stratégies de mise en cache agressive
- Bundle size réduit (<300Ko pour les fichiers JS initiaux)
- Lazy loading pour tous les composants non-critiques

### 7.2 Résilience

- États de chargement et d'erreur pour toutes les requêtes réseau
- Retry automatique sur échec de connexion
- Mode hors-ligne pour les fonctionnalités essentielles
- Sauvegarde locale des formulaires en cours de remplissage

### 7.3 Réduction de consommation de données

- Compression des assets optimisée
- Images à résolution adaptative
- Option de chargement d'images basse résolution
- Préchargement intelligent basé sur la qualité de connexion

```jsx
// Exemple de hook pour détecter la qualité de connexion
import { useState, useEffect } from 'react';

export const useConnectionQuality = () => {
  const [connectionQuality, setConnectionQuality] = useState('high');
  
  useEffect(() => {
    // Détection basée sur l'API Network Information
    if ('connection' in navigator) {
      const connection = navigator.connection;
      
      const updateConnectionQuality = () => {
        if (connection.downlink < 1) {
          setConnectionQuality('low');
        } else if (connection.downlink < 5) {
          setConnectionQuality('medium');
        } else {
          setConnectionQuality('high');
        }
      };
      
      updateConnectionQuality();
      connection.addEventListener('change', updateConnectionQuality);
      
      return () => {
        connection.removeEventListener('change', updateConnectionQuality);
      };
    }
    
    // Fallback: test de bande passante simple
    // ...
  }, []);
  
  return connectionQuality;
};
```

## 8. Pages type et composants spécifiques

### 8.1 Page d'accueil

#### 8.1.1 Composants
- Hero section avec slider d'images et CTA principal
- Présentation des filières phares (3-4 cartes)
- Section actualités et événements à venir
- Témoignages d'étudiants en carousel
- Chiffres clés de l'école avec compteurs animés
- Formulaire de contact rapide ou CTA vers admissions

#### 8.1.2 Spécifications
- Background visuel fort et épuré
- Animation subtile à l'entrée des sections (fade-in au scroll)
- Design asymétrique avec accents colorés
- Utilisation d'images de haute qualité du campus

### 8.2 Page de programme/filière

#### 8.2.1 Composants
- En-tête avec titre, description courte et image représentative
- Navigation secondaire sticky (Aperçu, Programme, Débouchés, Admissions)
- Grille des cours avec filtres par année/semestre
- Témoignages d'anciens étudiants spécifiques au programme
- Section équipe pédagogique avec profils
- FAQ spécifique au programme
- CTA pour candidature ou demande d'information

#### 8.2.2 Spécifications
- Code couleur subtil spécifique à chaque domaine d'études
- Possibilité de télécharger la brochure PDF
- Visualisation claire du parcours et des options

### 8.3 Portail étudiant

#### 8.3.1 Composants
- Tableau de bord avec widgets personnalisables
- Calendrier d'événements et emploi du temps
- Liste des cours avec progression
- Notifications et alertes
- Accès aux ressources pédagogiques
- Messagerie interne

#### 8.3.2 Spécifications
- Interface fonctionnelle et minimaliste
- Haute densité d'information sans surcharge visuelle
- Navigation rapide entre les fonctionnalités fréquentes
- Support mobile optimisé pour consultation rapide

## 9. Ressources et assets

### 9.1 Bibliothèque d'icônes
- Set d'icônes complet au format SVG
- Déclinaisons en 2 tailles (24px et 20px)
- Variants rempli et ligne selon contexte

### 9.2 Composants graphiques
- Formes organiques et géométriques pour décorations
- Patterns vectoriels pour arrière-plans
- Éléments d'accent pour mise en valeur (traits, cercles, points)

### 9.3 Templates et modèles
- Modèles Figma pour les pages principales
- Bibliothèque de composants UI
- Documentation des patterns d'interaction

### 9.4 Référence photographique
- Banque d'images du campus et activités
- Guidelines pour nouvelles photographies
- Traitements recommandés et exemples

## 10. Processus de travail

### 10.1 Workflow de design
- Wireframes basse fidélité -> maquettes haute fidélité -> prototypes
- Système de design centralisé dans Figma
- Tests utilisateurs sur prototypes clés
- Design QA avant développement

### 10.2 Intégration design-développement
- Réunions de transfert design-développement
- Documentation des specifications techniques dans Figma
- Composants Storybook pour documentation vivante
- Revues régulières de cohérence UI/UX

### 10.3 Assurance qualité
- Tests sur multiples appareils et navigateurs
- Validation d'accessibilité automatisée et manuelle
- Tests de charge et de performance
- Audits UX périodiques basés sur analytics

---

Document préparé le 16 mai 2025  
Version 1.0
