# 🔄 Dashboard Auto-Synchronisation

## Système de synchronisation automatique des dashboards

Ce système permet aux 3 dashboards (ForkX, Geekomobile, Geekagne) de se synchroniser automatiquement avec leurs fichiers README respectifs.

---

## 📋 Fonctionnement

### Architecture

```
GeekVanlife/
├── src/
│   └── dashboard-parser.js      ← Module commun de parsing
├── ForkX/
│   ├── dashboard.html           ← Dashboard avec auto-sync
│   └── ForkX_README.md          ← Source de données
├── Geekomobile/
│   ├── dashboard.html           ← Dashboard avec auto-sync
│   └── Geekomobile_README.md    ← Source de données
└── Geekagne/
    ├── dashboard.html           ← Dashboard avec auto-sync
    └── Geekagne_README.md       ← Source de données
```

### Données extraites automatiquement

Le parser `dashboard-parser.js` extrait les informations suivantes depuis les README :

#### Budget
- ✅ Budget v0.1 total
- ✅ Budget dépensé
- ✅ Budget restant v0.1
- ✅ Budget total projet
- ✅ Budget réalisations
- ✅ Budget en transit
- ✅ Budget reste à faire

#### Progression
- ✅ Version actuelle (v0.1, v0.2, etc.)
- ✅ Statut (EN COURS, À VENIR, etc.)
- ✅ Progression v0.1 (calculée depuis les tâches ✅/⏳/📦)
- ✅ Progression globale (estimation)

#### Dates
- ✅ Date de dernière mise à jour (extraction automatique)
- ✅ Date de fin prévue
- ✅ Jours restants jusqu'à v1.0

---

## 🚀 Utilisation

### Pour mettre à jour un dashboard

**Il suffit de modifier le fichier README correspondant !**

Par exemple, pour ForkX :

1. Ouvrez `ForkX/ForkX_README.md`
2. Modifiez le budget, les tâches, ou tout autre donnée
3. Sauvegardez le fichier
4. Rechargez le dashboard dans le navigateur
5. ✨ **Les données sont automatiquement mises à jour !**

### Format attendu dans le README

Le parser recherche ces patterns dans le README :

```markdown
### ✅ v0.1 - CLEAN BASE + PERSONNALISATION
**Statut : EN COURS**

**Réalisations (7 391,75€) :**
- ✅ Item complété
- ✅ Autre item

**En cours de livraison (55,60€) :**
- 📦 Item en transit

**Reste à faire (751-801€) :**
- ⏳ Item à faire

**Budget v0.1 :** ~8 167€  
**Dépensé :** 7 391,75€ | **Reste :** ~776€  

## Budget total projet
TOTAL (sans chauffage) : 11 402 €
```

---

## 🔧 Configuration technique

### Fallback automatique

Si le README ne peut pas être chargé (problème réseau, fichier manquant, etc.), le dashboard utilise automatiquement les **valeurs par défaut** hardcodées dans le fichier HTML.

### Console du navigateur

Pour vérifier que le parsing fonctionne, ouvrez la console (F12) :

```
✅ Dashboard synchronisé avec ForkX_README.md
Données extraites du README: {
  currentVersion: "v0.1",
  budgetSpent: 7391.75,
  budgetV01Total: 8167,
  ...
}
```

### Rafraîchissement automatique

Par défaut, le dashboard se met à jour :
- ✅ **Au chargement de la page**
- ⏰ **Auto-refresh toutes les 5 minutes** (désactivé par défaut, décommentez le code si besoin)

---

## 🎯 Avantages

### 1. **Source unique de vérité**
- Les README sont la source centrale de données
- Plus de duplication de valeurs
- Cohérence garantie

### 2. **Mise à jour simplifiée**
- Modifiez juste le README
- Pas besoin de toucher au code HTML/JavaScript
- Synchronisation instantanée

### 3. **Maintenance facile**
- Un seul module (`dashboard-parser.js`) à maintenir
- Réutilisable pour tous les projets
- Évolution centralisée

### 4. **Sécurité**
- Fallback automatique si problème
- Pas de crash du dashboard
- Valeurs par défaut toujours disponibles

---

## 📝 Exemples d'utilisation

### Ajouter une nouvelle tâche

**Dans ForkX_README.md :**
```markdown
**Reste à faire (826-876€) :**
- ⏳ Tapis de sol : **100-150€**
- ⏳ Enjoliveurs : **240€**
- ⏳ Balais : **36,30€**
- ⏳ Plaques : **50-100€**
- ⏳ Autoradio : **~300€**
- ⏳ **Nouvelle tâche : 50€**  ← Ajoutée ici
```

→ Le dashboard mettra automatiquement à jour le budget restant !

### Marquer une tâche comme complétée

**Avant :**
```markdown
- ⏳ Autoradio Android : **300€**
```

**Après :**
```markdown
- ✅ ~~Autoradio Android : **300€**~~
```

→ La progression v0.1 sera recalculée automatiquement !

### Changer le budget total

**Dans ForkX_README.md :**
```markdown
TOTAL (sans chauffage) : 11 500 €  ← Nouvelle valeur
```

→ Tous les calculs (budget restant, etc.) seront mis à jour !

---

## 🛠️ Personnalisation

### Ajouter de nouvelles données à extraire

Éditez `src/dashboard-parser.js` :

```javascript
// Exemple : extraire le kilométrage
const kmMatch = text.match(/Kilométrage\s*:\s*([\d\s]+)\s*km/);
if (kmMatch) {
    this.data.kilometrage = parseInt(kmMatch[1].replace(/\s/g, ''));
}
```

### Modifier les patterns de parsing

Les regex sont dans la méthode `parseReadme()` de `dashboard-parser.js`. Vous pouvez les ajuster selon vos besoins.

---

## ⚠️ Limitations actuelles

1. **Parsing côté client** : Nécessite un serveur web local (pas de `file://`)
2. **CORS** : Peut nécessiter des headers CORS si hébergé
3. **Format README** : Doit respecter les patterns attendus
4. **Regex simples** : Parsing basique, peut nécessiter des ajustements

---

## 🎉 Résultat

**Avant** : Modifier 5 fichiers pour mettre à jour un budget  
**Maintenant** : Modifier 1 seul README, tout se synchronise ! ✨

---

**Créé le :** 15 novembre 2025  
**Version :** 1.0  
**Auteur :** Xavier Redondo
