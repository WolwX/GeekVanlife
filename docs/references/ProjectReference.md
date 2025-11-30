# 📖 GeekVanlife - Référence Complète

**Dernière mise à jour:** 19 novembre 2025  
**Glossaire • Technologie • Ressources • Conventions**

---

## 📚 Glossaire et Terminologie

### Hiérarchie GeekVanlife - Terminologie Standardisée

**🌐 KERNEL (Noyau - L'ensemble)**
- GeekVanlife = Kernel complet
- Ensemble global documentant tous les projets vanlife et autonomie de Xavier Redondo (WolwX)
- Regroupe 3 projets interconnectés + infrastructure web

**📁 PROJETS (3 projets principaux)**
Sous-divisions majeures du Kernel :

1. **🍴✖️ ForkX**
   - Fourgon de loisir et aventure (Fiat Doblo Cargo 2020)
   - Utilisé pour week-ends et vacances
   - Statut : V0.1 (en développement)
   - Couleur brand : Rouge 🔴
   - Documentation : `ForkX/`

2. **🚐 Geekomobile**
   - Fourgon/van permanent de Xavier Redondo (Iveco Daily 2006)
   - Habitat à l'année depuis août 2021
   - Statut : V1.0 (complètement opérationnel)
   - Couleur brand : Bleu 🔵
   - Documentation : `Geekomobile/`

3. **🏡 Geekagne**
   - Terrain autonome de 4720m² en Lorraine
   - Multi-usage : accueil, expérimentation, autonomie
   - Statut : V0.1 (construction et aménagement en cours)
   - Couleur brand : Vert 🟢
   - Documentation : `Geekagne/`

**🏗️ CHANTIERS (Sous-projets/Tâches majeures)**
Travaux spécifiques à l'intérieur de chaque Projet :

*Exemples de Chantiers Geekagne :*
- Chantier Cabanon Sanitaire (100% - Complété)
- Chantier Cabanon Stockage (65% - En cours)
- Chantier Chauffage & Eau (40% - En cours)
- Chantier Solaire (0% - Futur)
- Chantier Guinguette (0% - Futur)

*Exemples de Chantiers ForkX :*
- Chantier Isolation (Phase v0.1)
- Chantier Électricité (Phase v0.1)
- Chantier Chauffage (Phase v1.0 - Futur)

*Exemples de Chantiers Geekomobile :*
- Chantier Chauffage (V1.0 - Complété)
- Chantier Eau (V1.0 - Complété)
- Chantier Électricité (V1.0 - Complété)

### Concepts Vanlife

**Vanlife** (Vie en van)
- Mode de vie nomade à bord d'un véhicule aménagé
- Combinaison de liberté, aventure et autonomie
- Peut être temporaire (tourisme) ou permanent (habitat)

**Autonomie**
- Capacité à fonctionner sans dépendre du réseau (électricité, eau, etc.)
- Autonomie énergétique (panneaux solaires, batterie)
- Autonomie en eau (réservoir + récupération pluviale)
- Autonomie thermique (chauffage diesel, isolation)

**Aménagement**
- Transformation intérieure d'un véhicule pour l'habitation
- Incluant cuisine, douche, toilettes, couchage, chauffage
- Adapté au mode de vie (loisir vs habitat permanent)

**Fourgon / Van**
- Véhicule utilitaire aménagé pour l'habitation nomade
- Tailles variées : petit fourgon, camionnette, bus

**Nomadisme**
- Mouvement constant vs sédentarité
- GeekVanlife : nomadisme planifié et autonome

### Projets GeekVanlife

**Geekomobile**
- Fourgon/van permanent de Xavier Redondo (Iveco Daily 2006)
- Habitat à l'année depuis août 2021
- Statut : V1.0 (complètement opérationnel)
- Couleur brand : Bleu 🔵

**ForkX**
- Fourgon de loisir et aventure (Fiat Doblo Cargo 2020)
- Utilisé pour week-ends et vacances
- Statut : V0.1 (en développement)
- Couleur brand : Rouge 🔴

**Geekagne**
- Terrain autonome de 4700m² en Lorraine
- Multi-usage : accueil, expérimentation, autonomie
- Statut : V0.1 (construction et aménagement en cours)
- Couleur brand : Vert 🟢

### Systèmes Techniques

**Électricité**
- **Panneaux solaires** : Production d'énergie renouvelable
- **Batterie** : Stockage de l'énergie (LiFePO4 = longue durée, sûre)
- **Alternateur** : Recharge via moteur du véhicule
- **Convertisseur** : 12V DC → 220V AC pour électroménagers
- **MPPT** : Régulateur de panneau solaire (efficace)

**Eau**
- **Réservoir** : Stockage eau douce (capacité : 50L à 500L)
- **Récupération pluviale** : Toit → gouttières → réservoir
- **Filtration** : Charbon, membrane pour eau potable
- **Chauffe-eau** : Diesel ou électrique
- **Toilettes sèches** : Sans consommation d'eau

**Chauffage**
- **Webasto** : Chauffage diesel indépendant du moteur
- **Radiateurs** : Diffusion chaleur via air chaud (chauffage central)
- **Isolation thermique** : Mousse, laine pour réduire déperditions

**Internet/Connectivité**
- **4G/5G mobile** : Via téléphone (partage réseau)
- **WiFi mobile** : Box portable, hotspot
- **Câble** : Points WiFi fixes (café, camping)

---

## 💻 Stack Technologique

### Frontend Web App

**Langages**
- **HTML5** : Structure sémantique (header, nav, section, article)
- **CSS3** : Styling responsive, Flexbox, Grid
- **JavaScript (Vanilla)** : Logique sans framework externe
  - ES6+ (classes, arrow functions, const/let)
  - Modules (export/import)
  - Async/Await pour requêtes

**Architecture**
- **Responsive Design** : Mobile-first, media queries (<768px = mobile)
- **Component-like** : Réutilisation de CSS classes
- **Progressive Enhancement** : Fonctionne sans JS

**Performance**
- **Zero Dependencies** : Pas de jQuery, React, Vue, etc.
- **Instant Loading** : Chargement immédiat
- **Static Files** : HTML, CSS, JS statiques
- **CSS Grid** : `max-width: 1400px`, `1fr 1fr` colonnes

### Data Layer

**Format Data**
- **JSON** : Format léger pour actualités
- **Structure news** :
  ```json
  {
    "id": 1,
    "date": "18 nov 2025",
    "title": "Titre actualité",
    "content": "Contenu court",
    "tags": ["tag1", "tag2"]
  }
  ```

**Stockage**
- **Fichiers locaux** : `src/news/*.json`
- **Aucun serveur** : Déploiement statique possible
- **Optionnel** : Futur API REST pour synchronisation

### Accessibilité

**Standards**
- **WCAG 2.1 Level AA** : Contraste, navigation clavier
- **Sémantique HTML5** : Structure claire pour lecteurs d'écran
- **Alt text** : Descriptions images
- **Labels** : Champs de formulaire accessibles

---

## 🎨 Design System

### Palette de Couleurs

**Colors Primary**
```
Geekomobile (Bleu)
  - Primaire : #3498db (clair)
  - Sombre : #2980b9 (foncé)
  - Gradient : linear-gradient(135deg, #3498db, #2980b9)

ForkX (Rouge)
  - Primaire : #e74c3c (clair)
  - Sombre : #c0392b (foncé)
  - Gradient : linear-gradient(135deg, #e74c3c, #c0392b)

Geekagne (Vert)
  - Primaire : #27ae60 (clair)
  - Sombre : #229954 (foncé)
  - Gradient : linear-gradient(135deg, #27ae60, #229954)
```

**Neutres**
```
Texte : #2c3e50 (noir doux)
Fond : #ecf0f1 (gris clair)
Accent : #f39c12 (orange)
Séparation : #bdc3c7 (gris)
```

**Sémantique**
```
Succès : #27ae60 (vert)
Erreur : #e74c3c (rouge)
Info : #3498db (bleu)
Alerte : #f39c12 (orange)
```

### Typographie

**Fonts** (suggestion)
- **Titres** : System fonts (roboto, -apple-system, sans-serif)
- **Corps** : Lisible, sans-serif
- **Code** : Monospace (Courier New, monospace)

**Tailles**
- **H1** : 2.5rem (40px)
- **H2** : 2rem (32px)
- **H3** : 1.5rem (24px)
- **Body** : 1rem (16px)
- **Small** : 0.875rem (14px)

**Poids**
- **Normal** : 400
- **Semi-bold** : 600
- **Bold** : 700

### Spacing

**Scale** (basé sur 8px)
```
xs : 4px
sm : 8px
md : 16px
lg : 24px
xl : 32px
2xl : 48px
```

**Padding/Margin**
- **Conteneur** : `padding: 32px`
- **Section** : `margin-bottom: 48px`
- **Élément** : `margin-bottom: 16px`
- **Texte** : `line-height: 1.6`

### Composants Réutilisables

**Boutons**
- Style : `background: brand-color, color: white, border-radius: 8px`
- Padding : `12px 24px`
- Hover : `opacity: 0.8`

**Cartes (Cards)**
- Style : `border-radius: 8px, box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
- Padding : `24px`
- Hover : Lift effect (box-shadow augmentée)

**Badges**
- Style : `display: inline-block, border-radius: 20px`
- Padding : `4px 12px`
- Font-size : `0.875rem`
- Couleur : Selon contexte/catégorie

**Onglets (Tabs)**
- Style : `Flexbox, centered`
- Border-bottom : Souligner actif
- Transition : Smooth 0.3s
- Couleur : Brand-color

---

## 📁 Structure Fichiers

### Racine

```
GeekVanlife/
├── .git/                    # Historique Git
├── .gitignore               # Fichiers ignorés
├── LICENSE                  # Licence MIT
├── README.md                # Vue générale
├── CHANGELOG.md             # Historique v1.0
├── QUICKSTART_AUTO_SYNC.md  # Guide de démarrage rapide
└── test-parser.html         # Utilitaire test
```

### HTML Pages

```
├── index.html               # Hub principal (lien vers dashboards)
└── news.html                # Page news avec onglets
```

### Code Source

```
src/
├── news-loader.js           # Classe ES6 NewsLoader
└── news/
    ├── forkx-news.json      # 5 actualités
    ├── geekomobile-news.json # 4 actualités
    └── geekagne-news.json    # 9 actualités
```

### Projets

```
ForkX/
├── dashboard.html           # Interface projet
├── ForkX_README.md          # Description projet
└── ForkX_CHANGELOG.md       # Historique modifications

Geekomobile/
├── dashboard.html           # Interface projet
├── Geekomobile_README.md    # Description projet
└── Geekomobile_CHANGELOG.md # Historique modifications

Geekagne/
├── dashboard.html           # Interface projet
├── Geekagne_README.md       # Description projet
└── Geekagne_CHANGELOG.md    # Historique modifications
```

### Documentation

```
docs/
├── ProjectContext.md        # Contexte projet (ce dossier)
├── ProjectReference.md      # Glossaire et ressources
├── DASHBOARD_AUTO_SYNC.md   # Architecture web app
├── FORK_Contexte_Resume.md  # Détails ForkX
├── GEEKOMOBILE_Contexte_Résumé.md # Détails Geekomobile
├── GEEKAGNE_Contexte_Résumé.md    # Détails Geekagne
├── FORKX_ROADMAP_COMPLETE_v0.1-v1.0.md # Roadmap ForkX
├── FORKX_BUDGET_DETAIL_COMPLET.md     # Budget détaillé
└── FORKX_BUDGET_INTEGRATION_COMPLETE.md # Budget intégré
```

---

## 🔗 Ressources Externes

### Sites Web

| Ressource | URL | Note |
|-----------|-----|------|
| GeekVanlife | https://www.geek-vanlife.fr/ | Site officiel |
| GitHub | https://github.com/WolwX/GeekVanlife | Dépôt code |
| Instagram | https://www.instagram.com/geekvanlifefr | @geekvanlifefr |
| YouTube | https://www.youtube.com/geekvanlife | Chaîne vidéos |

### Communautés Vanlife

- **Reddit** : r/vandwellers, r/frenchvanlife
- **Facebook** : Groupes vanlife français
- **Discord** : Serveurs communauté
- **Instagram** : #vanlife #geekvanlife #autonomie

### Outils et Services

**Mapping/Navigation**
- Google Maps
- iOverlander (campings gratuits)
- FreeStays (emplacements gratuits)

**Communication**
- 4G mobile (Orange, Free, Bouygues, SFR)
- WiFi public (café, ville)

**Finances**
- Spreadsheet budgets (Excel/Sheets)
- Tableau suivi dépenses

**Code/Dev**
- VS Code (éditeur)
- GitHub (versionning)
- ChatGPT/Claude (assistance IA)

---

## 🎓 Conventions de Nommage

### Fichiers

**Format général**
```
[TypeFichier]_[Descriptif].[Extension]

Exemples:
- ForkX_README.md (readme spécifique projet)
- ForkX_CHANGELOG.md (historique projet)
- FORK_Contexte_Resume.md (français, contexte)
- FORKX_BUDGET_DETAIL_COMPLET.md (budget détail)
- FORKX_ROADMAP_COMPLETE_v0.1-v1.0.md (roadmap versionnée)
```

**Cas spéciaux**
- Majuscules pour fichiers doc important
- Underscore `_` comme séparateur
- Versionning explicite (v0.1, v1.0)
- Date pour historiques si nécessaire (AAAA-MM-DD)

### Dossiers

**Structure logique**
```
lowercase_avec_underscore/  ← Projets spécifiques
ForkX/                      ← Exception : PascalCase projet
src/                        ← Code source
docs/                       ← Documentation
img/                        ← Images et médias
```

### Variables CSS

```css
/* Couleurs */
--color-forkx-primary: #e74c3c;
--color-forkx-dark: #c0392b;
--color-geekomobile-primary: #3498db;
--color-geekagne-primary: #27ae60;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;

/* Breakpoints */
--breakpoint-mobile: 768px;
--breakpoint-tablet: 1024px;
```

---

## 📊 Versions et Statuts

### Versioning Schema

```
Majeure.Mineure.Patch
Exemple: v1.0.0

v0.1 = Version bêta (Alpha/Beta)
v1.0 = Version stable complète
v2.0 = Révision majeure
```

### États Projets

| Projet | Version | Statut | Date | Notes |
|--------|---------|--------|------|-------|
| Geekomobile | v1.0 | ✅ Complet | 2025-11-18 | Habitat stable |
| ForkX | v0.1 | 🔄 En cours | 2025-11-18 | Loisirs, v1.0 planifiée |
| Geekagne | v0.1 | 🔄 En cours | 2025-11-18 | Terrain, construction |
| Web App | v1.0 | ✅ Complet | 2025-11-18 | Dashboards + news |

---

## 📅 Calendrier et Dates

### Format de Date

**Français standardisé**
- Format : `DD mois_français AAAA`
- Exemples : `18 novembre 2025`, `5 décembre 2024`
- Jamais : 18/11/2025 ou 2025-11-18 (sauf code)

### Fréquence Mise à Jour

- **News** : À chaque changement projet
- **Dashboards** : Synchronisation automatique
- **Documentation** : Mensuellement (18 du mois idéalement)
- **Code** : À chaque commit Git

---

## 🔐 Licence et Droits

### MIT License

**Termes clés**
- ✅ Libre utilisation, copie, modification
- ✅ Libre distribution
- ✅ Usage commercial autorisé
- ⚠️ Responsabilité : L'auteur n'est pas responsable des usages

**Copyright**
```
Copyright 2021-2025 Xavier Redondo

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction...
```

**Voir** : LICENSE fichier du projet pour texte complet

---

## 🚀 Roadmap Globale

### Q4 2025 (Maintenant)
- ✅ Web App complète (dashboards + news)
- ✅ Documentation standardisée
- 🔄 Finalisation budgets ForkX

### Q1 2026
- [ ] Galeries photos dashboards
- [ ] API REST news (optionnel)
- [ ] Mobile app (optionnel)

### Q2-Q3 2026
- [ ] ForkX v0.5 (chauffage + électricité)
- [ ] Geekagne v0.2 (premier bâtiment)
- [ ] Intégration temps réel dashboards

### 2026-2027
- [ ] ForkX v1.0 (complètement opérationnel)
- [ ] Geekagne v1.0 (autonome multi-projets)
- [ ] Application mobile native

---

## 📞 Contact et Support

### Auteur

**Xavier Redondo** (WolwX)
- Formateur informatique
- Vanlifeur depuis 2021
- Documenteur passionné

### Canaux Contact

- **Site** : https://www.geek-vanlife.fr/
- **Email** : [À compléter]
- **Instagram** : @geekvanlifefr
- **YouTube** : GeekVanlife
- **GitHub Issues** : [À compléter]

### Contribution

**Comment contribuer ?**
1. Fork du dépôt
2. Créer branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

**Guidelines**
- Respecter conventions de nommage
- Mettre à jour documentation
- Tester code (validateur HTML/CSS)
- Respecter licence MIT

---

**Référence maintenue par :** WolwX  
**Dernière révision :** 18 novembre 2025  
**Statut :** Complet et à jour
