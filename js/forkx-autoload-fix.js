// Fix pour le chargement automatique de l'onglet ForkX
// Ce script corrige le problème de la fonction updateListSelect manquante

// Fonction updateListSelect manquante - version minimale
function updateListSelect(projectId) {
    // Cette fonction n'est pas critique pour le chargement initial
    // Elle sera appelée mais ne fera rien si elle n'existe pas déjà
    console.log(`updateListSelect appelée pour ${projectId}`);
}

// Surcharger switchTab pour ne pas appeler updateListSelect
const originalSwitchTab = window.switchTab;
if (originalSwitchTab) {
    window.switchTab = function (projectId) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.getElementById(projectId + '-tab').classList.add('active');

        // Activer le bouton correspondant
        const targetButton = document.querySelector(`[onclick*="${projectId}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }

        // Appeler renderTodos uniquement
        if (window.renderTodos) {
            window.renderTodos(projectId);
        }
    };
}

// Forcer le chargement de ForkX au démarrage
window.addEventListener('load', function () {
    console.log('🔧 Fix ForkX: Chargement automatique...');

    setTimeout(function () {
        const forkxBtn = document.querySelector('.tab-button.forkx');
        if (forkxBtn) {
            console.log('✅ Clic sur ForkX');
            forkxBtn.click();
        } else if (window.switchTab) {
            console.log('✅ Appel direct switchTab');
            window.switchTab('forkx');
        }
    }, 500);
});

console.log('✅ Fix ForkX chargé');
