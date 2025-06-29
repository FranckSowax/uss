# Site Web de l'USS (Université des Sciences de la Santé)

Ce projet est un site web moderne développé pour l'Université des Sciences de la Santé au Gabon.

## Technologies utilisées

- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **Backend**: Supabase (Auth, Database, Storage)
- **Déploiement**: Vercel (recommandé)

## Structure du projet

Le projet suit l'architecture App Router de Next.js 13+ et est structuré comme suit:

```
src/
├── app/                      # Routes de l'application (App Router)
├── components/               # Composants React réutilisables
├── lib/                      # Bibliothèques et utilitaires
├── hooks/                    # Hooks personnalisés React
└── types/                    # Types TypeScript
```

## Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn

## Installation

1. Cloner le repository:

```bash
git clone <url-du-repo>
cd uss-website
```

2. Installer les dépendances:

```bash
npm install
# ou
yarn install
```

3. Créer un fichier `.env.local` à la racine du projet avec les variables d'environnement nécessaires (voir `.env.example`).

4. Démarrer le serveur de développement:

```bash
npm run dev
# ou
yarn dev
```

5. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement

Le site peut être déployé sur Vercel:

1. Créer un compte sur [Vercel](https://vercel.com).
2. Connecter le repository GitHub.
3. Configurer les variables d'environnement.
4. Déployer!

## Documentation

La documentation complète du projet est disponible dans le dossier `/Docs`.
