/**
 * News Loader - Gère le chargement des news depuis les fichiers JSON
 */

class NewsLoader {
    constructor(projectName) {
        this.projectName = projectName;
        this.newsFile = `./src/news/${projectName.toLowerCase()}-news.json`;
    }

    /**
     * Charge toutes les news du fichier JSON
     */
    async loadAllNews() {
        try {
            const response = await fetch(this.newsFile);
            if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
            const data = await response.json();
            return data.news || [];
        } catch (error) {
            console.error(`❌ Erreur lors du chargement des news pour ${this.projectName}:`, error);
            return [];
        }
    }

    /**
     * Charge les N dernières news
     */
    async getLatestNews(count = 3) {
        const allNews = await this.loadAllNews();
        return allNews.slice(0, count);
    }

    /**
     * Affiche les N dernières news avec bouton "Voir plus"
     */
    async displayLatestNews(containerId, count = 3, showMoreButtonCallback = null) {
        const allNews = await this.loadAllNews();
        const latestNews = allNews.slice(0, count);
        const container = document.getElementById(containerId);

        if (!container) {
            console.warn(`⚠️ Conteneur #${containerId} non trouvé`);
            return;
        }

        container.innerHTML = '';

        if (latestNews.length === 0) {
            container.innerHTML = '<p style="color: #999; text-align: center;">Aucune news pour le moment</p>';
            return;
        }

        // Ajouter les news
        latestNews.forEach(item => {
            const newsDiv = document.createElement('div');
            newsDiv.className = 'news-item';
            newsDiv.innerHTML = `
                <span class="news-icon">${item.icon}</span>
                <div class="news-content">
                    <div class="news-date">${item.date}</div>
                    <div class="news-text">${item.text}</div>
                </div>
            `;
            container.appendChild(newsDiv);
        });

        // Ajouter le bouton "Voir plus" s'il y a d'autres news
        if (allNews.length > count) {
            const moreButton = document.createElement('div');
            moreButton.style.marginTop = '15px';
            moreButton.style.textAlign = 'center';
            moreButton.innerHTML = `
                <a href="news.html" class="see-more-button" style="
                    display: inline-block;
                    padding: 8px 16px;
                    background: #667eea;
                    color: white;
                    border-radius: 6px;
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#5568d3'" onmouseout="this.style.background='#667eea'">
                    Voir plus de news ➜
                </a>
            `;
            container.appendChild(moreButton);
        }
    }
}
