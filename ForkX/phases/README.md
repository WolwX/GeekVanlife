# 🚙 ForkX - Phases du Projet

Documentation des phases d'aménagement du **Fiat Doblo 2020** (ForkX).

---

## 📋 Qu'est-ce qu'une phase ?

Le projet ForkX est structuré en **4 phases séquentielles** correspondant aux étapes d'aménagement du véhicule, de la remise en état initiale jusqu'à l'aménagement modulaire complet.

Chaque phase a :
- **Un objectif spécifique** : Ce qui doit être accompli
- **Un budget défini** : Estimation des coûts
- **Une timeline** : Période prévue
- **Des tâches détaillées** : Actions concrètes

---

## 🗂️ Structure d'une phase

Chaque phase dispose de **4 fichiers** :

```
ForkX/phases/vX.X_Nom_Phase/
├── README.md         # Vue d'ensemble de la phase
├── BUDGET.md         # Détail budgétaire complet
├── TACHES.md         # Liste des tâches (sync avec app todos)
└── CONVERSATIONS.md  # Historique des conversations TYPE A
```

---

## 🎯 Les 4 Phases du Projet

### v0.1 - Clean Base (🚧 En cours - Nov 2025)
**Budget :** 200-500€

Remise en état et préparation :
- Réparations essentielles (rétroviseurs, antenne, enjoliveurs)
- Nettoyage complet cabine et cargo
- Démarches administratives (carte grise, plaques, clés)

📁 [Voir la phase v0.1](./v0.1_Clean_Base/)

---

### v0.2 - Isolation & Habillage (📋 Planifié - Déc 2025)
**Budget :** 500-800€

Isolation et structure :
- Démontage meubles cargo existants
- Isolation K-FLEX ST 19mm (toit, parois, portes)
- Plancher (tasseaux + contreplaqué)
- Habillage intérieur propre

📁 [Voir la phase v0.2](./v0.2_Isolation_Habillage/)

---

### v0.3 - Systèmes (📋 Planifié - Jan-Fév 2026)
**Budget :** 1 500-2 500€

Installation des systèmes :
- Chauffage diesel Mudiro 8KW
- Plancher chauffant électrique (~1,5m²)
- Station électrique portable nomade
- Système d'eau minimaliste

📁 _Phase à documenter_

---

### v0.4 - Aménagement modulaire (📋 Planifié - Mars-Avril 2026)
**Budget :** 800-1 500€

Aménagement final :
- Banquette/lit convertible (forme en L)
- Kitchenette compacte amovible
- Rangements optimisés
- Système fixation rapide mode cargo

📁 _Phase à documenter_

---

## 💡 Comment utiliser cette structure ?

### Conversations TYPE A (Focus phase spécifique)

Quand vous travaillez sur **une phase précise** avec Claude classique :

1. **Pendant la conversation** : Discutez des détails de la phase
2. **À la fin** : Créez une synthèse avec le template
3. **Dans Claude Code** : Importez la synthèse
4. **Automatiquement** : Les fichiers de la phase seront mis à jour

**Fichiers impactés :**
- `vX.X_Nom_Phase/README.md` → Avancement actualisé
- `vX.X_Nom_Phase/BUDGET.md` → Dépenses ajoutées
- `vX.X_Nom_Phase/TACHES.md` → Tâches complétées/ajoutées
- `vX.X_Nom_Phase/CONVERSATIONS.md` → Entrée ajoutée

---

### Conversations TYPE B (Synthèse période)

Pour les **synthèses hebdo/weekend** qui couvrent plusieurs aspects :

1. **Créez** : `docs/syntheses/forkx/FORKX_SYNTHESE_[DATE].md`
2. **Documentez** : Vue d'ensemble des avancées sur toutes les phases
3. **Mettez à jour** : Les fichiers concernés de chaque phase

---

## 📊 Suivi global du projet

**Budget total :** 3 000-4 800€
**Timeline :** Nov 2025 - Avril 2026 (6 mois)

| Phase | Statut | Budget | Timeline |
|-------|--------|--------|----------|
| v0.1 Clean Base | 🚧 En cours | 200-500€ | Nov 2025 |
| v0.2 Isolation & Habillage | 📋 Planifié | 500-800€ | Déc 2025 |
| v0.3 Systèmes | 📋 Planifié | 1 500-2 500€ | Jan-Fév 2026 |
| v0.4 Aménagement | 📋 Planifié | 800-1 500€ | Mars-Avril 2026 |

---

## 🔗 Liens utiles

- **Contexte projet :** `docs/contextes/FORKX_Contexte.md`
- **Référence complète :** `docs/references/CHANTIERS_EXISTANTS_REFERENCE.md`
- **Templates synthèse :** `docs/templates/`

---

## 📌 Philosophie du projet

ForkX suit une approche **séquentielle et modulaire** :
- ✅ Chaque phase doit être terminée avant la suivante
- ✅ Budget et timeline maîtrisés par phase
- ✅ Possibilité d'étaler les dépenses
- ✅ Aménagement modulaire final (conversion cargo ↔ aménagé)

---

**Dernière mise à jour :** 23 novembre 2025
**Avancement global :** Phase v0.1 en cours (0%)
