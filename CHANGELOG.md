# Changelog

Toutes les modifications notables du projet seront consignées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/) et ce projet suit le versionnage sémantique.

## [1.0.0] - 18 Novembre 2025

### ✨ Ajouts

#### 🌐 Web App Interactive - Système complet de suivi
- **Hub d'accueil** (`index.html`) : Vue centralisée des 3 projets avec statistiques
- **Dashboards interactifs** : Un pour chaque projet (ForkX, Geekomobile, Geekagne)
  - Design responsive et ludique
  - Couleurs brand distinctives (rouge, bleu, vert)
  - Sections organisées : Statistiques → Actualités → Progression → Détails
- **Système de news centralisé** (`news.html`)
  - Page avec onglets par projet
  - Onglet sélectionné automatiquement depuis les dashboards
  - Système de news JSON avec loader dynamique
  - Boutons "Voir plus" avec ancres de navigation
- **Composants réutilisables** (`src/news-loader.js`)
  - Classe NewsLoader pour chargement des actualités
  - Support automatique des chemins relatifs
  - Intégration seamless dans tous les dashboards

#### 🎨 Design & UX
- Palettes de couleurs cohérentes par projet
- Layout responsive mobile-first
- Typographie moderne et lisible
- Animations fluides et discrètes
- Spacing et padding harmonisé (padding: 10px)
- Largeur container optimisée (max-width: 1400px)

#### 📰 Système d'actualités
- News stockées en JSON par projet
  - `src/news/forkx-news.json`
  - `src/news/geekomobile-news.json`
  - `src/news/geekagne-news.json`
- Affichage des 3 dernières news sur dashboards
- Bouton "Voir plus" vers page complète
- Navigation avec ancres (#forkx, #geekomobile, #geekagne)

### 🔧 Corrections
- Suppression de l'actualité 16 novembre de la description Geekagne sur index.html
- Harmonisation de l'alignement des badges (LEFT-aligned sur tous les dashboards)

### 📚 Documentation
- Mise à jour du README avec section "Web App Interactive"
- Architecture et flux utilisateur documentés
- Instructions de navigation

## [Unreleased]
- Comparatifs entre projets (Daily vs Doblo, etc.)
- Guides techniques globaux
- Base de données complète des systèmes
- Analytics et statistiques avancées
