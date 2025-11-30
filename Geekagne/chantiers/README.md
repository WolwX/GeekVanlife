# 🏗️ Chantiers GeekCagne

Ce dossier contient tous les chantiers actifs et planifiés du projet GeekCagne.

---

## 📋 Structure d'un chantier

Chaque chantier est dans son propre dossier avec la structure suivante :

```
XX_Nom_Du_Chantier/
├── README.md          ← Vue d'ensemble du chantier
├── BUDGET.md          ← Suivi financier détaillé
├── CONVERSATIONS.md   ← Historique des discussions
└── TACHES.md          ← Liste des tâches
```

---

## 🚧 Chantiers actifs

| # | Chantier | Avancement | Priorité | Budget restant |
|---|----------|------------|----------|----------------|
| 13 | Cabanon Stockage | 65% | Haute | 170-200€ |
| 15 | Cabanon Sanitaire | 40% | Haute | 1 000-1 500€ |
| 19 | Placard Technique Eau | 30% | Moyenne | 35-70€ |

---

## 📝 Comment utiliser

### Conversation TYPE A (focus chantier)

Lorsque vous avez une conversation avec Claude Classique sur **un chantier spécifique** :

1. **Pendant la conversation :**
   - Discutez du chantier, prenez des décisions
   - Planifiez les travaux, le budget, les tâches

2. **En fin de conversation :**
   ```
   "Peux-tu créer un fichier de synthèse avec le template ?"
   ```

3. **Claude Classique génère :**
   - Fichier de synthèse structuré
   - Avec toutes les infos du chantier

4. **Dans Claude Code :**
   - Importez la synthèse
   - Claude Code mettra à jour automatiquement :
     * Le README du chantier
     * Le BUDGET
     * CONVERSATIONS (ajout entrée)
     * TACHES
     * Dashboard GeekCagne
     * CHANGELOG
     * App todos

---

## 🆕 Créer un nouveau chantier

Quand un nouveau chantier démarre :

```bash
# Créer le dossier
mkdir Geekagne/chantiers/XX_Nouveau_Chantier

# Créer les fichiers de base
cd Geekagne/chantiers/XX_Nouveau_Chantier
touch README.md BUDGET.md CONVERSATIONS.md TACHES.md
```

Ou demandez simplement à Claude Code de le faire ! 😊

---

## 📊 Workflow optimal

```
Vous : "Parlons du cabanon stockage"
  ↓
Claude Classique : Discussion + Décisions
  ↓
Claude Classique : Génère synthèse
  ↓
Claude Code : Applique sur GitHub
  ├─ 13_Cabanon_Stockage/README.md ✅
  ├─ 13_Cabanon_Stockage/BUDGET.md ✅
  ├─ 13_Cabanon_Stockage/CONVERSATIONS.md (+ entrée) ✅
  ├─ 13_Cabanon_Stockage/TACHES.md ✅
  ├─ Geekagne/dashboard.html ✅
  ├─ Geekagne/Geekagne_CHANGELOG.md ✅
  └─ App todos ✅
```

---

## 🎯 Avantages

✅ **Organisation** : Tout centralisé par chantier
✅ **Historique** : Conversations sauvegardées
✅ **Budget** : Suivi précis des dépenses
✅ **Tâches** : Liste synchronisée avec app
✅ **Efficacité** : Retrouvez vite l'info

---

**Dernière mise à jour :** 23 novembre 2025
