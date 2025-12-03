# ⚡💧 SYSTÈMES EAU & ÉLECTRICITÉ - Conception

**Date conception :** 28 novembre 2025
**Phase :** v0.4 "Réseaux techniques"
**Statut :** Conçu (20%) - À réaliser

---

## 💧 SYSTÈME EAU

### Principe : Bidons amovibles

**Basé sur expérience Geekomobile (éprouvé depuis années)**

---

### EAU PROPRE

**Configuration :**
- **2 bidons plastique alimentaire 10L**
- **Avec robinets intégrés en bas**
- Capacité totale : 20L
- Système gravitaire (pas de pompe)

**Usage :**
- Cuisine (vaisselle, préparation)
- Hygiène basique (lavage dents, débarbouillage)

**Avantages :**
✅ 0€ (stock possédé)
✅ Pas de pompe = ultra-fiable
✅ Rechargeable facilement
✅ Léger et manipulable
✅ Pas de vidange hivernale
✅ Hygiène parfaite (renouvellement)

**Positionnement :**
- Sur plan de travail cuisine
- Ou étagère au-dessus évier
- Robinets dirigés vers évier

---

### EAU GRISE (Cuisine)

**Configuration :**
- **Bidon PTX 20L reconverti**
- Sous évier
- Réception eaux avec produits ménagers

**Système :**
- Siphon évier classique
- Tuyau souple → bidon
- Bouchon hermétique
- Vidange manuelle régulière

**Raison récupération :**
- Produits ménagers = pas de rejet sauvage
- Conformité environnementale

**Avantages :**
✅ 0€ (stock possédé)
✅ Simple et fiable
✅ Conforme réglementation

---

### EAU DOUCHE (Plus tard)

**Configuration :**
- Évacuation directe extérieure
- Trou plancher + tube + bouchon
- Produits biodégradables uniquement
- Volume : ~10L/douche

**Positionnement :**
- Zone près porte latérale
- Bac douche temporaire/amovible
- **Installation prévue bien plus tard**

**Justification :**
- Système éprouvé Geekomobile (0 problème)
- Impact environnemental négligeable
- Usage ponctuel

---

### Intégration meuble cuisine

```
┌─────────────────────────────┐
│    PLAN DE TRAVAIL          │
│                             │
│  [Bidon 10L] [Bidon 10L]    │ ← EAU PROPRE
│   (robinets) (robinets)     │   Hauteur
│                             │
├─────────────────────────────┤
│         ÉVIER               │
│           ↓                 │
│    (évacuation)             │
├─────────────────────────────┤
│                             │
│    [Bidon PTX 20L]          │ ← EAU GRISE
│      (eau sale)             │   Sous évier
│                             │
└─────────────────────────────┘
```

---

### Budget système eau

| Poste | Prix | Statut |
|-------|------|--------|
| Bidons eau propre (x2) | 0€ | ✅ Stock |
| Bidon eau grise (x1) | 0€ | ✅ Stock |
| Évier inox | ~40€ | ⏳ Phase v0.5 |
| Robinetterie | ~20€ | ⏳ Phase v0.5 |
| Siphon + tuyaux | ~15€ | ⏳ Phase v0.5 |
| **TOTAL CUISINE** | **~75€** | - |
| Douche (optionnel) | ~130€ | ⏳ Plus tard |

**Économie vs système fixe : ~400-500€**

---

## ⚡ SYSTÈME ÉLECTRIQUE

### Principe : Power Station centralisée

**Type recommandé :**
- EcoFlow River 2 (256Wh)
- Bluetti EB3A (268Wh)
- Anker 521 (256Wh)

**Capacité :** 300-500Wh
**Budget :** 200-350€

---

### Emplacement central technique

**Position : Avant gauche sous le lit**

```
┌────────────────────────────┐
│     CABINE CONDUCTEUR      │
├────────────────────────────┤
│                            │
│  LIT (2m)                  │
│                            │
│  ┌──────┐                  │
│  │ ⚡📦 │ ← POWER STATION  │
│  │      │    Coin technique│
│  └──┬───┘    Avant Gauche  │
│     │                      │
│     │ 4 gaines partent     │
└─────┼──────────────────────┘
      ↓
```

**Avantages :**
- Accessible facilement
- Protégé sous lit
- Point central distribution
- Départ 4 directions

---

### Réseau 4 gaines Ø20mm

**Architecture :**

```
              PLAFOND ↑ (Gaine 3)
                    │ LED centrale
                    │
 ┌──────────────────┼──────────────┐
 │                  │              │
 │ Gaine 2      [POWER]       Gaine 4
 │ Mur ←────── STATION ────→ Cuisine
 │ gauche          │         (LED+USB)
 │                 ↓              │
 │             Gaine 1            │
 │          (diagonal)            │
 │               ↘                │
 │                 ↘              │
 │            Embranchement ──────┘
 │                  ↓             │
 │            Arrière droit       │
 └────────────────────────────────┘
```

---

### GAINE 1 : Sous-plancher diagonal

**Tracé :** Avant gauche → Arrière droit
**Config :** 2 gaines Ø20mm
**Longueur :** ~2,50m chacune

**Gaine A - 12V :**
- Éclairage LED arrière
- Prises USB arrière
- Circuits batterie

**Gaine B - 220V :**
- Prises secteur arrière
- Appareils 220V

**Embranchement :**
- Milieu → dérivation Gaine 4 (cuisine)

---

### GAINE 2 : Mur gauche

**Tracé :** Vertical mur gauche
**Longueur :** ~1m
**Config :** 1 gaine Ø20mm

**Usage :**
- LED bande latérale
- Prise USB murale
- Réserve

---

### GAINE 3 : Cloison → Plafond

**Tracé :** Montée cloison séparation
**Hauteur :** Jusqu'au plafond
**Config :** 1 gaine Ø20mm

**Usage :**
- **LED plafonnier central** (principal)
- Second point lumineux
- Réserve

---

### GAINE 4 : Cuisine

**Tracé :** Embranchement gaine 1 → mur droit
**Config :** 1 gaine Ø20mm

**Usage :**
- LED plan travail
- Prise USB
- Optionnel 220V

---

### Circuits électriques

**Éclairage :**

| Zone | Type | Puissance | Gaine |
|------|------|-----------|-------|
| Plafonnier | LED 12V | 5-10W | 3 |
| Cuisine | Bandeau LED | 5-10W | 4 |
| Latéral | Bandeau LED | 5-10W | 2 |

**Total éclairage : ~15-30W**

**Prises :**
- Lit : USB (téléphone nuit)
- Cuisine : USB (téléphone)
- Optionnel : 220V ponctuel

---

### Consommation & autonomie

**Usage quotidien léger :**
- Éclairage 3h : ~50 Wh
- Recharge téléphone : ~15 Wh
- Ordi portable 2h : ~100 Wh
- **Total/jour : ~165-200 Wh**

**Autonomie Power Station :**
- 300Wh : ~1,5-2 jours
- 500Wh : ~2,5-3 jours

**Recharge :**
- Maison/travail : Secteur 220V
- Voiture : 12V
- Solaire : Panneau portable (optionnel)

---

### Budget système électrique

| Poste | Budget |
|-------|--------|
| Power Station 300-500Wh | 200-350€ |
| Gaines Ø20mm (~5-6m) | 5-10€ |
| Câbles 12V | 10-15€ |
| Câbles USB | 10-20€ |
| Plafonnier LED | 15-30€ |
| Bandeau LED cuisine | 10-20€ |
| Prises USB murales (x2-3) | 15-30€ |
| Interrupteurs | 10-15€ |
| Connectique | 10-20€ |
| **TOTAL** | **285-510€** |

**Version minimale : ~250-300€**
**Version complète : ~400-500€**

---

## ✅ AVANTAGES SYSTÈMES

### EAU

✅ Coût matériel : 0€
✅ Ultra-simple (gravitaire)
✅ Ultra-fiable (pas de pompe)
✅ Éprouvé (années Geekomobile)
✅ Léger (~20-40kg total)
✅ Modulaire (amovible)
✅ Pas de gel hiver
✅ Conforme environnement

### ÉLECTRICITÉ

✅ Plug & play
✅ Modularité (Power Station amovible)
✅ Sécurité (protections intégrées)
✅ Évolutivité facile
✅ Compact
✅ Économie vs classique
✅ Garantie constructeur

---

## 🎯 COMPARATIF

### vs Système classique

| Critère | Bidons + Power Station | Système fixe |
|---------|------------------------|--------------|
| **Coût** | ~75€ eau + 300€ élec | ~800-1500€ |
| **Complexité** | Très simple | Complexe |
| **Poids** | ~20kg | ~50-80kg |
| **Fiabilité** | Maximale | Pannes possibles |
| **Modularité** | Totale | Nulle |
| **Maintenance** | Minimale | Régulière |

**Économie totale : ~600-900€**

---

## 📋 PLANNING INSTALLATION

**Phase v0.4 - Réseaux (2026)**

**Eau (1-2 jours) :**
1. Installation évier + robinet
2. Raccordement siphon → bidon
3. Intégration bidons propres
4. Tests étanchéité

**Électricité (2-3 jours) :**
1. Installation gaines (avec structure)
2. Passage câbles
3. Installation Power Station
4. Installation LEDs
5. Installation prises USB
6. Tests complets

**Total : 3-5 jours installation**

---

**Document créé : 28/11/2025**
**Projet : ForkX - Phase v0.4**
