# 📋 TEMPLATE DE SYNTHÈSE POUR CLAUDE CODE

> **Utilisez ce template à la fin de vos conversations avec Claude classique**
> Demandez à Claude de remplir ce document, puis importez-le dans Claude Code pour appliquer les changements sur GitHub

---

## 📛 RÈGLES DE NAMING ET STRUCTURE

### 🏷️ Format de nom de fichier

**Standard :** `SYNTHESE_[NOMPROJET]_[DATE].md`

**Exemples :**
- `SYNTHESE_FORKX_14DEC2025.md`
- `SYNTHESE_GEEKAGNE_22NOV2025.md`
- `SYNTHESE_GEEKOMOBILE_30NOV2025.md`

### 📦 Fichiers volumineux (si > 8000 lignes ou > 150 Ko)

**Splitter en parties :** `SYNTHESE_[NOMPROJET]_[DATE]_PARTIE_[N].md`

**Exemples :**
- `SYNTHESE_FORKX_14DEC2025_PARTIE_1.md`
- `SYNTHESE_FORKX_14DEC2025_PARTIE_2.md`
- `SYNTHESE_FORKX_14DEC2025_PARTIE_3.md`

**Consignes :**
- Partie 1 : Métadonnées + Résumé + Décisions
- Partie 2 : Fichiers à modifier + Dashboards
- Partie 3 : TODOs + Export JSON + CHANGELOG

### 📅 Principe de granularité

**PRIORISER : Une synthèse = Un jour de conversation**

✅ **Recommandé :**
- `SYNTHESE_FORKX_14DEC2025.md` (conversation du 14 décembre)
- `SYNTHESE_FORKX_15DEC2025.md` (conversation du 15 décembre)

⚠️ **Éviter (sauf cas exceptionnel) :**
- `SYNTHESE_FORKX_14DEC2025_AU_20DEC2025.md` (période trop longue)

**Exceptions autorisées :**
- Weekends intensifs : `SYNTHESE_GEEKAGNE_22-23NOV2025.md`
- Séries de conversations courtes liées : `SYNTHESE_FORKX_14-15DEC2025.md`

### 📝 Fichiers de complément

**Format :** `SYNTHESE_[NOMPROJET]_[DATE]_COMPLEMENT_[SUJET].md`

**Exemples :**
- `SYNTHESE_FORKX_14DEC2025_COMPLEMENT_BUDGET.md`
- `SYNTHESE_GEEKAGNE_22NOV2025_COMPLEMENT_CORRECTIONS.md`

**Usage :**
- Ajout d'informations oubliées
- Corrections après application
- Précisions techniques

### 📍 Emplacement des fichiers

**Structure des dossiers :**
```
docs/syntheses/
├── forkx/
│   ├── SYNTHESE_FORKX_14DEC2025.md
│   ├── SYNTHESE_FORKX_14DEC2025_PARTIE_1.md
│   └── SYNTHESE_FORKX_14DEC2025_PARTIE_2.md
├── geekagne/
│   └── SYNTHESE_GEEKAGNE_22NOV2025.md
└── geekomobile/
    └── SYNTHESE_GEEKOMOBILE_30NOV2025.md
```

### 🔄 Instructions pour Claude Code

**⚠️ IMPORTANT : Renommage automatique**

Quand vous recevez un fichier de synthèse avec un nom non conforme :

✅ **À FAIRE AUTOMATIQUEMENT :**
1. Vérifier le nom du fichier reçu
2. Si non conforme, **renommer via git mv** avant de commiter
3. Appliquer les règles de naming ci-dessus

**Exemples de renommage :**
```bash
# Non conforme → Conforme
synthese_forkx_15nov_14dec_2025_part1.md
  → SYNTHESE_FORKX_15NOV_14DEC_2025_PARTIE_1.md

FORKX_SYNTHESE_28-30_NOV_2025.md
  → SYNTHESE_FORKX_28-30NOV2025.md

synthese_ForkX_14DEC2025.md
  → SYNTHESE_FORKX_14DEC2025.md
```

**Règles de normalisation :**
- **Tout en MAJUSCULES** : `SYNTHESE_` pas `synthese_`
- Projet en MAJUSCULES : `FORKX` pas `forkx` ou `ForkX`
- Date en MAJUSCULES sans espaces : `14DEC2025` pas `14 dec 2025`
- Parties : `PARTIE_1` pas `part1` ou `partie1`
- Traits d'union uniquement pour périodes : `22-23NOV2025`

---

## 📝 INSTRUCTIONS POUR CLAUDE CLASSIQUE

**Demande à faire en fin de conversation :**

```
Peux-tu créer un fichier de synthèse en utilisant le template "TEMPLATE_SYNTHESE_POUR_CLAUDE_CODE.md"
qui se trouve dans le dossier docs/ ? Remplis toutes les sections avec les informations de notre
conversation actuelle.
```

---

## 🎯 MÉTADONNÉES DE LA CONVERSATION

**Date de la conversation :** [JJ/MM/AAAA]
**Sujet principal :** [Résumé en 1 ligne]
**Projet(s) concerné(s) :** [Cochez ✓]
- [ ] Geekomobile
- [ ] GeekCagne
- [ ] ForkX
- [ ] Autre : ___________

**Type de conversation :**
- [ ] Nouvelle fonctionnalité
- [ ] Correction de bug
- [ ] Planification de chantier
- [ ] Discussion technique
- [ ] Mise à jour documentation
- [ ] Autre : ___________

---

## 🏗️ IDENTIFICATION DES CHANTIERS

### Pour GeekCagne

**Chantiers existants modifiés :**
- [ ] Cabanon Sanitaire
- [ ] Cabane à Chats
- [ ] Cabanon Stockage
- [ ] Électrification sanitaire
- [ ] Mise en eau + irrigation
- [ ] Terrasse ombragée
- [ ] Placard technique eau
- [ ] Zone pique-nique
- [ ] Douche extérieure
- [ ] Potager
- [ ] Plantations
- [ ] Autre : ___________

**Nouveaux chantiers créés :**
1. [Nom du chantier] - [Description courte]
2. [Nom du chantier] - [Description courte]

**Projets futurs discutés :**
- [ ] Terrain de pétanque
- [ ] Piscine
- [ ] Spa
- [ ] Cabanon Guinguette
- [ ] Portail d'entrée
- [ ] Phytoépuration
- [ ] Récupération eau
- [ ] Autonomie électrique
- [ ] Nouveau : ___________

---

### Pour ForkX

**Phase/Version concernée :**
- [ ] v0.1 - Clean Base (Nettoyage, réparations essentielles, admin)
- [ ] v0.2 - Isolation & Habillage (Structure sol, isolation K-FLEX, habillage)
- [ ] v0.3 - Systèmes (Chauffage, électricité, eau)
- [ ] v0.4 - Aménagement modulaire (Lit, kitchenette, rangements)
- [ ] Nouvelle phase : ___________

**Si v0.3 - Systèmes, précisez :**
- [ ] Chauffage diesel Mudiro 8KW
- [ ] Plancher chauffant électrique 1,5m²
- [ ] Power Station 300-500Wh
- [ ] Réseau électrique 4 gaines + LED + USB
- [ ] Système eau bidons amovibles (2x10L propre + 1x20L grise)
- [ ] Évier + robinetterie
- [ ] Autre système : ___________

**Si v0.4 - Aménagement modulaire, précisez :**
- [ ] Banquette/lit convertible forme en L
- [ ] Kitchenette compacte amovible
- [ ] Plan de travail rabattable
- [ ] Rangements muraux/sous banquette
- [ ] Système modularité cargo ↔ aménagé
- [ ] Rideaux occultants
- [ ] Autre aménagement : ___________

**Autres systèmes discutés :**
- [ ] Isolation (v0.2)
- [ ] Structure plancher (v0.2)
- [ ] Réparations véhicule (v0.1)
- [ ] Tests terrain
- [ ] Autre : ___________

---

### Pour Geekomobile

**Amélioration/Maintenance :**
- [ ] Chauffage
- [ ] Eau
- [ ] Électricité
- [ ] Douche
- [ ] Frigo
- [ ] Surveillance
- [ ] Autre : ___________

---

## 📝 RÉSUMÉ EXÉCUTIF

**En 3-5 phrases, qu'est-ce qui a été décidé dans cette conversation ?**

[Résumé ici]

---

## 🎯 DÉCISIONS PRISES

### Décision 1
- **Quoi :** [Description]
- **Pourquoi :** [Raison]
- **Impact :** [Quel projet/chantier]

### Décision 2
- **Quoi :** [Description]
- **Pourquoi :** [Raison]
- **Impact :** [Quel projet/chantier]

### Décision N
- **Quoi :** [Description]
- **Pourquoi :** [Raison]
- **Impact :** [Quel projet/chantier]

---

## 📂 FICHIERS À MODIFIER

### Fichier 1 : `[chemin/vers/fichier.ext]`

**Type de modification :**
- [ ] Création nouveau fichier
- [ ] Modification fichier existant
- [ ] Suppression fichier

**Modifications à apporter :**

```
[Décrivez les changements spécifiques ligne par ligne si possible]

Exemple :
- Ligne 42 : Changer "ancien texte" par "nouveau texte"
- Ajouter nouvelle section après ligne 100 : [contenu]
- Supprimer lignes 150-155
```

**Contexte :**
[Pourquoi ces modifications sont nécessaires]

---

### Fichier 2 : `[chemin/vers/fichier.ext]`

**Type de modification :**
- [ ] Création nouveau fichier
- [ ] Modification fichier existant
- [ ] Suppression fichier

**Modifications à apporter :**

```
[Décrivez les changements]
```

**Contexte :**
[Pourquoi ces modifications sont nécessaires]

---

### Fichier N : `[chemin/vers/fichier.ext]`

[Répéter pour chaque fichier]

---

## 🆕 NOUVEAUX FICHIERS À CRÉER

### Fichier : `[chemin/complet/nouveau-fichier.ext]`

**Type :** [Markdown / JSON / HTML / JS / etc.]

**Contenu complet :**

```[langage]
[Contenu intégral du fichier à créer]
```

**Raison de création :**
[Explication]

---

## 💰 BUDGET & DÉPENSES

**Nouveaux achats identifiés :**

| Article | Quantité | Prix unitaire | Prix total | Projet | Priorité | Lien |
|---------|----------|---------------|------------|--------|----------|------|
| [Nom]   | [X]      | [XX€]         | [XX€]      | [Projet] | [Haute/Moyenne/Basse] | [URL] |

**Budget total estimé pour cette conversation :** [XXX€]

---

## ✅ TÂCHES À AJOUTER DANS TODOS APP

### Liste : [Nom de la liste dans l'app]

#### Tâche 1
- **Titre :** [Description courte]
- **Projet :** [geekomobile / geekagne / forkx]
- **Priorité :** [haute / moyenne / basse]
- **Montant :** [XX€ si applicable]
- **Note :** [Détails supplémentaires]
- **Lien :** [URL si applicable]

#### Tâche 2
[Répéter...]

---

## 🔧 CONTEXTE TECHNIQUE

**Technologies/Outils mentionnés :**
- [Technologie 1] : [Usage]
- [Technologie 2] : [Usage]

**Contraintes identifiées :**
- [Contrainte 1]
- [Contrainte 2]

**Solutions proposées :**
- [Solution 1]
- [Solution 2]

---

## 📊 MISE À JOUR DES POURCENTAGES D'AVANCEMENT

**Chantiers dont l'avancement a changé :**

| Chantier | Ancien % | Nouveau % | Raison |
|----------|----------|-----------|--------|
| [Nom]    | [XX%]    | [XX%]     | [Explication] |

---

## 🏠 MISE À JOUR PAGE INDEX.HTML

> **Page d'accueil avec vue d'ensemble des 3 projets**
> Fichier : `index.html`

### 📅 En-tête / Date de présentation

**Période affichée :**
- **Actuelle :** "Mai 2020 - [Mois Année]"
- **Nouveau :** "Mai 2020 - **[Mois Année]**" (mettre date actuelle)
- **Exemple :** "Mai 2020 - Novembre 2025" → "Mai 2020 - Décembre 2025"

---

### 🚐 Encadré Geekomobile

**Informations à mettre à jour :**

| Champ | Ancienne valeur | Nouvelle valeur | Raison |
|-------|-----------------|-----------------|--------|
| **Version** | [vX.X] | [vX.X] | [Si changement] |
| **Budget** | [XX€] | [XX€] | [Si changement] |
| **Statut** | [Opérationnel/En cours/etc.] | [Nouveau statut] | [Si changement] |
| **Systèmes** | [Liste] | [Liste mise à jour] | [Si nouveaux systèmes] |

**Détails des changements :**
```
[Expliquer les changements apportés]
```

---

### 🚙 Encadré ForkX

**Informations à mettre à jour :**

| Champ | Ancienne valeur | Nouvelle valeur | Raison |
|-------|-----------------|-----------------|--------|
| **Version** | [vX.X] | [vX.X] | [Si changement] |
| **Budget** | [XX€] | [XX€] | [Si changement] |
| **Statut** | [En développement/etc.] | [Nouveau statut] | [Si changement] |
| **Systèmes** | [Liste] | [Liste mise à jour] | [Si nouveaux systèmes] |

**Détails des changements :**
```
[Expliquer les changements apportés]
```

---

### 🏗️ Encadré GeekCagne

**Informations à mettre à jour :**

| Champ | Ancienne valeur | Nouvelle valeur | Raison |
|-------|-----------------|-----------------|--------|
| **Version** | [vX.X] | [vX.X] | [Si changement] |
| **Budget** | [XX€ restant] | [XX€ restant] | [Si changement] |
| **Statut** | [XX% avancement] | [XX% avancement] | [Si changement] |
| **Systèmes** | [Liste] | [Liste mise à jour] | [Si nouveaux systèmes] |

**Détails des changements :**
```
[Expliquer les changements apportés]
```

---

## 📊 MISES À JOUR DES DASHBOARDS

> **IMPORTANT : Section prioritaire pour synchroniser les dashboards interactifs**
> Les dashboards sont dans : `Geekomobile/dashboard.html`, `ForkX/dashboard.html`, `Geekagne/dashboard.html`

---

### 🚐 DASHBOARD GEEKOMOBILE

**Fichier :** `Geekomobile/dashboard.html`

#### 💰 Budget (PRIORITAIRE)
- **Budget restant :** [XX€] → [XX€] (nouveau)
- **Budget dépensé :** [XX€] → [XX€] (nouveau)
- **Raison changement :** [Explication]

#### 📰 Dernières News
**Ajouter nouvelle(s) news :** [Oui/Non]

Si oui :
```javascript
{
  "date": "JJ Mois AAAA",
  "title": "[Titre de la news]",
  "description": "[Description courte]",
  "category": "[Maintenance/Amélioration/Système/etc.]"
}
```

#### ⚙️ Systèmes Installés
**Nouvelles lignes à ajouter :** [Oui/Non]

Si oui, pour chaque système :
```javascript
{
  "name": "[Nom du système]",
  "status": "[Opérationnel/En cours/Planifié]",
  "details": "[Détails techniques]"
}
```

#### 💵 Coûts Mensuels
**Mise à jour nécessaire :** [Oui/Non]

Si oui :
- **Chauffage :** [XX€/mois] (ancien : [XX€/mois])
- **Eau :** [XX€/mois] (ancien : [XX€/mois])
- **Autre :** [XX€/mois]
- **Raison :** [Explication]

#### 🗺️ Roadmap
**Modifications :** [Oui/Non]

Si oui :
- [ ] Nouveau projet : [Nom] - [Description] - [Budget]
- [ ] Projet terminé : [Nom]
- [ ] Mise à jour avancement : [Nom] - [XX%] → [XX%]

---

### 🚙 DASHBOARD FORKX

**⚠️ IMPORTANT : Modifier `src/projects-data.json` uniquement !**

**Fichiers concernés :**
- `src/projects-data.json` ← **MODIFIER CE FICHIER** (source de vérité)
- `ForkX/dashboard.html` ← Ne PAS modifier (charge depuis JSON)

#### 📝 Modifications dans `src/projects-data.json`

**Section `ForkX` à modifier :**

```json
{
  "projects": {
    "ForkX": {
      "version": "[vX.X]",                    ← Modifier ici
      "lastUpdate": "[JJ mois AAAA]",        ← Modifier ici
      "progress": {
        "v01": [XX],                         ← % v0.1 (0-100)
        "total": [XX]                        ← % global (0-100)
      },
      "budget": {
        "spent": [XXXX]                      ← Budget dépensé
      },
      "news": [
        {
          "date": "[JJ mois AAAA]",          ← Ajouter nouvelle news ICI
          "icon": "🏗️",
          "text": "[Description]"
        }
      ]
    }
  }
}
```

**Valeurs à mettre à jour :**
- **version :** [ancienne] → [nouvelle] (ex: "v0.1" → "v0.2 (60%)")
- **lastUpdate :** [ancienne date] → [nouvelle date]
- **progress.v01 :** [ancien %] → [nouveau %]
- **progress.total :** [ancien %] → [nouveau %]
- **budget.spent :** [ancien montant] → [nouveau montant]
- **news :** Ajouter nouvelle entrée en PREMIER dans le tableau

#### 📰 Dernières News
**Ajouter nouvelle(s) news :** [Oui/Non]

Si oui :
```javascript
{
  "date": "JJ Mois AAAA",
  "title": "[Titre de la news]",
  "description": "[Description courte]",
  "category": "[Isolation/Chauffage/Aménagement/etc.]",
  "version": "[v0.X]"
}
```

#### 🗺️ Roadmap
**Modifications :** [Oui/Non]

Si oui :
- [ ] Nouvelle phase : [vX.X] - [Nom] - [Description] - [Budget]
- [ ] Phase terminée : [vX.X] - [Nom]
- [ ] Mise à jour avancement : [vX.X] - [XX%] → [XX%]

---

### 🏗️ DASHBOARD GEEKAGNE

**Fichier :** `Geekagne/dashboard.html`

#### 🏷️ Version & Date (IMPORTANT)
- **Version actuelle :** [vX.X] → **[vX.X]** (nouveau)
- **Dernière mise à jour :** [Date] → **[Date]** (nouveau)

#### 📏 Caractéristiques
**Modifications :** [Oui/Non]
> Note : Normalement aucun changement sauf cas exceptionnel

Si oui :
- [Caractéristique modifiée] : [Ancienne valeur] → [Nouvelle valeur]

#### 📊 Statistiques (PRIORITAIRE)

**Pourcentages de projets complétés :**
- **Projets complétés :** [XX%] → [XX%] (nouveau)
- **En cours :** [XX%] → [XX%] (nouveau)
- **Planifiés :** [XX%] → [XX%] (nouveau)
- **Détail changement :**
  ```
  Chantiers terminés : [+X] (liste : [noms])
  Chantiers avancés : [Nom] [XX%]→[XX%]
  Nouveaux chantiers : [+X] (liste : [noms])
  ```

**Budget :**
- **Budget restant :** [XX€] → [XX€] (nouveau)
- **Budget dépensé :** [XX€] → [XX€] (nouveau)
- **Budget total crédit :** 25 000€ (fixe)
- **Raison changement :** [Explication + détail dépenses]

**Durée de propriété :**
- **Mois de propriété :** [X mois] → [X mois] (nouveau)
- **Date calcul :** Depuis janvier 2025

#### 📰 Dernières News
**Ajouter nouvelle(s) news :** [Oui/Non]

Si oui :
```javascript
{
  "date": "JJ Mois AAAA",
  "title": "[Titre de la news]",
  "description": "[Description courte]",
  "category": "[Chantier/Plantation/Infrastructure/etc.]",
  "chantier": "[Nom du chantier concerné]"
}
```

#### 🚀 Dernières Avancées
**Ajouter nouvelle(s) avancée(s) :** [Oui/Non]

Si oui :
```javascript
{
  "chantier": "[Nom du chantier]",
  "avancement": "[XX%]",
  "description": "[Ce qui a été fait]",
  "date": "[Date]",
  "budget": "[XX€ si applicable]"
}
```

#### 🗺️ Roadmap
**Modifications :** [Oui/Non]

Si oui :
- [ ] Nouveau chantier : [#XX] [Nom] - [Description] - [Budget] - [Priorité]
- [ ] Chantier terminé : [#XX] [Nom]
- [ ] Mise à jour avancement : [#XX] [Nom] - [XX%] → [XX%]
- [ ] Changement priorité : [#XX] [Nom] - [Ancienne] → [Nouvelle]

#### 🏗️ Bâtiments en Cours
**Mise à jour liste :** [Oui/Non]

Si oui :
```javascript
{
  "name": "[Nom du bâtiment/chantier]",
  "progress": [XX], // Pourcentage
  "budget_investi": "[XX€]",
  "budget_restant": "[XX€]",
  "priorite": "[Haute/Moyenne/Basse]",
  "eta": "[Date estimée fin]"
}
```

---

## ✅ TO-DO LIST & EXPORT

> **Section cruciale pour synchronisation avec l'app todos**

### Option 1 : Mise à jour Firebase (IDÉAL)

**Modifications à appliquer directement dans Firebase :**

```javascript
// Collection : todos
// Document : [ID auto ou spécifique]
{
  "project": "[geekomobile/geekagne/forkx]",
  "title": "[Titre de la tâche]",
  "description": "[Description]",
  "priority": "[haute/moyenne/basse]",
  "status": "[todo/in_progress/done]",
  "budget": [XX], // en euros
  "liste": "[Nom de la liste]",
  "tags": ["[tag1]", "[tag2]"],
  "link": "[URL si applicable]",
  "created_at": "[Timestamp]",
  "updated_at": "[Timestamp]"
}
```

**Tâches à ajouter :**
1. [Détails tâche 1]
2. [Détails tâche 2]
...

**Tâches à modifier :**
1. [ID tâche] : [Champ] : [Ancienne valeur] → [Nouvelle valeur]
...

**Tâches à supprimer :**
1. [ID tâche] : [Raison]
...

---

### Option 2 : Export JSON (À DÉFAUT)

**Si modification Firebase impossible, générer fichier JSON :**

**Fichier de sortie :** `imports/todos_import_[DATE].json`

```json
{
  "export_date": "AAAA-MM-JJ",
  "source": "conversation_claude_classique",
  "project": "[geekomobile/geekagne/forkx/all]",
  "todos": [
    {
      "id": "auto_generated_[X]",
      "project": "[projet]",
      "title": "[Titre]",
      "description": "[Description]",
      "priority": "[haute/moyenne/basse]",
      "status": "todo",
      "budget": [XX],
      "liste": "[Nom liste]",
      "tags": ["[tag1]", "[tag2]"],
      "link": "[URL]",
      "created_at": "[Timestamp ISO 8601]"
    }
  ]
}
```

**Instructions pour import manuel :**
1. Télécharger le fichier JSON généré
2. Ouvrir l'app todos
3. Utiliser la fonction "Import JSON"
4. Sélectionner le fichier
5. Valider l'import

---

## 📝 MISES À JOUR DES CHANGELOG

> **Documentation historique des changements par projet**

### 📋 CHANGELOG à mettre à jour

**Cocher les CHANGELOG concernés :**
- [ ] `Geekomobile/Geekomobile_CHANGELOG.md`
- [ ] `ForkX/ForkX_CHANGELOG.md`
- [ ] `Geekagne/Geekagne_CHANGELOG.md`
- [ ] `CHANGELOG.md` (principal - racine)
- [ ] Créer nouveau changelog spécifique dans `docs/`

---

### 🚐 Geekomobile CHANGELOG

**Fichier :** `Geekomobile/Geekomobile_CHANGELOG.md`

**Entrée à ajouter :**

```markdown
## [Date] - [JJ Mois AAAA]

### [Catégorie]
**Type :** [Ajouté/Modifié/Corrigé/Amélioré/Maintenance]

**Description :**
[Description détaillée des changements]

**Détails :**
- [Point 1]
- [Point 2]
- [Point 3]

**Budget (si applicable) :** [XX€]
**Impact :** [Description de l'impact]
```

**Catégories disponibles :**
- ⚙️ Systèmes (Chauffage, Eau, Électricité, etc.)
- 🛠️ Maintenance
- ✨ Amélioration
- 🐛 Correction
- 📊 Données/Suivi

---

### 🚙 ForkX CHANGELOG

**Fichier :** `ForkX/ForkX_CHANGELOG.md`

**Entrée à ajouter :**

```markdown
## [vX.X] - [JJ Mois AAAA]

### [Phase]
**Version :** [v0.X]
**Type :** [Ajouté/Modifié/Corrigé/Progression]

**Description :**
[Description détaillée des changements]

**Travaux réalisés :**
- [Point 1]
- [Point 2]
- [Point 3]

**Budget dépensé :** [XX€]
**Budget restant :** [XX€]
**Avancement phase :** [XX%]
```

**Phases disponibles :**
- **v0.1 - Clean Base** (Nettoyage, réparations, admin)
- **v0.2 - Isolation & Habillage** (Structure sol 6 tasseaux + 2 gaines, isolation K-FLEX ST 19mm, habillage)
- **v0.3 - Systèmes** (Chauffage diesel + plancher chauffant, Power Station + réseau 4 gaines, eau bidons)
- **v0.4 - Aménagement modulaire** (Banquette/lit forme L, kitchenette amovible, rangements, modularité)

---

### 🏗️ GeekCagne CHANGELOG

**Fichier :** `Geekagne/Geekagne_CHANGELOG.md`

**Entrée à ajouter :**

```markdown
## [Date] - [JJ Mois AAAA]

### [Chantier(s) concerné(s)]
**Chantier :** [#XX - Nom du chantier]
**Type :** [Avancement/Terminé/Nouveau/Modification]

**Description :**
[Description détaillée des travaux]

**Travaux effectués :**
- [Point 1]
- [Point 2]
- [Point 3]

**Avancement :** [XX%] → [XX%]
**Budget dépensé :** [XX€]
**Budget restant total :** [XX€]

**Matériaux utilisés :**
- [Matériau 1] : [Quantité] - [XX€]
- [Matériau 2] : [Quantité] - [XX€]

**Prochaines étapes :**
- [ ] [Étape 1]
- [ ] [Étape 2]
```

**Catégories de chantiers :**
- 🏗️ Bâtiments (Cabanons, cabanes)
- 💧 Eau & Irrigation
- ⚡ Électricité
- 🌱 Plantations & Verger
- 🎯 Infrastructure

---

### 📄 CHANGELOG Principal (Racine)

**Fichier :** `CHANGELOG.md`

**Usage :** Changements globaux affectant plusieurs projets ou le kernel GeekVanlife

**Entrée à ajouter :**

```markdown
## [Date] - [JJ Mois AAAA]

### [Scope]
**Projets concernés :** [Geekomobile/ForkX/GeekCagne/Tous]
**Type :** [Feature/Documentation/Infrastructure/Workflow]

**Description :**
[Description des changements globaux]

**Changements :**
- [Point 1]
- [Point 2]

**Impact :**
[Description de l'impact sur les projets]
```

---

### 📁 CHANGELOG Spécifiques (docs/)

**Création de nouveaux changelogs thématiques :** [Oui/Non]

Si oui, créer dans `docs/` :

**Format de nom :** `[PROJET]_CHANGELOG_[THEME]_[DATE].md`

**Exemples :**
- `GEEKAGNE_CHANGELOG_NOV_22-23_2025.md` (weekend spécifique)
- `FORKX_CHANGELOG_ISOLATION_DEC_2025.md` (phase spécifique)
- `GEEKOMOBILE_CHANGELOG_HIVER_2025-2026.md` (période spécifique)

**Contenu :**
```markdown
# [TITRE DU CHANGELOG]

**Période :** [Date début] - [Date fin]
**Projet :** [Nom]
**Thème :** [Description]

---

## Résumé

[Résumé global des changements]

---

## Détails

### [Section 1]
[Contenu détaillé]

### [Section 2]
[Contenu détaillé]

---

## Statistiques

- **Budget dépensé :** [XX€]
- **Tâches complétées :** [X]
- **Avancement global :** [+X%]

---

## Prochaines étapes

- [ ] [Étape 1]
- [ ] [Étape 2]
```

---

## 🔗 LIENS ET RÉFÉRENCES

**URLs importantes :**
- [Nom du lien] : [URL]
- [Nom du lien] : [URL]

**Références aux conversations précédentes :**
- [Date] : [Sujet lié]

---

## 📸 MÉDIAS ET ASSETS

**Images/Photos discutées :**
- [Description] : [Chemin ou lien]

**Fichiers attachés :**
- [Nom fichier] : [Description]

---

## ⚠️ POINTS D'ATTENTION

**Éléments à ne pas oublier :**
1. [Point important 1]
2. [Point important 2]

**Risques identifiés :**
1. [Risque 1] → [Solution proposée]
2. [Risque 2] → [Solution proposée]

---

## 🚀 PROCHAINES ÉTAPES

**Actions immédiates (cette semaine) :**
1. [ ] [Action 1]
2. [ ] [Action 2]

**Actions court terme (ce mois) :**
1. [ ] [Action 1]
2. [ ] [Action 2]

**Actions moyen terme (3-6 mois) :**
1. [ ] [Action 1]
2. [ ] [Action 2]

---

## 💡 IDÉES ET RÉFLEXIONS

**Nouvelles idées émergées :**
- [Idée 1]
- [Idée 2]

**Questions en suspens :**
- [Question 1]
- [Question 2]

---

## 📝 NOTES ADDITIONNELLES

[Tout autre élément important qui n'entre pas dans les catégories ci-dessus]

---

## ✅ CHECKLIST DE VALIDATION

**Avant d'envoyer ce fichier à Claude Code, vérifier :**

- [ ] Tous les fichiers à modifier sont listés avec chemins complets
- [ ] Les modifications sont décrites précisément
- [ ] Les nouveaux chantiers sont identifiés
- [ ] Les budgets sont renseignés
- [ ] **La page index.html est mise à jour (date, encadrés projets)**
- [ ] **Les mises à jour des dashboards sont complétées (PRIORITAIRE)**
- [ ] **Les budgets restants/dépensés sont à jour pour chaque projet**
- [ ] **Les CHANGELOG sont mis à jour avec les nouvelles entrées**
- [ ] Les tâches todos sont complètes (avec option Firebase ou JSON)
- [ ] Le contexte technique est clair
- [ ] Les décisions sont documentées
- [ ] Les prochaines étapes sont définies
- [ ] Les versions et dates de mise à jour sont correctes

---

**Document créé le :** [Date]
**À utiliser avec :** Claude Code
**Branche GitHub :** `claude/github-automation-exploration-017qqX3Qq54ZBXP5KcgRPawT`

---

## 🔄 WORKFLOW D'UTILISATION

1. **Dans Claude classique :** À la fin de la conversation, demandez à Claude de remplir ce template
2. **Téléchargez** le fichier de synthèse généré
3. **Dans Claude Code :** Partagez le fichier de synthèse
4. **Claude Code appliquera** les modifications sur GitHub automatiquement
5. **Validation** : Vérifiez les commits et créez une PR si nécessaire
