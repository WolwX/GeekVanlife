# ⚡ Quick Start : Workflow Synthèse

> **Guide ultra-rapide pour utiliser le workflow Claude Classique → Claude Code**

---

## 🎯 En 3 étapes

### 1️⃣ Dans Claude Classique (fin de conversation)

**Copiez-collez cette demande :**

```
Peux-tu créer un fichier de synthèse pour Claude Code ?

Utilise le template qui se trouve dans docs/templates/TEMPLATE_SYNTHESE_POUR_CLAUDE_CODE.md
(ou la version simple docs/templates/TEMPLATE_SYNTHESE_SIMPLE.md si c'est une petite modification).

Remplis toutes les sections avec les informations de notre conversation actuelle.
```

**Téléchargez le fichier généré**

---

### 2️⃣ Dans Claude Code

**Copiez-collez ce message :**

```
Voici le fichier de synthèse de ma conversation avec Claude classique.
Peux-tu analyser ce fichier et appliquer toutes les modifications sur GitHub ?

[Collez le contenu du fichier de synthèse ici]
```

**Claude Code appliquera automatiquement les changements**

---

### 3️⃣ Vérification sur GitHub

- Consultez la branche : `claude/github-automation-exploration-017qqX3Qq54ZBXP5KcgRPawT`
- Vérifiez le commit
- ✅ Validez ou demandez des ajustements

---

## 📋 Templates disponibles

### Conversation complexe
→ Utilisez : `docs/templates/TEMPLATE_SYNTHESE_POUR_CLAUDE_CODE.md`

**Quand :**
- Plusieurs fichiers à modifier
- Nouveaux chantiers
- Budgets importants
- Décisions multiples

---

### Conversation simple
→ Utilisez : `docs/templates/TEMPLATE_SYNTHESE_SIMPLE.md`

**Quand :**
- 1-2 fichiers à modifier
- Petite correction
- Pas de nouveau chantier

---

## 🔍 Références utiles

**Avant de discuter, consultez :**
- `docs/references/CHANTIERS_EXISTANTS_REFERENCE.md` - Liste tous les chantiers
- `docs/contextes/GEEKAGNE_Contexte.md` - Contexte GeekCagne
- `docs/contextes/GEEKOMOBILE_Contexte.md` - Contexte Geekomobile
- `docs/contextes/FORKX_Contexte.md` - Contexte ForkX

---

## ⚠️ Important

✅ **Vérifiez** que les chemins de fichiers sont corrects
✅ **Identifiez** si le chantier existe déjà (voir référence)
✅ **Soyez précis** dans vos demandes
✅ **Téléchargez** toujours la synthèse avant de fermer Claude

---

## 💡 Exemple express

**Dans Claude Classique :**
> "Je veux ajouter une tâche pour acheter du polyuréthane 5cm pour isoler
> les toilettes sèches du cabanon sanitaire. Budget 50€."

*[En fin de conversation]*
> "Peux-tu créer un fichier de synthèse simple pour Claude Code ?"

**Dans Claude Code :**
> "Voici ma synthèse, applique les changements sur GitHub :
> [collez le fichier]"

**Résultat :**
→ Tâche ajoutée dans le fichier de tâches
→ Documentation mise à jour
→ Commit + Push automatique

---

**Guide complet :** `docs/templates/WORKFLOW_CLAUDE_CLASSIQUE_VERS_CLAUDE_CODE.md`
