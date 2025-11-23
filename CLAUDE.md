# CLAUDE.md - GeekVanlife Codebase Guide for AI Assistants

> **Last Updated:** November 23, 2025
> **Repository:** WolwX/GeekVanlife
> **Purpose:** Comprehensive guide for AI assistants working with the GeekVanlife codebase

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Tech Stack](#architecture--tech-stack)
3. [Directory Structure](#directory-structure)
4. [Key Systems & Components](#key-systems--components)
5. [Development Workflows](#development-workflows)
6. [Code Conventions](#code-conventions)
7. [Data Management](#data-management)
8. [Git Workflow](#git-workflow)
9. [Testing & Quality](#testing--quality)
10. [AI Assistant Guidelines](#ai-assistant-guidelines)

---

## 🌟 Project Overview

**GeekVanlife** is a comprehensive documentation and tracking system for Xavier Redondo's (WolwX) vanlife and autonomy projects since 2021.

### Core Projects

1. **🍴✖️ ForkX** - Fiat Doblo Cargo 2020 (Modular utility/habitat van)
2. **🚐 Geekomobile** - Iveco Daily L4H2 2006 (Full-time nomadic home since Aug 2021)
3. **🏕️ Geekagne** - 4720m² terrain in Pyrénées-Orientales (Autonomous leisure property)

### Purpose

- Document vanlife experience and technical builds
- Track progress, budgets, and system performance
- Provide interactive dashboards and real-time updates
- Share knowledge with the vanlife community
- Mobile and web access to project data

---

## 🏗️ Architecture & Tech Stack

### Frontend Web Application
- **Language:** Vanilla JavaScript (ES6+)
- **Styling:** Custom CSS with project-specific color schemes
- **Structure:** Multi-page static site (GitHub Pages ready)
- **Data:** JSON-based centralized data management

### Mobile Application
- **Framework:** Flutter (Dart)
- **Type:** WebView wrapper for GitHub Pages
- **Platforms:** Android & iOS
- **Features:** Splash screen, offline detection, navigation

### Backend/Sync
- **Database:** Firebase Realtime Database (Europe-West1)
- **Purpose:** Todo list synchronization across devices
- **Auth:** Firebase API key authentication

### Key Technologies
```
Frontend:
├── HTML5 (Semantic markup)
├── CSS3 (Custom properties, Grid, Flexbox)
├── JavaScript ES6+ (Async/await, Modules, Classes)
└── Font Awesome 6.4.0 (Icons)

Mobile:
├── Flutter SDK ^3.9.2
├── webview_flutter ^4.4.2
├── connectivity_plus ^7.0.0
└── url_launcher ^6.3.2

Backend:
├── Firebase Realtime Database
├── Firebase Web SDK v9+
└── Tesseract.js 5.x (OCR for image imports)
```

---

## 📁 Directory Structure

```
GeekVanlife/
│
├── 📄 index.html                        # Main hub/portfolio page
├── 📄 news.html                         # Centralized news with tabs
├── 📄 todos.html                        # Todo list manager (Firebase sync)
├── 📄 README.md                         # Main documentation (you are here)
├── 📄 CLAUDE.md                         # AI assistant guide (this file)
├── 📄 LICENSE                           # MIT License
│
├── 📂 ForkX/                            # ForkX Project (Doblo)
│   ├── dashboard.html                   # ForkX interactive dashboard
│   ├── ForkX_README.md                  # Project-specific docs
│   └── ForkX_CHANGELOG.md               # Version history
│
├── 📂 Geekomobile/                      # Geekomobile Project (Daily)
│   ├── dashboard.html                   # Geekomobile dashboard
│   ├── Geekomobile_README.md
│   └── Geekomobile_CHANGELOG.md
│
├── 📂 Geekagne/                         # Geekagne Project (Terrain)
│   ├── dashboard.html                   # Geekagne dashboard
│   ├── Geekagne_README.md
│   └── Geekagne_CHANGELOG.md
│
├── 📂 css/                              # Stylesheets
│   └── todos.css                        # Todo list styles
│
├── 📂 js/                               # JavaScript modules
│   ├── todos.js                         # Todo list core logic
│   ├── todos-all.js                     # Extended todo functionality
│   ├── firebase-sync.js                 # Firebase integration
│   └── forkx-autoload-fix.js            # ForkX-specific fixes
│
├── 📂 src/                              # Source files & utilities
│   ├── projects-data.json               # ⭐ CENTRAL DATA SOURCE
│   ├── project-data-loader.js           # Data loading utility
│   ├── dashboard-parser.js              # Dashboard data parsing
│   ├── news-loader.js                   # News system loader
│   ├── DATA_MANAGEMENT.md               # Data architecture docs
│   └── news/                            # News data files
│       ├── forkx-news.json
│       ├── geekomobile-news.json
│       └── geekagne-news.json
│
├── 📂 geekvanlife_app/                  # Flutter mobile app
│   ├── lib/                             # Dart source code
│   │   └── main.dart                    # App entry point
│   ├── android/                         # Android config
│   ├── ios/                             # iOS config
│   ├── pubspec.yaml                     # Flutter dependencies
│   └── README.md                        # Mobile app docs
│
├── 📂 docs/                             # Documentation
│   ├── FORK_Contexte_Resume.md
│   ├── GEEKOMOBILE_Contexte_Résumé.md
│   └── GEEKAGNE_Contexte_Résumé.md
│
├── 📂 img/                              # Images & assets
├── 📂 imports/                          # Import utilities
└── 📂 test files/                       # Various test HTML files
    ├── test-import.html
    ├── test-parser.html
    ├── todos-backup.html
    └── todos-original.html
```

### Critical Files

| File | Purpose | Modify Frequency |
|------|---------|------------------|
| `src/projects-data.json` | **Single source of truth** for all project data | Often |
| `src/news/*.json` | News entries per project | Often |
| `src/project-data-loader.js` | Data loader utility (don't modify) | Rarely |
| `js/firebase-sync.js` | Firebase configuration & sync logic | Rarely |
| `todos.html` | Todo list interface | Occasionally |
| `index.html` | Main portfolio hub | Occasionally |

---

## 🔑 Key Systems & Components

### 1. Centralized Data Management System

**File:** `src/projects-data.json`

**Purpose:** Single source of truth for all project metadata, eliminating data duplication across dashboards.

**Structure:**
```json
{
  "projects": {
    "ForkX": {
      "id": "ForkX",
      "name": "🚗🌵 ForkX",
      "colors": {
        "primary": "#c0392b",
        "secondary": "#e74c3c",
        "gradient": "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)"
      },
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

**Loading Data:**
```javascript
// Load entire project data
const projectData = await ProjectDataLoader.load('ForkX');

// Get specific field
const progress = await ProjectDataLoader.getField('ForkX', 'progress.v01');

// Load all projects
const allProjects = await ProjectDataLoader.loadAll();
```

**When to Update:**
- Project version changes
- Budget updates
- Status changes
- Characteristic modifications
- Last update dates

**⚠️ IMPORTANT:** Always update `src/projects-data.json` rather than hardcoding data in dashboards.

---

### 2. Dashboard System

**Location:** Each project has `{Project}/dashboard.html`

**Color Schemes:**
- **ForkX:** Red gradient (#c0392b → #e74c3c)
- **Geekomobile:** Blue gradient (#1e3a8a → #3b82f6)
- **Geekagne:** Green gradient (#11998e → #38ef7d)

**Common Dashboard Sections:**
1. **Header** - Project name, emoji, last update
2. **Stats Cards** - Key metrics (version, budget, progress)
3. **News Section** - Latest 3-5 news items with "Voir plus" link
4. **Progress/Budget Visualization** - Charts or progress bars
5. **Project-Specific Details** - Unique content per project

**Dashboard Structure:**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <style>
        :root {
            --primary-color: #{project.colors.primary};
            --secondary-color: #{project.colors.secondary};
            --gradient: #{project.colors.gradient};
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <a href="../index.html" class="back-button">...</a>

    <!-- Header -->
    <div class="header">
        <h1>#{project.name}</h1>
        <p>Mis à jour le #{project.lastUpdate}</p>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">...</div>

    <!-- News Section -->
    <div class="news-section">...</div>

    <!-- Project-Specific Content -->
    <div class="specific-content">...</div>

    <script src="../src/project-data-loader.js"></script>
    <script>
        // Load and display data
        (async () => {
            const data = await ProjectDataLoader.load('ProjectName');
            // Populate dashboard
        })();
    </script>
</body>
</html>
```

---

### 3. News System

**Architecture:**
```
src/
├── news-loader.js              # News loading utility
└── news/
    ├── forkx-news.json
    ├── geekomobile-news.json
    └── geekagne-news.json
```

**News Format:**
```json
{
  "news": [
    {
      "date": "17 novembre 2025",
      "icon": "🏗️",
      "text": "Description of the update..."
    }
  ]
}
```

**News Display:**
- **Dashboard:** Shows latest 3-5 items
- **news.html:** Centralized page with tabs for each project
- **Navigation:** "Voir plus de news" buttons link to `news.html#{project-tab}`

**Adding News:**
1. Edit appropriate `src/news/{project}-news.json`
2. Add new entry at the **top** of the array (chronological, newest first)
3. Include: date, emoji icon, concise text
4. Update `lastUpdate` in `src/projects-data.json`

---

### 4. Todo List System

**Files:**
- `todos.html` - Main interface
- `js/todos.js` - Core todo logic
- `js/todos-all.js` - Extended functionality
- `js/firebase-sync.js` - Firebase integration
- `css/todos.css` - Styling

**Features:**
- ✅ Multi-project tabs (ForkX, Geekomobile, Geekagne)
- ✅ Firebase real-time sync
- ✅ Import/Export JSON
- ✅ OCR image import (Tesseract.js)
- ✅ List management (create, edit, delete)
- ✅ Task progress tracking

**Firebase Configuration:**
```javascript
// Located in: js/firebase-sync.js
const firebaseConfig = {
    apiKey: "AIzaSyD7PUqS5GGpEuQiZhlaiwhBpiJps5K8Jec",
    authDomain: "geekvanlife.firebaseapp.com",
    projectId: "geekvanlife",
    storageBucket: "geekvanlife.firebasestorage.app",
    messagingSenderId: "808193116530",
    appId: "1:808193116530:web:26d0f44d6258e7933c75eb",
    databaseURL: "https://geekvanlife-default-rtdb.europe-west1.firebasedatabase.app"
};
```

**Data Structure in Firebase:**
```
todos/
├── forkx/
│   ├── lists/
│   │   ├── list-id-1/
│   │   │   ├── name: "Isolation & Habillage"
│   │   │   └── tasks: {...}
│   │   └── list-id-2/
│   ├── geekomobile/
│   └── geekagne/
```

**Global Functions:**
- `window.addTodo(project)` - Add new task
- `window.switchTab(project)` - Switch project tabs
- `window.exportTodos(project)` - Export to JSON
- `window.loadDataFromFirebase()` - Sync from Firebase
- `window.saveToFirebase()` - Push to Firebase
- `window.createList(project)` - Create new list
- `window.editList(listId)` - Edit list name
- `window.deleteList(listId)` - Delete list with confirmation

---

### 5. Mobile Application (Flutter)

**Location:** `geekvanlife_app/`

**Purpose:** WebView wrapper for accessing dashboards on mobile devices

**Key Features:**
- Loads GitHub Pages site (`https://wolwx.github.io/GeekVanlife/`)
- Splash screen with GeekVanlife logo
- Offline detection
- Navigation controls (back, refresh, home)
- Android & iOS support

**Development Commands:**
```bash
cd geekvanlife_app

# Install dependencies
flutter pub get

# Run in development
flutter run

# Build APK (Android)
flutter build apk --release

# Build App Bundle (Google Play)
flutter build appbundle --release
```

**Main Code:** `lib/main.dart`

**Dependencies:**
- `webview_flutter` - WebView widget
- `connectivity_plus` - Network detection
- `url_launcher` - External link handling

**Configuration:**
- Base URL: `https://wolwx.github.io/GeekVanlife/`
- Logo: `assets/logo.png`
- Package: `com.geekvanlife.app`

---

## 🛠️ Development Workflows

### Adding a New Project

1. **Create project directory:**
   ```bash
   mkdir NewProject
   touch NewProject/dashboard.html
   touch NewProject/NewProject_README.md
   touch NewProject/NewProject_CHANGELOG.md
   ```

2. **Add to `src/projects-data.json`:**
   ```json
   {
     "projects": {
       "NewProject": {
         "id": "NewProject",
         "name": "🔷 NewProject",
         "colors": {
           "primary": "#color1",
           "secondary": "#color2",
           "gradient": "linear-gradient(135deg, #color1 0%, #color2 100%)"
         },
         ...
       }
     }
   }
   ```

3. **Create news file:**
   ```bash
   touch src/news/newproject-news.json
   ```

4. **Update `index.html`** - Add project card to portfolio

5. **Update `todos.html`** - Add project tab

6. **Create dashboard** - Copy and modify existing dashboard template

---

### Updating Project Data

**Always modify `src/projects-data.json` first!**

1. Open `src/projects-data.json`
2. Update relevant fields (version, budget, progress, lastUpdate, etc.)
3. Save file
4. Dashboards will auto-load new data via `ProjectDataLoader`

**Example Update:**
```json
{
  "ForkX": {
    "version": "v0.2",  // Changed from v0.1
    "lastUpdate": "23 novembre 2025",  // Updated date
    "progress": {
      "v01": 100,  // Phase v0.1 completed
      "v02": 25,   // Phase v0.2 started
      "total": 15  // Overall progress
    },
    "budget": {
      "spent": 8200  // Updated spending
    }
  }
}
```

---

### Adding News

1. **Edit appropriate news JSON:**
   ```bash
   vim src/news/forkx-news.json
   ```

2. **Add entry at TOP of array:**
   ```json
   {
     "news": [
       {
         "date": "23 novembre 2025",
         "icon": "🎉",
         "text": "Phase v0.1 isolation terminée - 100% complété!"
       },
       // ... existing news
     ]
   }
   ```

3. **Update lastUpdate date:**
   ```bash
   vim src/projects-data.json
   ```
   ```json
   "lastUpdate": "23 novembre 2025"
   ```

4. **Verify display:**
   - Open dashboard → Check news section
   - Open `news.html` → Check project tab

---

### Working with Todo Lists

**Firebase Required:** Ensure Firebase SDK loaded in `todos.html`

**Adding Lists:**
```javascript
// Called by UI button - creates new list
createList('forkx');
```

**Managing Tasks:**
```javascript
// Add task to list
addTodo('forkx');

// Mark complete/incomplete
toggleTaskStatus(projectId, listId, taskId);

// Delete task
deleteTask(projectId, listId, taskId);
```

**Import/Export:**
```javascript
// Export current state
exportTodos('forkx'); // Downloads JSON file

// Import from JSON (via UI button)
openJsonImportModal('forkx');

// Import from image (OCR)
openImageImportModal('forkx');
```

---

### Testing Changes Locally

**Web Application:**
```bash
# Serve locally (use any static server)
python3 -m http.server 8000
# OR
npx serve .

# Open browser
open http://localhost:8000
```

**Flutter App:**
```bash
cd geekvanlife_app
flutter run
```

**Quick Checks:**
- [ ] All dashboards load correctly
- [ ] Data displays from `projects-data.json`
- [ ] News loads from JSON files
- [ ] Color schemes correct per project
- [ ] Links navigate properly
- [ ] Mobile responsive design works
- [ ] Firebase sync functional (if testing todos)

---

## 📝 Code Conventions

### JavaScript

**Style:**
- Use ES6+ features (arrow functions, async/await, template literals)
- Prefer `const` over `let`, avoid `var`
- Use descriptive variable names (camelCase)
- Comment complex logic

**Example:**
```javascript
// Good
const projectData = await ProjectDataLoader.load('ForkX');
const budgetSpent = projectData.budget.spent;
const budgetTotal = projectData.budget.v01Total;
const percentageSpent = Math.round((budgetSpent / budgetTotal) * 100);

// Avoid
var data = await ProjectDataLoader.load('ForkX');
var x = data.budget.spent;
var y = data.budget.v01Total;
var z = Math.round((x / y) * 100);
```

**Module Pattern:**
```javascript
// Use IIFE for encapsulation
(function() {
    'use strict';

    // Private variables
    const config = { ... };

    // Public API
    window.MyModule = {
        init: function() { ... },
        method: function() { ... }
    };
})();
```

**Async/Await:**
```javascript
// Always use try-catch for async operations
async function loadProjectData(projectId) {
    try {
        const data = await ProjectDataLoader.load(projectId);
        return data;
    } catch (error) {
        console.error(`Error loading ${projectId}:`, error);
        return null;
    }
}
```

---

### HTML

**Structure:**
- Semantic HTML5 tags (`<header>`, `<section>`, `<article>`, `<nav>`)
- Accessible markup (ARIA labels where needed)
- French language (`lang="fr"`)
- Mobile-first responsive design

**Example:**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📊 Project Dashboard</title>
</head>
<body>
    <header class="header">
        <h1>Project Name</h1>
    </header>

    <main class="container">
        <section class="stats-section">
            <!-- Content -->
        </section>
    </main>

    <footer class="footer">
        <!-- Footer content -->
    </footer>
</body>
</html>
```

---

### CSS

**Conventions:**
- Use CSS custom properties (variables) for colors
- Mobile-first media queries
- BEM-like naming where appropriate
- Consistent spacing (use rem/em units)

**Color Variables:**
```css
:root {
    /* Project-specific colors */
    --primary-color: #c0392b;
    --secondary-color: #e74c3c;
    --gradient: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);

    /* Common colors */
    --background: #f8f9fa;
    --text-dark: #2c3e50;
    --text-light: #6c757d;
    --border: #dee2e6;
    --shadow: rgba(0, 0, 0, 0.1);
}
```

**Responsive Design:**
```css
/* Mobile first */
.card {
    padding: 1rem;
    margin: 0.5rem;
}

/* Tablet */
@media (min-width: 768px) {
    .card {
        padding: 1.5rem;
        margin: 1rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .card {
        padding: 2rem;
        margin: 1.5rem;
    }
}
```

---

### JSON Data Files

**projects-data.json:**
- Use consistent date format: "DD mois YYYY" (French)
- Keep numerical values as numbers, not strings
- Maintain alphabetical order of keys (within reason)
- Validate JSON syntax before committing

**news JSON files:**
- Newest entries at the top (chronological descending)
- Consistent emoji usage per category
- Keep text concise (1-2 sentences max)
- Include specific dates

---

## 🗂️ Data Management

### Data Architecture Philosophy

**Single Source of Truth:** `src/projects-data.json` is the master data file.

**Benefits:**
- ✅ No data duplication across dashboards
- ✅ Easy updates (change once, reflect everywhere)
- ✅ Consistent data across all pages
- ✅ Scalable for new projects
- ✅ Clear maintenance path

**Data Flow:**
```
src/projects-data.json
        ↓
project-data-loader.js (loads & parses)
        ↓
Dashboard HTML files (consume & display)
```

---

### Common Data Fields

**All Projects:**
```json
{
  "id": "ProjectId",
  "name": "🔷 Project Name",
  "type": "Van aménagé | Terrain de loisirs",
  "description": "Short description",
  "colors": {
    "primary": "#hex",
    "secondary": "#hex",
    "gradient": "linear-gradient(...)"
  },
  "version": "v1.0",
  "lastUpdate": "DD mois YYYY",
  "status": "EN COURS | OPÉRATIONNEL | PLANIFICATION",
  "characteristics": { /* project-specific */ },
  "news": [ /* array of news objects */ ]
}
```

**Optional Fields:**
- `progress` - Object with percentage values
- `budget` - Object with spent/total amounts
- `stats` - Additional statistics
- `daysToV10` - Countdown to milestone
- Custom fields per project

---

### Modifying Data

**Step-by-Step:**

1. **Open data file:**
   ```bash
   vim src/projects-data.json
   ```

2. **Edit relevant section:**
   ```json
   "ForkX": {
     "version": "v0.2",  // Update version
     "lastUpdate": "23 novembre 2025",  // Update date
     "progress": {
       "v02": 30  // Update progress
     }
   }
   ```

3. **Validate JSON:**
   ```bash
   # Use JSON validator
   cat src/projects-data.json | jq .
   ```

4. **Test locally:**
   - Open affected dashboards
   - Verify data displays correctly
   - Check console for errors

5. **Commit changes:**
   ```bash
   git add src/projects-data.json
   git commit -m "Update ForkX data: v0.2 progress to 30%"
   ```

---

### News Management

**Adding News:**
```bash
# 1. Edit news file
vim src/news/forkx-news.json

# 2. Add entry at top
{
  "news": [
    {
      "date": "23 novembre 2025",
      "icon": "🎉",
      "text": "Your news text here"
    },
    // ... existing entries
  ]
}

# 3. Update lastUpdate date in projects-data.json
vim src/projects-data.json
```

**News Categories (Emoji Guide):**
- 🏗️ Construction/build updates
- 🔧 Repairs/maintenance
- ⚡ Electrical work
- 💧 Water system
- 🛏️ Interior/comfort
- 🎉 Milestones/celebrations
- ⛽ Fuel/consumption data
- 🔍 Discoveries/findings
- 📊 Data/statistics updates

---

## 🔄 Git Workflow

### Branch Strategy

**Main Branch:** `main` (or master)
- Production-ready code
- Deployed to GitHub Pages

**Feature Branches:**
- Created automatically by Claude
- Pattern: `claude/claude-md-{session-id}`
- Merge via pull request

### Commit Messages

**Format:**
```
<type>: <short description>

[optional body]
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style (formatting, no logic change)
- `refactor:` - Code refactoring
- `data:` - Data updates (JSON files)
- `chore:` - Maintenance tasks

**Examples:**
```bash
# Good commits
git commit -m "data: Update ForkX progress to v0.2 - 30%"
git commit -m "feat: Add image import OCR to todos"
git commit -m "fix: Firebase sync not loading lists correctly"
git commit -m "docs: Update CLAUDE.md with Flutter app section"

# Avoid
git commit -m "update"
git commit -m "changes"
git commit -m "fix stuff"
```

### Pull Request Process

1. **Create feature branch** (auto-created by Claude)
2. **Make changes and commit**
3. **Push to remote:**
   ```bash
   git push -u origin claude/claude-md-{session-id}
   ```
4. **Create PR via GitHub CLI:**
   ```bash
   gh pr create --title "Description" --body "Details"
   ```
5. **Review and merge**

---

## 🧪 Testing & Quality

### Manual Testing Checklist

**Before Committing:**
- [ ] All HTML files load without errors
- [ ] JavaScript console shows no errors
- [ ] Data displays correctly from JSON files
- [ ] Links navigate to correct destinations
- [ ] Mobile responsive design works
- [ ] All project tabs functional (todos)
- [ ] Color schemes correct per project
- [ ] Firebase sync works (if modified)

**Dashboard-Specific:**
- [ ] Project name/emoji correct
- [ ] Last update date accurate
- [ ] Stats cards display data
- [ ] News section loads latest items
- [ ] "Voir plus" links work
- [ ] Progress bars/charts render
- [ ] Back button navigates to index

**Todo System:**
- [ ] Tabs switch correctly
- [ ] Lists load from Firebase
- [ ] Tasks can be added/edited/deleted
- [ ] Import/export functions work
- [ ] OCR image import functional

### Browser Testing

**Recommended:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

### Performance

**Best Practices:**
- Minimize external dependencies
- Lazy load images where possible
- Use CSS for animations (not JS)
- Keep JSON files reasonably sized
- Avoid blocking scripts

---

## 🤖 AI Assistant Guidelines

### General Principles

1. **Read Before Modifying**
   - Always read existing files before making changes
   - Understand current patterns and conventions
   - Maintain consistency with existing code

2. **Data-First Approach**
   - Prioritize updating `src/projects-data.json`
   - Let dashboards load from central data
   - Avoid hardcoding values in HTML

3. **Incremental Changes**
   - Make small, focused commits
   - Test after each change
   - Document significant modifications

4. **Preserve Functionality**
   - Don't break existing features
   - Maintain Firebase sync if touching todos
   - Keep mobile app compatibility

---

### Common Tasks

#### Task: Update Project Progress

**Steps:**
1. Read `src/projects-data.json`
2. Update progress values
3. Update `lastUpdate` date
4. Verify dashboard displays correctly
5. Add news entry if significant milestone

**Example:**
```bash
# 1. Read current data
cat src/projects-data.json | grep -A 10 "ForkX"

# 2. Edit file
vim src/projects-data.json
# Update: "progress": { "v02": 45 }
# Update: "lastUpdate": "23 novembre 2025"

# 3. Add news
vim src/news/forkx-news.json
# Add entry at top

# 4. Test
open ForkX/dashboard.html

# 5. Commit
git add src/projects-data.json src/news/forkx-news.json
git commit -m "data: Update ForkX v0.2 progress to 45%"
```

---

#### Task: Add New Dashboard Feature

**Steps:**
1. Identify which dashboards need the feature
2. Check if data exists in `projects-data.json`
3. Add data field if needed
4. Implement HTML/CSS/JS in one dashboard
5. Test thoroughly
6. Replicate to other dashboards if applicable
7. Document the feature

**Example:** Adding a "Days Until Milestone" widget
```javascript
// 1. Add to projects-data.json
"daysToMilestone": 45

// 2. Add HTML in dashboard
<div class="milestone-widget">
    <span id="days-to-milestone">--</span> jours
    <p>Jusqu'à v1.0</p>
</div>

// 3. Add JS to populate
const data = await ProjectDataLoader.load('ForkX');
document.getElementById('days-to-milestone').textContent = data.daysToMilestone;

// 4. Add CSS for styling
.milestone-widget {
    background: var(--gradient);
    color: white;
    padding: 1rem;
    border-radius: 8px;
}
```

---

#### Task: Fix Todo System Bug

**Important:** Todo system uses Firebase - be careful with sync logic

**Steps:**
1. Reproduce the bug
2. Check browser console for errors
3. Verify Firebase connection
4. Review `js/todos.js` and `js/firebase-sync.js`
5. Test fix with all three project tabs
6. Verify Firebase data structure unchanged
7. Export/import test to ensure no data loss

---

#### Task: Update Mobile App

**Steps:**
1. Navigate to `geekvanlife_app/`
2. Modify `lib/main.dart` or config files
3. Test with emulator or device:
   ```bash
   flutter run
   ```
4. Build release APK:
   ```bash
   flutter build apk --release
   ```
5. Test APK on physical device
6. Update `geekvanlife_app/README.md` if behavior changed

**Note:** Mobile app is a WebView wrapper - most updates happen in web files, not Flutter code.

---

### Red Flags (Don't Do This!)

❌ **Hardcode data in dashboards**
```javascript
// BAD
const version = "v0.2";
const lastUpdate = "17 novembre 2025";

// GOOD
const data = await ProjectDataLoader.load('ForkX');
const version = data.version;
const lastUpdate = data.lastUpdate;
```

❌ **Duplicate news across multiple files**
- Always use single news JSON file per project
- Load news dynamically, don't copy-paste

❌ **Break Firebase sync without testing**
- Todo data loss is unacceptable
- Always test import/export after Firebase changes

❌ **Change color schemes arbitrarily**
- Colors are brand identity per project
- Only change if explicitly requested

❌ **Remove backup files without asking**
- `todos-backup.html`, `todos-original.html` may be needed
- Check with user before deleting

❌ **Modify Flutter app without testing**
- Always run `flutter run` before committing
- Broken mobile app = bad user experience

---

### Best Practices

✅ **Use ProjectDataLoader consistently**
```javascript
const data = await ProjectDataLoader.load('ForkX');
```

✅ **Update lastUpdate date when changing data**
```json
"lastUpdate": "23 novembre 2025"
```

✅ **Add news entries for significant updates**
```json
{
  "date": "23 novembre 2025",
  "icon": "🎉",
  "text": "Phase v0.2 atteint 50% de progression!"
}
```

✅ **Test all project tabs when modifying todos**
- Switch between ForkX, Geekomobile, Geekagne tabs
- Verify data isolation (changes in one don't affect others)

✅ **Maintain mobile responsiveness**
```css
/* Always include mobile breakpoints */
@media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; }
}
```

✅ **Comment complex logic**
```javascript
// Calculate days remaining until v1.0 milestone
// Formula: target date (31 Oct 2026) - today
const daysRemaining = Math.ceil(
    (new Date('2026-10-31') - new Date()) / (1000 * 60 * 60 * 24)
);
```

✅ **Validate JSON before committing**
```bash
cat src/projects-data.json | jq .
```

✅ **Keep commit history clean**
- One logical change per commit
- Descriptive commit messages
- Reference issues if applicable

---

### Language & Localization

**Primary Language:** French (Français)

**Conventions:**
- All user-facing text in French
- Comments in code can be English or French
- Dates in French format: "23 novembre 2025"
- Numbers use European format: 1.234,56 €

**Common Translations:**
- "Last updated" → "Mis à jour le"
- "Progress" → "Avancement"
- "Budget" → "Budget"
- "Status" → "Statut"
- "News" → "Actualités"
- "See more" → "Voir plus"

---

### When in Doubt

1. **Check existing patterns** - Look at similar code in other files
2. **Read documentation** - This file, DATA_MANAGEMENT.md, project READMEs
3. **Test thoroughly** - Better to over-test than break production
4. **Ask the user** - If unclear, request clarification
5. **Small changes** - Incremental is safer than big rewrites

---

## 📚 Additional Resources

### Documentation Files

- `README.md` - Main project documentation
- `src/DATA_MANAGEMENT.md` - Data architecture details
- `ForkX/ForkX_README.md` - ForkX project specifics
- `Geekomobile/Geekomobile_README.md` - Geekomobile details
- `Geekagne/Geekagne_README.md` - Geekagne information
- `geekvanlife_app/README.md` - Flutter app guide

### Changelog Files

- `CHANGELOG.md` - Global changelog
- `ForkX/ForkX_CHANGELOG.md` - ForkX version history
- `Geekomobile/Geekomobile_CHANGELOG.md` - Geekomobile updates
- `Geekagne/Geekagne_CHANGELOG.md` - Geekagne progress

### External Links

- **Website:** [geek-vanlife.fr](https://www.geek-vanlife.fr/)
- **Instagram:** [@geekvanlifefr](http://www.instagram.com/geekvanlifefr)
- **YouTube:** [GeekVanlife](http://www.youtube.com/geekvanlife)
- **GitHub Pages:** [wolwx.github.io/GeekVanlife](https://wolwx.github.io/GeekVanlife/)

---

## 🔐 Security & Credentials

### Firebase Configuration

**Location:** `js/firebase-sync.js`

**Current Config:**
```javascript
{
    apiKey: "AIzaSyD7PUqS5GGpEuQiZhlaiwhBpiJps5K8Jec",
    authDomain: "geekvanlife.firebaseapp.com",
    projectId: "geekvanlife",
    databaseURL: "https://geekvanlife-default-rtdb.europe-west1.firebasedatabase.app"
}
```

**Note:** These are client-side credentials for Firebase - they're public by design. Security is handled by Firebase rules, not credential secrecy.

**⚠️ Do NOT:**
- Add private keys to repository
- Commit `.env` files with secrets
- Expose backend API keys

---

## 📱 Deployment

### GitHub Pages

**Current Setup:**
- Deploys from `main` branch
- URL: `https://wolwx.github.io/GeekVanlife/`
- Automatic deployment on push to main

**Local Preview:**
```bash
python3 -m http.server 8000
open http://localhost:8000
```

### Flutter App Distribution

**Android APK:**
```bash
cd geekvanlife_app
flutter build apk --release
# APK location: build/app/outputs/flutter-apk/app-release.apk
```

**Google Play:**
```bash
flutter build appbundle --release
# Upload to Google Play Console
```

---

## 🎯 Project Roadmap & Future Enhancements

### Planned Features

- [ ] Backend API for data updates (replace manual JSON editing)
- [ ] Authentication system for private todo lists
- [ ] Analytics/metrics dashboard
- [ ] Photo galleries per project
- [ ] Budget tracking with receipts/invoices
- [ ] Weather data integration for Geekagne
- [ ] Vehicle maintenance logs for vans

### Technical Debt

- [ ] Migrate all dashboards to use `ProjectDataLoader` (partially done)
- [ ] Centralize CSS (reduce duplication)
- [ ] Optimize Firebase sync (batch operations)
- [ ] Add unit tests for data loader
- [ ] Improve error handling throughout
- [ ] Add loading states for async operations

---

## 🆘 Troubleshooting

### Common Issues

**Issue:** Dashboard not loading data

**Solution:**
```javascript
// Check console for errors
// Verify projects-data.json is valid JSON
cat src/projects-data.json | jq .

// Ensure project-data-loader.js is included
<script src="../src/project-data-loader.js"></script>
```

---

**Issue:** Firebase not syncing todos

**Solution:**
```javascript
// Check Firebase initialized
console.log(window.firebaseDB);  // Should not be undefined

// Verify network connection
// Check Firebase console for data structure

// Re-initialize if needed
window.loadDataFromFirebase();
```

---

**Issue:** News not displaying

**Solution:**
```javascript
// Verify news JSON file exists
cat src/news/forkx-news.json

// Check news-loader.js included
<script src="../src/news-loader.js"></script>

// Verify file path in loader
// Check console for fetch errors
```

---

**Issue:** Mobile app shows blank screen

**Solution:**
```bash
# Check network connection
# Verify GitHub Pages URL accessible
curl https://wolwx.github.io/GeekVanlife/

# Check Flutter console output
flutter run

# Clear app cache and reinstall
flutter clean
flutter pub get
flutter run
```

---

**Issue:** Colors wrong on dashboard

**Solution:**
```css
/* Verify CSS variables set correctly */
:root {
    --primary-color: #{correct-color};
    --secondary-color: #{correct-color};
    --gradient: linear-gradient(...);
}

/* Check projects-data.json has correct colors */
"colors": {
    "primary": "#c0392b",
    "secondary": "#e74c3c"
}
```

---

## 📞 Contact & Support

**Repository Owner:** Xavier Redondo (WolwX)

**For AI Assistants:**
- Follow guidelines in this document
- When uncertain, ask user for clarification
- Prioritize data integrity and user experience
- Test thoroughly before committing

**For Human Developers:**
- Open issues on GitHub for bugs
- Submit pull requests for features
- Follow existing code conventions
- Update documentation with changes

---

## 📄 License

This project is under [MIT License](./LICENSE).

**Summary:**
- Free to use, modify, and share
- Must credit original source
- No warranty provided

---

## 🏁 Conclusion

This guide provides comprehensive information for AI assistants working with the GeekVanlife codebase. Key takeaways:

1. **Data centralization** - Always use `src/projects-data.json`
2. **Consistency** - Follow existing patterns and conventions
3. **Testing** - Verify changes across all projects and devices
4. **Documentation** - Update docs when making significant changes
5. **User experience** - Prioritize functionality and mobile compatibility

**Remember:** This is a personal documentation project for real-world vanlife experience. Treat data with care, maintain quality, and preserve the user's trust.

---

**Last Updated:** November 23, 2025
**Maintained By:** AI Assistants & Xavier Redondo (WolwX)
**Version:** 1.0.0

---

*Made with ❤️ for the GeekVanlife community*

🚐 *"Home is where you park it"*
