# 📚 GeekVanlife - Contexte Complet du Projet

**Dernière mise à jour:** 18 novembre 2025

---

## 🎯 Mission et Philosophie

**GeekVanlife** est un projet documentaire et technique qui combine deux passions : la **génie informatique** et la **vie en autonomie nomade**.

### Qui ?

**Xavier Redondo** (alias **WolwX**)
- Formateur informatique professionnel
- Vanlifeur à l'année depuis août 2021
- Passionné par la technologie et l'autonomie
- Documenteur compulsif des systèmes et projets

### Quoi ?

Trois projets interconnectés documentant une vision complète de la vie nomade autonome :

1. **🚐 Geekomobile** - Van aménagé pour habitat permanent (Iveco Daily 2006)
2. **🍴✖️ ForkX** - Fourgon de loisir & aventure (Fiat Doblo Cargo 2020)
3. **🏕️ Geekagne** - Terrain autonome multi-projets (4700m² en Lorraine)

### Pourquoi ?

- **Partage d'expérience** : Aider la communauté vanlife avec des retours réels et documentés
- **Approche data-driven** : Suivi méticuleux de tous les systèmes
- **Transparence** : Code, plans et budgets entièrement visibles
- **Open source** : Liberté de réutiliser, modifier, améliorer
- **Inspiration** : Montrer qu'une vie autonome nomade est possible et enrichissante

---

## 🌐 Écosystème Web App Interactive

### Architecture générale

Le projet utilise un **système web moderne et ludique** pour présenter les trois projets :

```
┌─────────────────────────────────────────────────────────────┐
│                     index.html (Hub)                         │
│              Vue d'ensemble des 3 projets                    │
│  Statistiques, brefs descriptifs, navigation centralisée    │
└──────────────┬────────────────────────────┬─────────────────┘
               │                            │
    ┌──────────▼────────┐        ┌──────────▼────────────┐
    │  Geekomobile/     │        │   ForkX/              │
    │  dashboard.html   │        │   dashboard.html      │
    │  (Bleu 🔵)        │        │   (Rouge 🔴)          │
    │  - Stats habitat  │        │   - Stats avancée     │
    │  - Savoir-faire   │        │   - Budget/phases     │
    │  - Circuit        │        │   - Roadmap v0.1-v1.0 │
    │  [Voir plus news] │        │   [Voir plus news]    │
    └────────┬─────────┘        └──────────┬────────────┘
             │                             │
    ┌────────▼──────────────────────────────▼──────────┐
    │             news.html (Centralité)               │
    │  Trois onglets avec toutes les actualités       │
    │  - Geekagne (Vert 🟢)                           │
    │  - Geekomobile (Bleu 🔵)                        │
    │  - ForkX (Rouge 🔴)                             │
    │  Navigation intelligente par ancrage (#project)  │
    └──────────────────────────────────────────────────┘

    ┌──────────────────────┐
    │ Geekagne/            │
    │ dashboard.html       │
    │ (Vert 🟢)            │
    │ - Stats bâtiments    │
    │ - Plantations        │
    │ - Eau/récupération   │
    │ [Voir plus news]     │
    └──────────┬───────────┘
               │
               └────► [News automatiquement scrollées au bon onglet]
```

### Technologie

- **Frontend :** HTML5, CSS3, JavaScript (vanilla)
- **Data :** JSON pour les news (3 fichiers séparés)
- **Architecture :** Responsive design, mobile-first
- **Performance :** Chargement instantané, zéro dépendances externes
- **Accessibilité :** Sémantique HTML5, contraste WCAG AA

### Données stockées

```
📂 src/
  ├── news-loader.js       ← Classe ES6 pour charger les news
  └── news/
      ├── forkx-news.json  ← 5 actualités ForkX
      ├── geekomobile-news.json ← 4 actualités Geekomobile
      └── geekagne-news.json    ← 9 actualités Geekagne

📂 ForkX/
  └── dashboard.html       ← Interface ForkX

📂 Geekomobile/
  └── dashboard.html       ← Interface Geekomobile

📂 Geekagne/
  └── dashboard.html       ← Interface Geekagne

📄 news.html              ← Page centralité avec onglets
📄 index.html             ← Hub principal
```

---

## 📊 Les Trois Projets en Détail

### 1. 🚐 Geekomobile - Le Habitat Nomade

**Véhicule :** Iveco Daily 2006 (fourgon utilitaire)  
**Utilisateur :** Habitat permanent à l'année depuis août 2021  
**Statut :** V1.0 complète - Système stable et optimisé

#### Caractéristiques principales
- **Chauffage :** Diesel Webasto + radiateurs eau chaude
- **Eau :** Récupération pluviale (500L) + système de filtration
- **Électricité :** Batteries LiFePO4 + panneaux solaires + alternateur
- **Isolation :** Thermique complète pour hivernage
- **Habitat :** Cuisine, douchette, toilettes, couchette
- **Internet :** 4G nomade + points WiFi

#### Tableaux de bord suivis
- 📊 **Statistiques :** Version, autonomie, capacités (eau, électricité)
- 🌍 **Savoir-faire :** Techniques maîtrisées (entretien, dépannage, optimisations)
- 📅 **Circuit hebdomadaire :** Itinéraires et points de ravitaillement réguliers
- 📈 **Progression :** Détails techniques et améliorations futures

#### Documentation
- **CHANGELOG :** Évolutions et modifications chronologiques
- **Context file :** Détails complets du projet

---

### 2. 🍴✖️ ForkX - Le Fourgon d'Aventure

**Véhicule :** Fiat Doblo Cargo 2020 (petit fourgon)  
**Utilisateur :** Loisirs et aventures (Week-ends, vacances)  
**Statut :** V0.1 en cours - Nombreux projets prévus

#### Caractéristiques principales
- **Aménagement :** Modulable pour weekend ou aventure courte
- **Électricité :** Batterie auxiliaire + 220V portable
- **Eau :** Mini réservoir pour basique camping
- **Chauffage :** TBD (en réflexion pour v1.0)
- **Cuisine :** Portable/réchaud
- **Flexibilité :** Design pensé pour l'évolutivité

#### Tableaux de bord suivis
- 📊 **Statistiques :** Version v0.1, phases de développement
- 💰 **Budget :** Détail des coûts par composant (réel vs estimé)
- 🛣️ **Roadmap :** Timeline v0.1 → v1.0 avec jalons
- 🔧 **Composants :** Listes des installations prévues

#### Documentation
- **CHANGELOG :** Modifications phase par phase
- **Budget complet :** FORKX_BUDGET_DETAIL_COMPLET.md
- **Context file :** Détails et retours d'expérience

---

### 3. 🏕️ Geekagne - Le Terrain Autonome

**Lieu :** Terrain de 4700m² en Lorraine (Est-France)  
**Concept :** Espace autonome et multi-usage pour accueil de vanlifers  
**Statut :** V0.1 en cours - Bâtiments et plantations en évolution

#### Caractéristiques principales
- **Terrain :** 4700m² aménageables
- **Électricité :** Panneaux solaires (indépendant du réseau envisagé)
- **Eau :** Récupération pluviale + puits
- **Bâtiments :** Petit gîte, atelier, hangar (planifiés/en construction)
- **Plantations :** Haies, verger, potager (long terme)
- **Accueil :** Emplacement pour vans visiteurs

#### Tableaux de bord suivis
- 📊 **Statistiques :** Terrain, plantations, bâtiments
- 🏗️ **Bâtiments :** État des constructions et projets
- 🌱 **Plantations :** Arbres, haies, potager
- 💧 **Eau :** Gestion et récupération pluviale
- 📈 **Progression :** Phases et avancées

#### Documentation
- **CHANGELOG :** Modifications terrain et plantations
- **Context file :** Détails complets du projet d'autonomie

---

## 📂 Structure du Dépôt

```
GeekVanlife/
├── 📄 README.md                          ← Présentation générale
├── 📄 CHANGELOG.md                       ← Historique global
├── 📄 LICENSE                            ← Licence MIT
├── 🌐 index.html                         ← Hub principal
├── 📰 news.html                          ← Page news centralisée
├── 📂 docs/                              ← Documentation technique
│   ├── ProjectContext.md                 ← Ce fichier
│   ├── ProjectReference.md               ← Glossaire et ressources
│   ├── DASHBOARD_AUTO_SYNC.md            ← Architecture web app
│   ├── FORK_Contexte_Resume.md           ← Détails ForkX
│   ├── GEEKOMOBILE_Contexte_Résumé.md    ← Détails Geekomobile
│   ├── GEEKAGNE_Contexte_Résumé.md       ← Détails Geekagne
│   ├── FORKX_ROADMAP_COMPLETE_*.md       ← Plans ForkX
│   └── FORKX_BUDGET_*.md                 ← Budgets ForkX
├── 📂 src/                               ← Code source
│   ├── news-loader.js                    ← Chargeur de news
│   └── news/                             ← Données news (JSON)
│       ├── forkx-news.json
│       ├── geekomobile-news.json
│       └── geekagne-news.json
├── 📂 ForkX/                             ← Projet ForkX
│   ├── dashboard.html
│   ├── ForkX_README.md
│   └── ForkX_CHANGELOG.md
├── 📂 Geekomobile/                       ← Projet Geekomobile
│   ├── dashboard.html
│   ├── Geekomobile_README.md
│   └── Geekomobile_CHANGELOG.md
├── 📂 Geekagne/                          ← Projet Geekagne
│   ├── dashboard.html
│   ├── Geekagne_README.md
│   └── Geekagne_CHANGELOG.md
├── 📂 geekvanlife_app/                   ← Futur (application)
└── 📂 img/                               ← Images et médias
```

---

## 🔗 Ressources Externes

### 🌍 Web
- **Site officiel :** https://www.geek-vanlife.fr/
- **GitHub :** https://github.com/WolwX/GeekVanlife

### 📱 Réseaux Sociaux
- **Instagram :** @geekvanlifefr (https://www.instagram.com/geekvanlifefr)
- **YouTube :** GeekVanlife (https://www.youtube.com/geekvanlife)
- **TikTok :** @geekvanlife (à vérifier)

### 📧 Contact
- **Email :** [À compléter]
- **Communauté :** [À compléter]

---

## 📋 Conventions et Standards

### Dénomination des fichiers
- **Readme spécifiques :** `[ProjectName]_README.md`
- **Changelog spécifiques :** `[ProjectName]_CHANGELOG.md`
- **Context/résumés :** `[ProjectName]_Contexte_Résumé.md` (français)
- **Budgets :** `FORKX_BUDGET_*.md`
- **Roadmaps :** `FORKX_ROADMAP_*.md`

### Versionning
- **Geekomobile :** V1.0 (stable)
- **ForkX :** V0.1 (en développement) → V1.0 (planifié)
- **Geekagne :** V0.1 (en développement) → V1.0 (planifié)

### Dates et mise à jour
- Format : DD novembre/décembre YYYY (français)
- Exemple : "18 novembre 2025"
- Mise à jour globale : Tous les documents synchronisés mensuellement

### Couleurs brand
- 🔵 **Geekomobile :** Bleu (#3498db ou variante)
- 🔴 **ForkX :** Rouge (#e74c3c ou variante)
- 🟢 **Geekagne :** Vert (#27ae60 ou variante)

---

## 🚀 Prochaines Étapes (Feuille de Route)

### Court terme (Q1 2026)
- [ ] Finaliser documentation web app
- [ ] Ajouter galeries photos à chaque dashboard
- [ ] Créer API REST pour news (optionnel)

### Moyen terme (Q2-Q3 2026)
- [ ] ForkX v0.5 : Chauffage et électricité finalisés
- [ ] Geekagne v0.2 : Premier bâtiment achevé
- [ ] Intégrer budgets détaillés aux dashboards

### Long terme (2026-2027)
- [ ] ForkX v1.0 : Véhicule complètement opérationnel
- [ ] Geekagne v1.0 : Terrain multi-projets autonome
- [ ] Application mobile GeekVanlife

---

## 📝 Licence et Droits

**Licence :** MIT (Libre de copie, modification, utilisation)  
**Auteur :** Xavier Redondo (WolwX)  
**Copyright :** 2021-2025

Tous les fichiers, plans, codes et documentation sont librement utilisables selon les termes de la licence MIT.

---

**Document maintenu par :** WolwX  
**Dernière révision :** 18 novembre 2025  
**Statut :** Complet et actuel
