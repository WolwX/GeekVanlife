# 🚀 GUIDE DE DÉMARRAGE - Auto-synchronisation des dashboards

## ✅ Ce qui a été mis en place

### 1. Module de parsing centralisé
📁 **`src/dashboard-parser.js`**  
→ Module JavaScript qui lit les README et extrait automatiquement les données

### 2. Dashboards mis à jour
- ✅ **ForkX/dashboard.html** - Synchronisé avec ForkX_README.md
- ✅ **Geekomobile/dashboard.html** - Prêt pour Geekomobile_README.md
- ✅ **Geekagne/dashboard.html** - Prêt pour Geekagne_README.md

### 3. Documentation
📁 **`docs/DASHBOARD_AUTO_SYNC.md`**  
→ Documentation complète du système

### 4. Outil de test
📁 **`test-parser.html`**  
→ Page de test pour vérifier que tout fonctionne

---

## 🎯 Comment utiliser

### Étape 1 : Lancer un serveur local

**IMPORTANT** : Les dashboards doivent être servis via HTTP (pas en `file://`)

**Option A - Python** (recommandé) :
```powershell
# Dans le dossier GeekVanlife
python -m http.server 5500
```

**Option B - Node.js** :
```powershell
npx http-server -p 5500
```

**Option C - VS Code** :
- Installer l'extension "Live Server"
- Clic droit sur un fichier HTML → "Open with Live Server"

### Étape 2 : Tester le parser

Ouvrez dans votre navigateur :
```
http://localhost:5500/test-parser.html
```

Cliquez sur les boutons de test pour vérifier que le parsing fonctionne.

### Étape 3 : Ouvrir le dashboard ForkX

```
http://localhost:5500/ForkX/dashboard.html
```

Ouvrez la console (F12) et vous devriez voir :
```
✅ Dashboard synchronisé avec ForkX_README.md
```

---

## 📝 Modifier les données du dashboard

### Méthode simple (recommandée)

1. **Ouvrez** `ForkX/ForkX_README.md`
2. **Modifiez** n'importe quelle valeur :
   - Budget dépensé
   - Budget total
   - Tâches (✅/⏳/📦)
   - Dates
3. **Sauvegardez** le fichier
4. **Rafraîchissez** le dashboard (F5)
5. **✨ Magie !** Les valeurs sont mises à jour automatiquement

### Exemple concret

**Vous voulez changer le budget dépensé de 7 392€ à 7 500€**

Dans `ForkX_README.md`, cherchez :
```markdown
**Dépensé :** 7 391,75€
```

Remplacez par :
```markdown
**Dépensé :** 7 500€
```

Sauvegardez et rafraîchissez le dashboard → Budget mis à jour ! 🎉

---

## 🔍 Données extraites automatiquement

Le parser extrait ces informations du README :

| Donnée | Pattern cherché dans le README |
|--------|-------------------------------|
| **Version actuelle** | `### ✅ v0.1 - CLEAN BASE` |
| **Statut** | `**Statut : EN COURS**` |
| **Budget v0.1** | `**Budget v0.1 :** ~8 167€` |
| **Budget dépensé** | `**Dépensé :** 7 391,75€` |
| **Budget restant** | `**Reste :** ~776€` |
| **Budget total projet** | `TOTAL (sans chauffage) : 11 402 €` |
| **Progression** | Compte les ✅ vs ⏳/📦 |

---

## 🎨 Pour Geekomobile et Geekagne

### Créer les README

Créez ces fichiers avec le même format que ForkX_README.md :
- `Geekomobile/Geekomobile_README.md`
- `Geekagne/Geekagne_README.md`

### Structure minimale

```markdown
### ✅ v0.1 - NOM DE LA VERSION

**Statut : EN COURS**

**Réalisations (1000€) :**
- ✅ Item 1

**Budget v0.1 :** ~2000€  
**Dépensé :** 1000€ | **Reste :** ~1000€  

## Budget total projet
TOTAL (sans chauffage) : 5000 €
```

Une fois créés, les dashboards se synchroniseront automatiquement !

---

## ⚡ Avantages

### Avant (système manuel)
❌ Modifier 5 fichiers pour un changement de budget  
❌ Risque d'incohérences entre les documents  
❌ Maintenance fastidieuse  

### Maintenant (auto-sync)
✅ **1 seul fichier** à modifier (le README)  
✅ **Synchronisation instantanée** du dashboard  
✅ **Cohérence garantie** entre tous les documents  
✅ **Maintenance simplifiée**  

---

## 🛠️ Dépannage

### Le dashboard affiche les anciennes valeurs

**Cause** : Cache du navigateur  
**Solution** : Ctrl+Shift+R (hard refresh)

### Console affiche "Failed to fetch"

**Cause** : Pas de serveur HTTP  
**Solution** : Lancer `python -m http.server 5500`

### Le parsing ne fonctionne pas

**Cause** : Format du README différent  
**Solution** : Vérifiez que votre README respecte les patterns (voir `docs/DASHBOARD_AUTO_SYNC.md`)

---

## 📞 Support

En cas de problème :
1. Ouvrez la console du navigateur (F12)
2. Regardez les messages d'erreur
3. Vérifiez que le serveur HTTP fonctionne
4. Testez avec `test-parser.html`

---

## 🎉 C'est tout !

Vous pouvez maintenant modifier vos README et voir les dashboards se mettre à jour automatiquement ! ✨

**Créé le :** 15 novembre 2025  
**Version :** 1.0
