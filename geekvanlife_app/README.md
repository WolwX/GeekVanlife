# GeekVanlife App 📱

Application mobile Flutter pour consulter les dashboards GeekVanlife.

## Description

Application Android/iOS qui charge dynamiquement le site web GeekVanlife depuis GitHub Pages :
- **Page d'accueil** : Vue d'ensemble des 3 projets
- **Dashboard ForkX** : Fiat Doblo Cargo 2020
- **Dashboard Geekomobile** : Iveco Daily L4H2 2006
- **Dashboard Geekagne** : Terrain 4700m²

## Fonctionnalités

✅ **WebView dynamique** - Charge toujours la dernière version depuis GitHub Pages
✅ **Splash screen** - Écran de démarrage avec logo GeekVanlife
✅ **Navigation arrière** - Gestion du bouton retour Android
✅ **Gestion hors-ligne** - Détection de connexion Internet
✅ **Actualisation** - Bouton refresh et bouton home
✅ **Bouton Home** - Retour rapide à l'accueil

## Installation & Lancement

### Prérequis
- Flutter SDK installé
- Android Studio / VS Code
- Émulateur Android ou appareil physique

### Lancer l'application

```bash
cd geekvanlife_app
flutter pub get
flutter run
```

### Build APK

```bash
flutter build apk --release
```

L'APK sera généré dans : `build/app/outputs/flutter-apk/app-release.apk`

### Build App Bundle (pour Google Play)

```bash
flutter build appbundle --release
```

## Structure de l'application

```
lib/
└── main.dart          # Code principal de l'app
    ├── GeekVanlifeApp    # Widget racine
    ├── SplashScreen      # Écran de démarrage
    └── WebViewScreen     # WebView principal
```

## Configuration

L'application charge automatiquement :
- URL : `https://wolwx.github.io/GeekVanlife/`
- Logo : `assets/logo.png` (Logo GeekVanlife)

## Permissions Android

```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

## Technologies

- **Flutter** : Framework multiplateforme
- **webview_flutter** : Widget WebView
- **connectivity_plus** : Détection de connexion

## Notes

- Les dashboards sont **toujours à jour** car chargés dynamiquement depuis GitHub Pages
- Pas besoin de mise à jour de l'app pour voir les changements du site web
- Fonctionne sur Android et iOS avec le même code

## Licence

Projet personnel - Xavier Redondo (WolwX)

---

**GeekVanlife** • Documentation Vanlife & Autonomie depuis 2021
