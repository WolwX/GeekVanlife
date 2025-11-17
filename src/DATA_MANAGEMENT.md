# 📊 Projects Data Management System

## Overview

Une architecture centralisée pour gérer toutes les données des projets (ForkX, Geekomobile, Geekagne) en un seul fichier JSON, éliminant la redondance et facilitant la maintenance.

## Architecture

```
src/
├── projects-data.json          # Base de données centralisée
└── project-data-loader.js      # Chargeur de données (réutilisable)

Dashboards & Pages:
├── ForkX/dashboard.html        # Utilise ProjectDataLoader
├── Geekomobile/dashboard.html  # Utilise ProjectDataLoader
├── Geekagne/dashboard.html     # Utilise ProjectDataLoader
├── */todolist.html             # Peut utiliser ProjectDataLoader
└── index.html                  # Portfolio - peut utiliser ProjectDataLoader
```

## Structure JSON

### projects-data.json

```json
{
  "projects": {
    "ForkX": {
      "id": "ForkX",
      "name": "🚗🌵 ForkX",
      "colors": { "primary": "#c0392b", "secondary": "#e74c3c" },
      "version": "v0.1",
      "lastUpdate": "17 novembre 2025",
      "status": "EN COURS",
      "progress": { "v01": 81, "total": 9 },
      "budget": { "spent": 7418, "v01Total": 8182, "projectTotal": 11427 },
      "characteristics": { ... },
      "news": [ ... ]
    },
    "Geekomobile": { ... },
    "Geekagne": { ... }
  }
}
```

## Utilisation

### 1. Charger toutes les données d'un projet

```javascript
// Dans le script du dashboard
const projectData = await ProjectDataLoader.load('ForkX');

// Utiliser les données
document.getElementById('current-version').textContent = projectData.version;
document.getElementById('last-update').textContent = `Mis à jour le ${projectData.lastUpdate}`;
```

### 2. Charger un champ spécifique

```javascript
const progress = await ProjectDataLoader.getField('ForkX', 'progress.v01');
// Retourne: 81
```

### 3. Charger tous les projets

```javascript
const allProjects = await ProjectDataLoader.loadAll();
// Retourne: { projects: { ForkX: {...}, Geekomobile: {...}, ... } }
```

## Avantages

✅ **Maintenabilité**: Une seule source de vérité pour les données  
✅ **Synchronisation**: Mise à jour d'une date → reflétée partout  
✅ **Réutilisabilité**: Chaque page peut utiliser les mêmes données  
✅ **Scalabilité**: Facile d'ajouter des champs ou projets  
✅ **Flexibilité**: Champs partagés et champs spécifiques par projet  

## Champs disponibles

### Communs à tous les projets
- `id`: Identifiant du projet
- `name`: Nom avec emoji
- `type`: Type (Van, Terrain, etc.)
- `description`: Description longue
- `colors`: Couleurs du projet
- `version`: Version actuelle
- `lastUpdate`: Date de dernière mise à jour
- `status`: Statut (EN COURS, OPÉRATIONNEL, etc.)
- `characteristics`: Caractéristiques du projet
- `news`: Array de news

### Optionnels (par projet)
- `progress`: Pourcentages de progression
- `budget`: Informations budgétaires
- `daysToV10`: Jours restants avant v1.0 (ForkX)
- `stats`: Statistiques spécifiques

## Migration des dashboards

### ✅ À faire

1. **ForkX Dashboard** - Intégrer ProjectDataLoader
2. **Geekomobile Dashboard** - Intégrer ProjectDataLoader
3. **Geekagne Dashboard** - Intégrer ProjectDataLoader
4. **ForkX Todolist** - Utiliser données centralisées
5. **Index.html** - Utiliser données centralisées pour affichage projets

### Exemple de migration (ForkX)

**Avant:**
```javascript
let dashboardData = {
  currentVersion: 'v0.1',
  currentStatus: 'EN COURS',
  lastUpdate: '15 novembre 2025',
  // ... 50+ lignes de données
};
```

**Après:**
```javascript
// Charger depuis JSON
const dashboardData = await ProjectDataLoader.load('ForkX');

// Ou migrer graduellement:
const centralData = await ProjectDataLoader.load('ForkX');
const dashboardData = {
  ...centralData,
  // Overrides locaux si nécessaire
};
```

## Mise à jour des données

### Mode manuel (actuel)

Éditer `src/projects-data.json` directement

### Mode automatisé (futur)

```javascript
// Mettra à jour le JSON côté serveur (nécessite API backend)
await ProjectDataLoader.update('ForkX', {
  lastUpdate: '17 novembre 2025',
  'progress.v01': 82,
  'news[0]': { date: '17 nov', icon: '...', text: '...' }
});
```

## Checklist d'intégration

- [ ] Créer `src/projects-data.json` avec toutes les données
- [ ] Créer `src/project-data-loader.js` avec le chargeur
- [ ] Tester le chargement sur un dashboard (ForkX)
- [ ] Intégrer sur ForkX dashboard
- [ ] Intégrer sur Geekomobile dashboard
- [ ] Intégrer sur Geekagne dashboard
- [ ] Mettre à jour le portfolio index.html
- [ ] Documenter les champs disponibles
- [ ] Créer API backend pour update (optionnel)

## Notes

- Les fichiers JSON et JS sont dans `src/` pour une meilleure organisation
- Chemin à adapter selon l'emplacement du fichier qui charge les données
- En production, considérer une API backend pour les mises à jour
- Le système est extensible pour ajouter des projets futurs

---

**Dernière mise à jour:** 17 novembre 2025
