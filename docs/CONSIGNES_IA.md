# 🤖 CONSIGNES POUR L'IA - GEEKVANLIFE

**Date de création :** 15 décembre 2025  
**Objectif :** Instructions et règles à suivre lors des mises à jour du projet GeekVanlife

---

## 📰 GESTION DES NEWS

### ⚠️ RÈGLE CRITIQUE : 3 fichiers à mettre à jour

Quand on ajoute/modifie des **news** pour un projet, il faut **TOUJOURS** mettre à jour ces 3 fichiers :

1. **`src/news/{projet}-news.json`** (ex: `forkx-news.json`)
   - C'est ce fichier qui alimente la section "Dernières News" du dashboard
   - ⚠️ **FICHIER PRINCIPAL** - Si non mis à jour, les news ne s'affichent pas!

2. **`src/projects-data.json`**
   - Section `"news": [...]` du projet concerné
   - Utilisé pour la synchronisation centralisée

3. **`{Projet}/dashboard.html`**
   - Section JavaScript `news: [...]` dans `dashboardData`
   - Fallback si le chargement JSON échoue

**Ordre recommandé :** JSON news → projects-data.json → dashboard.html

---

## 📝 TEXTES DE PRÉSENTATION (INDEX.HTML)

### ⚠️ NE PAS MODIFIER

Les textes de présentation des projets dans `index.html` sont **FIXES et GÉNÉRIQUES**.

**Exemple ForkX :**
> Véhicule pour un usage Van Life ponctuel. Convertible en véhicule Daily et en utilitaire de transport de marchandises...

**Ne PAS mettre :**
- ❌ Les dernières news/actualités du projet
- ❌ Les pourcentages d'avancement détaillés
- ❌ Les achats récents

**Ces informations vont dans :**
- ✅ Le dashboard du projet
- ✅ Les fichiers de news JSON
- ✅ Les synthèses dans `docs/syntheses/`

---

## 🗂️ STRUCTURE DES FICHIERS

```
GeekVanlife/
├── index.html                           # Page d'accueil - textes FIXES
├── src/
│   ├── projects-data.json              # Données centralisées projets
│   └── news/
│       ├── forkx-news.json            # ⚠️ NEWS FORKX (principal)
│       ├── geekomobile-news.json      # ⚠️ NEWS GEEKOMOBILE
│       └── geekagne-news.json         # ⚠️ NEWS GEEKAGNE
├── ForkX/
│   └── dashboard.html                  # Dashboard + fallback news
├── Geekomobile/
│   └── dashboard.html
├── Geekagne/
│   └── dashboard.html
└── docs/
    ├── syntheses/                      # Synthèses conversations
    └── CONSIGNES_IA.md                # Ce fichier
```

---

## 🔄 WORKFLOW DE MISE À JOUR

### Ajout d'une news

1. **Modifier** `src/news/{projet}-news.json` en premier
2. **Ajouter** dans `src/projects-data.json` 
3. **Mettre à jour** le dashboard HTML (fallback)
4. **Commit** avec message clair

### Mise à jour dashboard

1. **Vérifier** les synthèses dans `docs/syntheses/{projet}/`
2. **Mettre à jour** les pourcentages (progressV01, progressTotal, etc.)
3. **Actualiser** la roadmap (tâches ✅/⏳/📦)
4. **Synchroniser** les 3 fichiers de news

### Création de synthèse

1. **Créer** dans `docs/syntheses/{projet}/SYNTHESE_{dates}.md`
2. **Format** : SYNTHESE_PROJET_DDMMM_DDMMM_YYYY.md
3. **Contenu** : Décisions, budget, avancement, tâches

---

## 📊 DONNÉES À SYNCHRONISER

### Budget
- `budgetSpent` : Montant dépensé réel
- `budgetV01Total` : Budget total phase v0.1
- `budgetTotalProject` : Budget total projet

### Progression
- `progressV01` : % phase v0.1 (0-100)
- `progressTotal` : % global projet (0-100)
- Par phase : `v01`, `v02`, `v03`, etc.

### Dates
- `lastUpdate` : Format "DD mois YYYY" (ex: "14 décembre 2025")
- `daysToV10` : Jours restants jusqu'à v1.0

---

## ⚙️ RÈGLES GIT

### Messages de commit

**Format :** `Type: Description courte`

**Types :**
- `Update:` - Mise à jour données/contenu
- `Fix:` - Correction bug/erreur
- `feat:` - Nouvelle fonctionnalité
- `docs:` - Documentation uniquement
- `refactor:` - Restructuration code

**Exemples :**
```
Update: Dashboard ForkX avec données synthèses 15 nov - 14 déc 2025
Fix: Correction affichage version ForkX dashboard
Update: Ajout mission utilitaire ForkX - 6,5 palettes transportées
```

### Avant de commit

- ✅ Vérifier que tous les fichiers liés sont mis à jour
- ✅ Tester l'affichage sur le dashboard
- ✅ Vérifier la cohérence des dates
- ✅ S'assurer que le JSON est valide (pas d'erreur syntaxe)

---

## 🎯 PRIORITÉS

1. **Cohérence des données** entre tous les fichiers
2. **Textes fixes** dans index.html (jamais de news)
3. **News JSON** toujours à jour en premier
4. **Commits clairs** avec messages explicites
5. **Synthèses** pour traçabilité des décisions

---

**📌 Cette documentation doit être consultée avant toute mise à jour majeure du projet.**

*Dernière mise à jour : 15 décembre 2025*
