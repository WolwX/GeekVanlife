const projects = {
    forkx: { storageKey: 'forkx-todos', displayColor: 'forkx' },
    geekomobile: { storageKey: 'geekomobile-todos', displayColor: 'geekomobile' },
    geekagne: { storageKey: 'geekagne-todos', displayColor: 'geekagne' }
};

/**
 * Crée un code de partage unique pour TOUTES les données de l'app
 * Format: SHARE-TIMESTAMP-RANDOM
 */
function generateShareCode() {
    const timestamp = Math.floor(Date.now() / 1000);
    const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    return `${timestamp.toString().slice(-5)}${random}`;
}

function getAllApplicationData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.startsWith('sync_')) {
            data[key] = localStorage.getItem(key);
        }
    }
    return data;
}

function saveShareCode(code, appData) {
    const shareEntry = {
        data: appData,
        timestamp: Date.now(),
        expiry: Date.now() + (7 * 24 * 60 * 60 * 1000)
    };
    localStorage.setItem(`sync_${code}`, JSON.stringify(shareEntry));
}

function loadShareCode(code) {
    const shareEntry = localStorage.getItem(`sync_${code}`);
    if (!shareEntry) return null;

    const entry = JSON.parse(shareEntry);
    if (Date.now() > entry.expiry) {
        localStorage.removeItem(`sync_${code}`);
        return null;
    }
    return entry.data;
}

/**
 * Ouvre la modal de synchronisation
 */
function openSyncModal() {
    const modal = document.getElementById('sync-modal');
    modal.classList.add('active');

    // Vérifier s'il existe déjà un code valide
    let shareCode = localStorage.getItem('current_share_code');

    // Générer un nouveau code seulement s'il n'existe pas ou est expiré
    if (!shareCode || !loadShareCode(shareCode)) {
        shareCode = generateShareCode();
        const allAppData = getAllApplicationData();
        saveShareCode(shareCode, allAppData);
        localStorage.setItem('current_share_code', shareCode);
    }

    document.getElementById('sync-code').value = shareCode;
    document.getElementById('sync-code-input').value = '';
}

/**
 * Ferme la modal de synchronisation
 */
function closeSyncModal() {
    document.getElementById('sync-modal').classList.remove('active');
}

/**
 * Copie le code de partage dans le presse-papiers
 */
function copySyncCode() {
    const code = document.getElementById('sync-code').value;
    navigator.clipboard.writeText(code).then(() => {
        alert('✓ Code copié ! Vous pouvez maintenant le partager');
    }).catch(() => {
        alert('Erreur lors de la copie. Code: ' + code);
    });
}

/**
 * Synchronise l'application avec un code de partage
 * Restaure TOUTES les données exportées
 */
function syncWithCode() {
    const code = document.getElementById('sync-code-input').value.trim();
    if (!code) {
        alert('Veuillez entrer un code');
        return;
    }

    const shareData = loadShareCode(code);
    if (!shareData) {
        alert('❌ Code invalide ou expiré');
        return;
    }

    if (!confirm('⚠️ Ceci remplacera toutes vos données actuelles.\n\nContinuer ?')) {
        return;
    }

    Object.keys(shareData).forEach(key => {
        localStorage.setItem(key, shareData[key]);
    });

    alert('✓ Synchronisation réussie !\n\nRafraîchissez la page pour voir les changements.');
    closeSyncModal();
    location.reload();
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.accordion-toggle');
    content.classList.toggle('open');
    toggle.classList.toggle('open');
}

function selectPriority(btn, projectId) {
    const selector = btn.parentElement;
    selector.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById(projectId + '-priority').value = btn.dataset.priority;
}

function switchTab(projectId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(projectId + '-tab').classList.add('active');

    // Activer le bouton correspondant
    const targetButton = document.querySelector(`[onclick*="${projectId}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }

    updateListSelect(projectId);
    renderTodos(projectId);
}

function openListModal(projectId) {
    const listName = prompt('Entrez le nom de la nouvelle liste:');
    if (listName && listName.trim()) {
        // La liste sera ajoutée automatiquement quand on ajoute une tâche
        alert('La liste sera créée quand vous ajouterez la première tâche');
    }
}

function updateListSelect(projectId) {
    const todos = loadTodos(projectId);
    const lists = new Set();
    todos.forEach(todo => {
        if (todo.list) lists.add(todo.list);
    });

    const select = document.getElementById(projectId + '-list-select');
    const currentValue = select.value;
    const listOptions = Array.from(lists).sort();

    select.innerHTML = '<option value="">-- Sélectionner une liste --</option>' +
        listOptions.map(list => `<option value="${escapeHtml(list)}">${escapeHtml(list)}</option>`).join('');

    if (listOptions.includes(currentValue)) {
        select.value = currentValue;
    }
}

function loadTodos(projectId) {
    return JSON.parse(localStorage.getItem(projects[projectId].storageKey)) || [];
}

function saveTodos(projectId, todos) {
    const storageKey = projects[projectId].storageKey;
    localStorage.setItem(storageKey, JSON.stringify(todos));
}

function addTodo(projectId) {
    const taskName = document.getElementById(projectId + '-task-name').value.trim();
    const listSelect = document.getElementById(projectId + '-list-select');
    let listName = listSelect.value.trim();
    const priority = document.getElementById(projectId + '-priority').value;
    const amount = document.getElementById(projectId + '-amount').value;
    let link = document.getElementById(projectId + '-link').value.trim();
    const note = document.getElementById(projectId + '-note').value.trim();

    if (!taskName) {
        alert('Veuillez remplir le nom de la tâche');
        return;
    }

    // Si pas de liste sélectionnée, utiliser une liste vide (sans nom)
    if (!listName) {
        listName = '';
    }

    // Ajouter le préfixe https:// si absent
    if (link && !link.match(/^https?:\/\//i)) {
        link = 'https://' + link;
    }

    const todos = loadTodos(projectId);
    todos.push({
        id: Date.now(),
        list: listName,
        name: taskName,
        priority: priority,
        amount: amount ? parseFloat(amount) : null,
        link: link,
        note: note,
        completed: false,
        parentId: null
    });

    saveTodos(projectId, todos);

    // Clear form
    document.getElementById(projectId + '-task-name').value = '';
    listSelect.value = '';
    document.getElementById(projectId + '-amount').value = '';
    document.getElementById(projectId + '-link').value = '';
    document.getElementById(projectId + '-note').value = '';
    document.getElementById(projectId + '-priority').value = 'medium';
    document.querySelectorAll(`#${projectId}-tab .priority-btn`).forEach(b => b.classList.remove('selected'));
    document.querySelectorAll(`#${projectId}-tab .priority-btn[data-priority="medium"]`).forEach(b => b.classList.add('selected'));

    updateListSelect(projectId);
    renderTodos(projectId);
}

function openEditModal(projectId, todoId) {
    const todos = loadTodos(projectId);
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return;

    // Créer la modal
    let modal = document.getElementById('edit-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'edit-modal';
        modal.className = 'edit-modal';
        modal.onclick = function(e) {
            if (e.target === modal) closeEditModal();
        };
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="edit-modal-content">
            <div class="edit-modal-header">Éditer la tâche</div>
            <form class="edit-modal-form" onsubmit="saveEditModal('${projectId}', ${todoId}); return false;">
                <div class="form-group">
                    <label>Nom de la tâche</label>
                    <input type="text" id="edit-name" value="${escapeHtml(todo.name)}" required>
                </div>
                <div class="form-group">
                    <label>Liste</label>
                    <input type="text" id="edit-list" value="${escapeHtml(todo.list)}" required>
                </div>
                <div class="form-group">
                    <label>Priorité</label>
                    <select id="edit-priority">
                        <option value="low" ${todo.priority === 'low' ? 'selected' : ''}>Basse (🟢)</option>
                        <option value="medium" ${todo.priority === 'medium' ? 'selected' : ''}>Moyenne (🟡)</option>
                        <option value="high" ${todo.priority === 'high' ? 'selected' : ''}>Haute (🔴)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Montant (€)</label>
                    <input type="number" id="edit-amount" value="${todo.amount || ''}" step="0.01">
                </div>
                <div class="form-group">
                    <label>Lien</label>
                    <input type="text" id="edit-link" value="${escapeHtml(todo.link || '')}" placeholder="exemple.com">
                </div>
                <div class="form-group">
                    <label>Note</label>
                    <textarea id="edit-note">${escapeHtml(todo.note || '')}</textarea>
                </div>
                <div class="edit-modal-actions">
                    <button type="submit" class="btn-save">Enregistrer</button>
                    <button type="button" class="btn-cancel" onclick="closeEditModal()">Annuler</button>
                </div>
            </form>
        </div>
    `;
    modal.classList.add('active');
}

function closeEditModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) modal.classList.remove('active');
}

function saveEditModal(projectId, todoId) {
    const todos = loadTodos(projectId);
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return;

    todo.name = document.getElementById('edit-name').value.trim();
    todo.list = document.getElementById('edit-list').value.trim();
    todo.priority = document.getElementById('edit-priority').value;
    const amount = parseFloat(document.getElementById('edit-amount').value);
    todo.amount = isNaN(amount) ? null : amount;

    // Ajouter le préfixe https:// si absent
    let link = document.getElementById('edit-link').value.trim();
    if (link && !link.match(/^https?:\/\//i)) {
        link = 'https://' + link;
    }
    todo.link = link;
    todo.note = document.getElementById('edit-note').value.trim();

    saveTodos(projectId, todos);
    closeEditModal();
    updateListSelect(projectId);
    renderTodos(projectId);
}

function toggleTodo(projectId, todoId) {
    const todos = loadTodos(projectId);
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return;

    // Si on essaie de cocher, vérifier les enfants
    if (!todo.completed) {
        if (!canToggleTodo(todos, todoId, false)) {
            return;
        }
    }

    todo.completed = !todo.completed;
    saveTodos(projectId, todos);
    renderTodos(projectId);
}

function deleteTodo(projectId, todoId) {
    const todos = loadTodos(projectId);
    const descendants = getAllDescendants(todos, todoId);
    const descendantCount = descendants.length;

    let message = 'Êtes-vous sûr de vouloir supprimer cette tâche ?';
    if (descendantCount > 0) {
        message += `\n\nAttention : Cette tâche a ${descendantCount} sous-tâche${descendantCount > 1 ? 's' : ''}. Celles-ci seront aussi supprimées.`;
    }

    if (confirm(message)) {
        // Supprimer la tâche et tous ses descendants
        const idsToDelete = new Set([todoId]);
        descendants.forEach(d => idsToDelete.add(d.id));

        const filtered = todos.filter(t => !idsToDelete.has(t.id));
        saveTodos(projectId, filtered);
        updateListSelect(projectId);
        renderTodos(projectId);
    }
}



function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Variables globales pour l'import d'image
let currentImageProjectId = null;
let extractedTodos = [];

function openImageImportModal(projectId) {
    currentImageProjectId = projectId;
    extractedTodos = [];
    document.getElementById('image-import-modal').classList.add('active');

    // Réinitialiser le formulaire
    document.getElementById('image-input').value = '';
    document.getElementById('image-preview').style.display = 'none';
    document.getElementById('ocr-container').style.display = 'none';
    document.getElementById('todo-preview-container').style.display = 'none';
    document.getElementById('import-actions-container').style.display = 'none';
    document.getElementById('processing-container').style.display = 'none';
    document.getElementById('no-import-actions').style.display = 'flex';

    // Setup drag & drop sur la zone
    const uploadZone = document.getElementById('upload-zone');
    const imageInput = document.getElementById('image-input');

    if (uploadZone && imageInput) {
        uploadZone.ondragover = (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        };

        uploadZone.ondragleave = (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
        };

        uploadZone.ondrop = (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                imageInput.files = e.dataTransfer.files;
                handleImageSelect({ target: imageInput });
            }
        };
    }
}

function closeImageImportModal() {
    document.getElementById('image-import-modal').classList.remove('active');
    currentImageProjectId = null;
    extractedTodos = [];
}

function openJsonImportModal(projectId) {
    currentImageProjectId = projectId;
    document.getElementById('json-import-modal').classList.add('active');

    // Réinitialiser le formulaire
    document.getElementById('json-import-input').value = '';

    // Setup drag & drop pour JSON
    const uploadZone = document.getElementById('json-upload-zone');
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });
    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/json') {
            document.getElementById('json-import-input').files = e.dataTransfer.files;
            handleJsonImportSelect({ target: document.getElementById('json-import-input') });
        }
    });
}

function closeJsonImportModal() {
    document.getElementById('json-import-modal').classList.remove('active');
    currentImageProjectId = null;
}

function handleJsonImportSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            if (importedData && Array.isArray(importedData.todos)) {
                const todos = loadTodos(currentImageProjectId);
                importedData.todos.forEach(todo => todos.push(todo));
                saveTodos(currentImageProjectId, todos);
                updateListSelect(currentImageProjectId);
                renderTodos(currentImageProjectId);
                alert(`${importedData.todos.length} tâche(s) importée(s) avec succès !`);
                closeJsonImportModal();
            }
        } catch (error) {
            alert('Erreur lors de l\'import du fichier JSON');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

function handleImageSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
        const imageSrc = e.target.result;

        // Afficher l'aperçu
        document.getElementById('preview-img').src = imageSrc;
        document.getElementById('image-preview').style.display = 'block';
        document.getElementById('no-import-actions').style.display = 'none';

        // Afficher le spinner
        document.getElementById('processing-container').style.display = 'block';
        document.getElementById('ocr-container').style.display = 'none';
        document.getElementById('todo-preview-container').style.display = 'none';
        document.getElementById('import-actions-container').style.display = 'none';

        // OCR avec Tesseract
        try {
            const result = await Tesseract.recognize(imageSrc, 'fra');
            const text = result.data.text;
            document.getElementById('ocr-text').value = text;
            document.getElementById('ocr-container').style.display = 'block';

            // Parser automatiquement
            extractedTodos = parseTodoListFromText(text);
            if (extractedTodos.length > 0) {
                displayTodoPreview();
                document.getElementById('import-actions-container').style.display = 'flex';
            } else {
                alert('Aucune tâche détectée. Modifiez le texte et re-parsez.');
            }
        } catch (error) {
            alert('Erreur OCR: ' + error.message);
            console.error(error);
        } finally {
            document.getElementById('processing-container').style.display = 'none';
        }
    };
    reader.readAsDataURL(file);
}

function parseTodoListFromText(text) {
    const todos = [];
    const lines = text.split('\n').filter(line => line.trim());

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.length < 3) return;

        const completed = /^[\s]*[✓✔☑\[x\]\(x\)]/.test(line);
        let taskName = trimmed
            .replace(/^[✓✔☑\[x\]\(x\)•~-]+\s*/, '')
            .replace(/^[\s]*[-•*]\s*/, '')
            .trim();

        let priority = 'medium';
        if (/🟢|basse|low/i.test(taskName)) {
            priority = 'low';
            taskName = taskName.replace(/🟢|basse|low/gi, '').trim();
        } else if (/🔴|haute|high/i.test(taskName)) {
            priority = 'high';
            taskName = taskName.replace(/🔴|haute|high/gi, '').trim();
        }

        const amountMatch = taskName.match(/(\d+[.,]\d{0,2})\s*[€$EUR]/);
        let amount = null;
        if (amountMatch) {
            amount = parseFloat(amountMatch[1].replace(',', '.'));
            taskName = taskName.replace(amountMatch[0], '').trim();
        }

        if (taskName && taskName.length > 2) {
            todos.push({
                id: Date.now() + index,
                list: '',
                name: taskName,
                priority: priority,
                amount: amount,
                link: '',
                note: '',
                completed: completed,
                parentId: null
            });
        }
    });

    return todos;
}

function displayTodoPreview() {
    const previewHtml = extractedTodos.map((todo, index) => `
        <div class="todo-preview-item ${todo.completed ? 'completed' : ''}">
            <strong>${escapeHtml(todo.name)}</strong>
            ${todo.amount ? `<span> • ${todo.amount}€</span>` : ''}
            <span> • ${todo.priority === 'low' ? '🟢' : todo.priority === 'high' ? '🔴' : '🟡'}</span>
            ${todo.completed ? ' <span style="opacity: 0.5;">(complétée)</span>' : ''}
        </div>
    `).join('');

    document.getElementById('todo-preview-list').innerHTML = previewHtml;
    document.getElementById('todo-preview-container').style.display = 'block';
}

function importFromImage() {
    if (!currentImageProjectId || extractedTodos.length === 0) {
        alert('Aucune tâche à importer');
        return;
    }

    const todos = loadTodos(currentImageProjectId);
    extractedTodos.forEach(todo => {
        todos.push(todo);
    });

    saveTodos(currentImageProjectId, todos);
    updateListSelect(currentImageProjectId);
    renderTodos(currentImageProjectId);

    alert(`${extractedTodos.length} tâche(s) importée(s) avec succès !`);
    closeImageImportModal();
}

function exportTodos(projectId) {
    const todos = loadTodos(projectId);
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];

    const exportData = {
        project: projectId,
        exportDate: now.toISOString(),
        todosCount: todos.length,
        todos: todos
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GeekVanlife-${projectId}-${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function importTodos(projectId, event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (importedData && Array.isArray(importedData.todos)) {
                const todos = loadTodos(projectId);
                importedData.todos.forEach(todo => todos.push(todo));
                saveTodos(projectId, todos);
                updateListSelect(projectId);
                renderTodos(projectId);
                alert(`${importedData.todos.length} tâche(s) importée(s) avec succès !`);
            }
        } catch (error) {
            alert('Erreur lors de l\'import du fichier JSON');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

function calculateListEstimate(listTodos) {
    const total = listTodos.reduce((sum, todo) => sum + (todo.amount || 0), 0);
    return total;
}

function getTodoChildren(todos, parentId) {
    return todos.filter(todo => todo.parentId === parentId);
}

function calculateChildrenAmount(todos, parentId) {
    const children = getTodoChildren(todos, parentId);
    return children.reduce((sum, child) => {
        const childAmount = child.amount || 0;
        const descendantAmount = calculateChildrenAmount(todos, child.id);
        return sum + childAmount + descendantAmount;
    }, 0);
}

function getAllDescendants(todos, parentId) {
    const children = getTodoChildren(todos, parentId);
    let descendants = [...children];
    children.forEach(child => {
        descendants = descendants.concat(getAllDescendants(todos, child.id));
    });
    return descendants;
}

function canToggleTodo(todos, todoId, completed) {
    if (completed) {
        return true;
    }

    const children = getTodoChildren(todos, todoId);
    if (children.length === 0) {
        return true;
    }

    const allChildrenCompleted = children.every(child => child.completed);
    if (!allChildrenCompleted) {
        alert('Impossible de cocher cette tâche : veuillez d\'abord cocher toutes les sous-tâches');
        return false;
    }
    return true;
}

function renderTodos(projectId) {
    console.log(`🎨 renderTodos appelé pour ${projectId}`);
    const project = projects[projectId];
    const todos = loadTodos(projectId);
    console.log(`📊 ${projectId}: ${todos.length} tâches trouvées`);
    const listsContainer = document.getElementById(projectId + '-lists');
    const emptyState = document.getElementById(projectId + '-empty');

    if (!listsContainer) {
        console.error(`❌ Container ${projectId}-lists introuvable !`);
        return;
    }

    if (todos.length === 0) {
        console.log(`ℹ️ ${projectId}: Aucune tâche, affichage état vide`);
        listsContainer.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    const todosByList = {};
    todos.forEach(todo => {
        if (!todosByList[todo.list]) todosByList[todo.list] = [];
        todosByList[todo.list].push(todo);
    });

    const renderTodoHierarchy = (todo, allTodos, depth = 0) => {
        const children = getTodoChildren(allTodos, todo.id);
        const hasChildren = children.length > 0;
        const childrenAmount = hasChildren ? calculateChildrenAmount(allTodos, todo.id) : 0;
        const totalAmount = (todo.amount || 0) + childrenAmount;
        const hasDetails = todo.link || todo.note || todo.amount;
        
        // Définir la couleur de fond selon la priorité (pour les tâches non complétées)
        let priorityClass = '';
        if (!todo.completed) {
            if (todo.priority === 'low') priorityClass = 'priority-low';
            else if (todo.priority === 'medium') priorityClass = 'priority-medium';
            else if (todo.priority === 'high') priorityClass = 'priority-high';
        }

        return `
            <div class="todo-item ${todo.completed ? 'completed' : priorityClass}"
                 draggable="true"
                 style="margin-left: ${depth * 20}px;"
                 ondragstart="startTodoDrag(event, '${projectId}', '${escapeHtml(todo.list)}', ${todo.id})"
                 ondragover="overTodoDrag(event)"
                 ondrop="dropTodo(event, '${projectId}', '${escapeHtml(todo.list)}', ${todo.id})"
                 ondragleave="leaveTodoDrag(event)"
                 ondragend="endTodoDrag(event)">
                <div class="todo-row">
                    <div class="todo-header" onclick="toggleTodoExpand(event, '${projectId}', ${todo.id})" style="cursor: ${hasDetails ? 'pointer' : 'default'};">
                        <input type="checkbox" ${todo.completed ? 'checked' : ''}
                               onchange="toggleTodo('${projectId}', ${todo.id})" onclick="event.stopPropagation();">
                        <span class="todo-name">${escapeHtml(todo.name)}</span>
                    </div>
                    <div class="todo-actions">
                        ${todo.link ? `<a href="${escapeHtml(todo.link)}" target="_blank" title="Ouvrir le lien" class="btn-icon" onclick="event.stopPropagation();"><i class="fas fa-link"></i></a>` : ''}
                        ${todo.note ? `<button onclick="event.stopPropagation();" title="Voir la note" class="btn-icon" style="pointer-events: none;"><i class="fas fa-sticky-note"></i></button>` : ''}
                        <button onclick="openEditModal('${projectId}', ${todo.id}); event.stopPropagation();" title="Éditer" class="btn-icon"><i class="fas fa-edit"></i></button>
                        <button onclick="deleteTodo('${projectId}', ${todo.id}); event.stopPropagation();" title="Supprimer" class="btn-icon"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                ${hasDetails ? `
                <div class="todo-details" style="display: none; padding: 10px 0 0 30px; font-size: 13px; line-height: 1.6;">
                    ${todo.note ? `<div style="color: #666; margin-bottom: 8px;">${escapeHtml(todo.note)}</div>` : ''}
                    ${todo.amount ? `<div style="color: #888; font-size: 12px; margin-bottom: 4px;">Montant : ${todo.amount.toFixed(2)}€${hasChildren ? ` (+${childrenAmount.toFixed(2)}€ enfants = ${totalAmount.toFixed(2)}€ total)` : ''}</div>` : ''}
                    ${todo.link ? `<div style="font-size: 12px;"><a href="${escapeHtml(todo.link)}" target="_blank" style="color: #667eea; text-decoration: none;">🔗 ${escapeHtml(todo.link)}</a></div>` : ''}
                </div>` : ''}
            </div>
            ${hasChildren ? children.map(child => renderTodoHierarchy(child, allTodos, depth + 1)).join('') : ''}
        `;
    };

    listsContainer.innerHTML = Object.entries(todosByList).map(([listName, listTodos]) => {
        const rootTodos = listTodos.filter(todo => !todo.parentId);
        const estimate = calculateListEstimate(listTodos);

        return `
            <div class="list-section" draggable="true" data-list-name="${escapeHtml(listName)}"
                 ondragstart="startListDrag(event, '${projectId}', '${escapeHtml(listName)}')"
                 ondragover="overListDrag(event)"
                 ondrop="dropList(event, '${projectId}')"
                 ondragleave="leaveListDrag(event)"
                 ondragend="endListDrag(event)">
                <div class="list-header" onclick="toggleListCollapse(event, this)">
                    <div class="list-header-left">
                        <span class="list-toggle-icon"><i class="fas fa-chevron-down"></i></span>
                        <span>${escapeHtml(listName)}</span>
                    </div>
                    <div class="list-stats">
                        <span class="list-count">${listTodos.length} tâche${listTodos.length > 1 ? 's' : ''}</span>
                        <span class="list-estimate">Dépensé ${estimate > 0 ? estimate.toFixed(2) + '€' : '0€'}</span>
                    </div>
                </div>
                <div class="list-items">
                    ${rootTodos.map(todo => renderTodoHierarchy(todo, listTodos, 0)).join('')}
                </div>
            </div>
        `;
    }).join('');
}



function toggleTodoExpand(event, projectId, todoId) {
    if (event.target.closest('.todo-actions')) return;
    if (event.target.tagName === 'INPUT') return;

    const todoItem = event.target.closest('.todo-item');
    if (!todoItem) return;

    const details = todoItem.querySelector('.todo-details');
    const icon = todoItem.querySelector('.todo-expand-icon');
    
    if (details) {
        const isOpen = details.style.display !== 'none';
        details.style.display = isOpen ? 'none' : 'block';
        if (icon) {
            icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    }
}

let draggedListName = null;

function startListDrag(event, projectId, listName) {
    draggedListName = listName;
    event.currentTarget.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';
}

function overListDrag(event) {
    event.preventDefault();
    event.currentTarget.classList.add('drag-over');
    event.dataTransfer.dropEffect = 'move';
}

function leaveListDrag(event) {
    event.currentTarget.classList.remove('drag-over');
}

function dropList(event, projectId) {
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');

    if (!draggedListName) return;

    const todos = loadTodos(projectId);
    const targetListName = event.currentTarget.dataset.listName;

    if (draggedListName === targetListName) return;

    draggedListName = null;
}

function endListDrag(event) {
    event.currentTarget.classList.remove('dragging');
    draggedListName = null;
}

function toggleListCollapse(event, header) {
    if (event.target.closest('.list-toggle-icon') || event.currentTarget === header) {
        const section = header.closest('.list-section');
        section.classList.toggle('collapsed');
    }
}

let draggedTodoId = null;
let draggedTodoList = null;
let draggedProjectId = null;

function startTodoDrag(event, projectId, listName, todoId) {
    draggedTodoId = todoId;
    draggedTodoList = listName;
    draggedProjectId = projectId;
    event.currentTarget.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';
}

function overTodoDrag(event) {
    event.preventDefault();
    if (event.currentTarget.classList.contains('todo-item')) {
        event.currentTarget.classList.add('drag-over');
    }
    event.dataTransfer.dropEffect = 'move';
}

function leaveTodoDrag(event) {
    if (event.currentTarget.classList.contains('todo-item')) {
        event.currentTarget.classList.remove('drag-over');
    }
}

function dropTodo(event, projectId, targetListName, targetTodoId) {
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');

    if (draggedTodoId === null || draggedProjectId !== projectId) return;
    if (draggedTodoId === targetTodoId) return;

    const todos = loadTodos(projectId);
    const draggedTodo = todos.find(t => t.id === draggedTodoId);
    const targetTodo = todos.find(t => t.id === targetTodoId);

    if (!draggedTodo || !targetTodo) return;

    const descendants = getAllDescendants(todos, draggedTodoId);
    if (descendants.some(d => d.id === targetTodoId)) {
        alert('Impossible : une tâche ne peut pas être le parent d\'une de ses tâches parentes.');
        draggedTodoId = null;
        draggedTodoList = null;
        draggedProjectId = null;
        return;
    }

    if (draggedTodoList === targetListName && draggedTodoId !== targetTodoId) {
        const confirmation = confirm(`Faire de "${escapeHtml(targetTodo.name)}" la tâche parente de "${escapeHtml(draggedTodo.name)}" ?`);

        if (confirmation) {
            draggedTodo.parentId = targetTodoId;
            saveTodos(projectId, todos);
            renderTodos(projectId);
        } else {
            const draggedIndex = todos.findIndex(t => t.id === draggedTodoId);
            const targetIndex = todos.findIndex(t => t.id === targetTodoId);

            if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
                todos.splice(draggedIndex, 1);
                todos.splice(targetIndex, 0, draggedTodo);
                saveTodos(projectId, todos);
                renderTodos(projectId);
            }
        }
    } else if (draggedTodoList !== targetListName) {
        draggedTodo.list = targetListName;
        draggedTodo.parentId = null;
        saveTodos(projectId, todos);
        renderTodos(projectId);
    }

    draggedTodoId = null;
    draggedTodoList = null;
    draggedProjectId = null;
}

function endTodoDrag(event) {
    event.currentTarget.classList.remove('dragging');
    draggedTodoId = null;
    draggedTodoList = null;
    draggedProjectId = null;
}

window.switchTab = switchTab;
window.addTodo = addTodo;
window.saveTodos = saveTodos;
window.loadTodos = loadTodos;
window.renderTodos = renderTodos;
window.deleteTodo = deleteTodo;
window.toggleTodo = toggleTodo;
window.openEditModal = openEditModal;
window.closeEditModal = closeEditModal;
window.saveEditModal = saveEditModal;
window.openJsonImportModal = openJsonImportModal;
window.closeJsonImportModal = closeJsonImportModal;
window.handleJsonImportSelect = handleJsonImportSelect;
window.exportTodos = exportTodos;
window.importTodos = importTodos;
window.openImageImportModal = openImageImportModal;
window.closeImageImportModal = closeImageImportModal;
window.handleImageSelect = handleImageSelect;
window.parseTodoListFromText = parseTodoListFromText;
window.displayTodoPreview = displayTodoPreview;
window.importFromImage = importFromImage;
window.openListModal = openListModal;
window.updateListSelect = updateListSelect;
window.selectPriority = selectPriority;
window.toggleAccordion = toggleAccordion;
window.startTodoDrag = startTodoDrag;
window.overTodoDrag = overTodoDrag;
window.leaveTodoDrag = leaveTodoDrag;
window.dropTodo = dropTodo;
window.startListDrag = startListDrag;
window.overListDrag = overListDrag;
window.leaveListDrag = leaveListDrag;
window.dropList = dropList;
window.endListDrag = endListDrag;
window.endTodoDrag = endTodoDrag;
window.toggleListCollapse = toggleListCollapse;
window.generateShareCode = generateShareCode;
window.getAllApplicationData = getAllApplicationData;
window.saveShareCode = saveShareCode;
window.loadShareCode = loadShareCode;
window.openSyncModal = openSyncModal;
window.closeSyncModal = closeSyncModal;
window.copySyncCode = copySyncCode;
window.syncWithCode = syncWithCode;

document.addEventListener('DOMContentLoaded', () => {
    console.log('🔵 Page chargée - Affichage des todos depuis localStorage');

    ['forkx', 'geekomobile', 'geekagne'].forEach(projectId => {
        updateListSelect(projectId);
        renderTodos(projectId);
        document.querySelectorAll(`#${projectId}-tab .priority-btn[data-priority="medium"]`).forEach(b => b.classList.add('selected'));
    });

    switchTab('forkx');
    console.log('✅ Interface chargée - Onglet ForkX activé');
});
