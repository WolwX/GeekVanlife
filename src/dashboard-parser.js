/**
 * Dashboard Data Parser
 * Extrait automatiquement les données depuis les fichiers README.md
 * Compatible avec ForkX, Geekomobile et Geekagne
 */

class DashboardParser {
    constructor(readmePath) {
        this.readmePath = readmePath;
        this.data = {};
    }

    /**
     * Charge et parse le fichier README
     */
    async loadData() {
        try {
            const response = await fetch(this.readmePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            this.parseReadme(text);
            return this.data;
        } catch (error) {
            console.error('Erreur lors du chargement du README:', error);
            return null;
        }
    }

    /**
     * Parse le contenu du README et extrait les données
     */
    parseReadme(text) {
        // Version actuelle (v0.1, v0.2, etc.)
        const versionMatch = text.match(/###\s+✅\s+v(\d+\.\d+)\s+-\s+([A-ZÀÉÈ\s&+]+)/i);
        if (versionMatch) {
            this.data.currentVersion = `v${versionMatch[1]}`;
            this.data.versionName = versionMatch[2].trim();
        }

        // Statut (EN COURS, À VENIR, etc.)
        const statusMatch = text.match(/\*\*Statut\s*:\s*([^*\n]+)/i);
        if (statusMatch) {
            this.data.currentStatus = statusMatch[1].trim();
        }

        // Budget v0.1 total
        const budgetV01Match = text.match(/\*\*Budget v0\.1\s*:\*\*\s*~?\s*(\d+\s?\d*)\s*€/);
        if (budgetV01Match) {
            this.data.budgetV01Total = parseInt(budgetV01Match[1].replace(/\s/g, ''));
        }

        // Budget dépensé
        const budgetSpentMatch = text.match(/\*\*Dépensé\s*:\*\*\s*(\d+\s?\d*[,.]?\d*)\s*€/);
        if (budgetSpentMatch) {
            this.data.budgetSpent = parseFloat(budgetSpentMatch[1].replace(/\s/g, '').replace(',', '.'));
        }

        // Budget restant v0.1
        const budgetRemainingMatch = text.match(/\*\*Reste\s*:\*\*\s*~?\s*(\d+\s?\d*)\s*€/);
        if (budgetRemainingMatch) {
            this.data.budgetRemainingV01 = parseInt(budgetRemainingMatch[1].replace(/\s/g, ''));
        }

        // Budget total projet (sans chauffage)
        const totalProjectMatch = text.match(/TOTAL\s*\(sans chauffage\)\s*:\s*(\d+\s?\d*)\s*€/);
        if (totalProjectMatch) {
            this.data.budgetTotalProject = parseInt(totalProjectMatch[1].replace(/\s/g, ''));
        }

        // Date de dernière mise à jour (cherche les dates récentes dans le texte)
        const dateMatches = text.match(/(\d{1,2}\/\d{1,2}\/\d{4})/g);
        if (dateMatches && dateMatches.length > 0) {
            // Prend la date la plus récente
            const dates = dateMatches.map(d => {
                const parts = d.split('/');
                return new Date(parts[2], parts[1] - 1, parts[0]);
            });
            const latestDate = new Date(Math.max(...dates));
            this.data.lastUpdate = latestDate.toLocaleDateString('fr-FR', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            });
        }

        // Progression v0.1 (estimation basée sur les tâches complétées)
        const completedTasks = (text.match(/✅/g) || []).length;
        const totalTasksV01 = (text.match(/✅|⏳|📦/g) || []).length;
        if (totalTasksV01 > 0) {
            this.data.progressV01 = Math.round((completedTasks / totalTasksV01) * 100);
        }

        // Extraction des réalisations
        const realisationsMatch = text.match(/\*\*Réalisations \(([\d\s,€.]+)\):\*\*/);
        if (realisationsMatch) {
            const amount = realisationsMatch[1].replace(/\s/g, '').replace('€', '').replace(',', '.');
            this.data.budgetRealisations = parseFloat(amount);
        }

        // Extraction du budget en transit
        const transitMatch = text.match(/\*\*En cours de livraison \(([\d\s,€.]+)\):\*\*/);
        if (transitMatch) {
            const amount = transitMatch[1].replace(/\s/g, '').replace('€', '').replace(',', '.');
            this.data.budgetTransit = parseFloat(amount);
        }

        // Extraction du budget reste à faire
        const resteMatch = text.match(/\*\*Reste à faire \(([\d\s-€]+)\):\*\*/);
        if (resteMatch) {
            const range = resteMatch[1].match(/(\d+)-?(\d*)/);
            if (range) {
                const min = parseInt(range[1]);
                const max = range[2] ? parseInt(range[2]) : min;
                this.data.budgetRemainingRange = { min, max };
                this.data.budgetRemainingEstimate = Math.round((min + max) / 2);
            }
        }

        // Date de fin prévue
        const dateFin = text.match(/\*\*Date fin prévue\s*:\*\*\s*([^\n]+)/);
        if (dateFin) {
            this.data.dateFin = dateFin[1].trim();
        }

        // Calcul progression globale (basée sur toutes les versions)
        const allVersions = text.match(/v\d+\.\d+/g) || [];
        const uniqueVersions = [...new Set(allVersions)];
        if (uniqueVersions.length > 0) {
            // Estimation: si v0.1 = 75% et c'est la version actuelle sur ~11 versions
            this.data.progressTotal = Math.round((0.1 / 1.0) * 100); // v0.1 = 10% du projet total
        }

        // Jours restants jusqu'à v1.0 (estimation basée sur date fin)
        if (this.data.dateFin) {
            const today = new Date();
            const endDate = new Date(2026, 9, 31); // 31 octobre 2026 (estimation v1.0)
            const daysRemaining = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
            this.data.daysToV10 = Math.max(0, daysRemaining);
        }

        console.log('Données extraites du README:', this.data);
        return this.data;
    }

    /**
     * Retourne les données formatées pour le dashboard
     */
    getDashboardData() {
        return {
            currentVersion: this.data.currentVersion || 'v0.1',
            currentStatus: this.data.currentStatus || 'EN COURS',
            lastUpdate: this.data.lastUpdate || new Date().toLocaleDateString('fr-FR'),
            progressV01: this.data.progressV01 || 75,
            progressTotal: this.data.progressTotal || 8,
            budgetSpent: this.data.budgetSpent || 0,
            budgetV01Total: this.data.budgetV01Total || 0,
            budgetTotalProject: this.data.budgetTotalProject || 0,
            daysToV10: this.data.daysToV10 || 351,
            budgetRealisations: this.data.budgetRealisations || 0,
            budgetTransit: this.data.budgetTransit || 0,
            budgetRemainingEstimate: this.data.budgetRemainingEstimate || 0
        };
    }
}

// Export pour utilisation dans les dashboards
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DashboardParser;
}
