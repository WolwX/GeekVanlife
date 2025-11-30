# 🔄 Workflow : Claude Classique → Claude Code → GitHub

**Guide complet pour transformer vos conversations en modifications GitHub automatiques**

---

## 🎯 Objectif

Ce workflow vous permet de :
1. Discuter librement avec **Claude classique** (brainstorming, planification, discussions)
2. Générer un **fichier de synthèse** structuré
3. Importer ce fichier dans **Claude Code**
4. Appliquer automatiquement les modifications sur **GitHub**

---

## 📋 Vue d'ensemble du processus

```
┌─────────────────────────────────────────┐
│  1️⃣  CLAUDE CLASSIQUE (Claude.ai)       │
│                                         │
│  • Brainstorming libre                  │
│  • Planification de chantiers           │
│  • Discussions techniques               │
│  • Prise de décisions                   │
│                                         │
│  👇 En fin de conversation              │
│  Demande : "Génère fichier synthèse"    │
└─────────────────────────────────────────┘
                    │
                    ↓
┌─────────────────────────────────────────┐
│  2️⃣  FICHIER DE SYNTHÈSE                │
│                                         │
│  • Résumé des décisions                 │
│  • Fichiers à modifier                  │
│  • Nouveaux chantiers                   │
│  • Budgets et tâches                    │
│  • Instructions précises                │
└─────────────────────────────────────────┘
                    │
                    ↓
┌─────────────────────────────────────────┐
│  3️⃣  CLAUDE CODE (Research Preview)     │
│                                         │
│  • Lit le fichier de synthèse           │
│  • Applique les modifications           │
│  • Crée les nouveaux fichiers           │
│  • Commit + Push vers GitHub            │
└─────────────────────────────────────────┘
                    │
                    ↓
┌─────────────────────────────────────────┐
│  4️⃣  GITHUB                             │
│                                         │
│  • Branche mise à jour                  │
│  • Modifications versionnées            │
│  • Pull Request (optionnel)             │
│  • Historique complet                   │
└─────────────────────────────────────────┘
```

---

## 🚀 Guide pas-à-pas

### Étape 1 : Discussion dans Claude Classique

**Où :** https://claude.ai

**Que faire :**
- Discutez librement de votre projet (Geekomobile, GeekCagne, ForkX)
- Posez des questions techniques
- Planifiez des chantiers
- Prenez des décisions

**Exemple de conversation :**
> "Je veux améliorer l'isolation de la cabane à chats sur le terrain GeekCagne.
> J'hésite entre du polystyrène et du liège. Qu'en penses-tu ?"

---

### Étape 2 : Générer le fichier de synthèse

**Quand :** À la fin de votre conversation

**Que demander à Claude :**

```
Peux-tu créer un fichier de synthèse en utilisant le template
"TEMPLATE_SYNTHESE_POUR_CLAUDE_CODE.md" qui se trouve dans le
dossier docs/templates/ du repo GeekVanlife ?

Remplis toutes les sections pertinentes avec les informations
de notre conversation.
```

**Claude générera :**
- Un fichier markdown structuré
- Avec toutes les décisions documentées
- Les fichiers à modifier listés
- Les nouveaux chantiers identifiés
- Les budgets calculés
- Les tâches à créer

**Action :**
- ✅ Téléchargez le fichier généré
- ✅ Nommez-le clairement : `SYNTHESE_[PROJET]_[DATE]_[SUJET].md`
- Exemple : `SYNTHESE_GEEKAGNE_2025-11-23_Cabane-Chats-Isolation.md`

---

### Étape 3 : Importer dans Claude Code

**Où :** Claude Code (Research Preview web)

**Que faire :**

1. **Ouvrez Claude Code**
2. **Partagez le fichier :**
   ```
   Voici le fichier de synthèse de ma conversation avec Claude
   classique. Peux-tu analyser ce fichier et appliquer toutes
   les modifications sur le GitHub ?

   [Collez le contenu du fichier OU uploadez-le]
   ```

3. **Claude Code va :**
   - ✅ Lire et analyser le fichier de synthèse
   - ✅ Identifier les fichiers à modifier
   - ✅ Créer les nouveaux fichiers si nécessaire
   - ✅ Appliquer les changements
   - ✅ Vous montrer un aperçu avant commit
   - ✅ Créer un commit avec message clair
   - ✅ Pousser vers la branche GitHub

---

### Étape 4 : Vérification et validation

**Sur GitHub :**

1. **Vérifiez le commit :**
   - Allez sur votre branche : `claude/github-automation-exploration-017qqX3Qq54ZBXP5KcgRPawT`
   - Vérifiez les fichiers modifiés
   - Lisez le message de commit

2. **Options :**
   - ✅ **Tout est OK :** Continuez votre travail
   - ⚠️ **Corrections nécessaires :** Demandez à Claude Code d'ajuster
   - 🔀 **Créer une PR :** Si vous voulez merger vers main

---

## 📚 Templates disponibles

### Template complet (conversations complexes)
**Fichier :** `docs/templates/TEMPLATE_SYNTHESE_POUR_CLAUDE_CODE.md`

**Utiliser quand :**
- Discussion longue avec plusieurs décisions
- Multiples fichiers à modifier
- Nouveaux chantiers à créer
- Budgets importants
- Tâches nombreuses

---

### Template simplifié (conversations courtes)
**Fichier :** `docs/templates/TEMPLATE_SYNTHESE_SIMPLE.md`

**Utiliser quand :**
- Modification rapide d'un fichier
- Petite correction
- Ajout simple
- Pas de nouveau chantier

*(À créer si besoin)*

---

## 💡 Exemples concrets

### Exemple 1 : Ajout d'une nouvelle fonctionnalité

**Conversation Claude Classique :**
> "Je veux ajouter un système de suivi des dépenses pour chaque chantier
> du terrain GeekCagne dans l'app todos."

**Synthèse générée contiendra :**
- Décision : Créer un champ "dépenses" par tâche
- Fichiers à modifier : `todos.html`, possiblement JSON
- Nouveau champ dans la structure de données
- Budget : 0€ (développement uniquement)

**Claude Code appliquera :**
- Modification du HTML
- Ajout du champ dans la structure
- Test du fonctionnement
- Commit + Push

---

### Exemple 2 : Planification de chantier

**Conversation Claude Classique :**
> "Je veux planifier l'isolation de la cabane à chats. Voici mon budget
> de 100€. Dis-moi quoi acheter et comment procéder."

**Synthèse générée contiendra :**
- Nouveau chantier : Isolation Cabane à Chats v2.0
- Liste d'achats détaillée
- Budget : 100€
- Tâches à ajouter dans todos app
- Fichiers à modifier : README cabane à chats, changelog

**Claude Code appliquera :**
- Mise à jour documentation
- Ajout au changelog
- Peut créer le fichier JSON de tâches pour import

---

## ⚠️ Bonnes pratiques

### ✅ À FAIRE

- **Soyez précis** dans vos conversations avec Claude classique
- **Vérifiez** le fichier de synthèse avant de l'envoyer à Claude Code
- **Testez** les modifications après application
- **Committez régulièrement** (ne pas accumuler trop de changements)
- **Documentez** vos décisions dans le fichier de synthèse

### ❌ À ÉVITER

- **Ne pas** mélanger plusieurs projets dans une même synthèse
- **Ne pas** oublier de télécharger le fichier de synthèse
- **Ne pas** modifier manuellement les fichiers pendant que Claude Code travaille
- **Ne pas** pusher vers main directement (utiliser la branche claude/)

---

## 🔧 Résolution de problèmes

### Problème : Claude Code ne comprend pas ma synthèse

**Solution :**
- Vérifiez que vous avez utilisé le bon template
- Assurez-vous que les chemins de fichiers sont corrects
- Relisez les instructions dans le fichier de synthèse

### Problème : Les modifications ne sont pas celles attendues

**Solution :**
- Soyez plus précis dans la synthèse
- Donnez des exemples de code exact
- Utilisez des numéros de ligne si possible

### Problème : Erreur lors du push

**Solution :**
- Vérifiez que vous êtes sur la bonne branche
- Assurez-vous d'avoir les permissions
- Relancez le push avec retry si erreur réseau

---

## 📊 Métriques de succès

**Un bon workflow se mesure par :**
- ✅ Temps gagné entre conversation et application
- ✅ Réduction des erreurs manuelles
- ✅ Documentation automatique des décisions
- ✅ Historique Git propre et clair
- ✅ Moins d'aller-retours entre discussion et code

---

## 🎓 Ressources

**Fichiers importants :**
- `docs/templates/TEMPLATE_SYNTHESE_POUR_CLAUDE_CODE.md` - Template complet
- `docs/templates/WORKFLOW_CLAUDE_CLASSIQUE_VERS_CLAUDE_CODE.md` - Ce guide
- `docs/contextes/GEEKAGNE_Contexte.md` - Contexte projet GeekCagne
- `docs/contextes/GEEKOMOBILE_Contexte.md` - Contexte projet Geekomobile
- `docs/contextes/FORKX_Contexte.md` - Contexte projet ForkX

**Chantiers existants :**
- Consultez les README de chaque projet pour la liste complète
- Utilisez les CHANGELOG pour l'historique

---

## 🔄 Évolution du workflow

Ce workflow évoluera avec votre usage. N'hésitez pas à :
- Adapter les templates à vos besoins
- Créer des templates spécialisés par type de projet
- Documenter vos propres bonnes pratiques
- Partager vos améliorations

---

**Version :** 1.0
**Date :** 23 novembre 2025
**Auteur :** WolwX avec Claude Code
**Projets :** Geekomobile • GeekCagne • ForkX
