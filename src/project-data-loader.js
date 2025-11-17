/**
 * Projects Data Loader
 * Centralizes all project data management
 * Usage: const data = await ProjectDataLoader.load('ForkX');
 */

class ProjectDataLoader {
  static dataUrl = '../src/projects-data.json';

  /**
   * Load project data from JSON
   * @param {string} projectId - Project ID (ForkX, Geekomobile, Geekagne)
   * @returns {Promise<Object>} Project data
   */
  static async load(projectId) {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) throw new Error('Failed to load projects data');
      
      const data = await response.json();
      const projectData = data.projects[projectId];
      
      if (!projectData) {
        console.warn(`Project ${projectId} not found in data file`);
        return null;
      }
      
      return projectData;
    } catch (error) {
      console.error('Error loading project data:', error);
      return null;
    }
  }

  /**
   * Load all projects
   * @returns {Promise<Object>} All projects data
   */
  static async loadAll() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) throw new Error('Failed to load projects data');
      return await response.json();
    } catch (error) {
      console.error('Error loading projects data:', error);
      return null;
    }
  }

  /**
   * Update project data (for future implementation)
   * @param {string} projectId - Project ID
   * @param {Object} updates - Data to update
   */
  static async update(projectId, updates) {
    console.log(`Update request for ${projectId}:`, updates);
    // This would require backend API in production
    console.warn('Update functionality requires backend API');
  }

  /**
   * Get specific field from project data
   * @param {string} projectId - Project ID
   * @param {string} field - Field path (e.g., 'progress.v01' or 'budget.spent')
   * @returns {Promise<any>} Field value
   */
  static async getField(projectId, field) {
    const data = await this.load(projectId);
    if (!data) return null;
    
    const keys = field.split('.');
    let value = data;
    
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return null;
    }
    
    return value;
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProjectDataLoader;
}
