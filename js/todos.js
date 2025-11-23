                            endTodoDrag(event) { event.currentTarget.classList.remove('dragging'); draggedTodoId=null;
                            draggedTodoList=null; draggedProjectId=null; } // Exposer les fonctions au scope global pour
                            les appels onclick HTML window.switchTab=switchTab; window.addTodo=addTodo;
                            window.saveTodos=saveTodos; window.loadTodos=loadTodos; window.renderTodos=renderTodos;
                            window.editTodo=editTodo; window.deleteTodo=deleteTodo; window.toggleTodo=toggleTodo;
                            window.expandTodo=expandTodo; window.openEditModal=openEditModal;
                            window.closeEditModal=closeEditModal; window.saveTodoEdit=saveTodoEdit;
                            window.openJsonImportModal=openJsonImportModal;
                            window.closeJsonImportModal=closeJsonImportModal; window.importJsonTodos=importJsonTodos;
                            window.exportTodos=exportTodos; window.openImageImportModal=openImageImportModal;
                            window.closeImageImportModal=closeImageImportModal; window.openListModal=openListModal;
                            window.updateListSelect=updateListSelect; window.selectPriority=selectPriority;
                            window.toggleAccordion=toggleAccordion; window.dragStartTodo=dragStartTodo;
                            window.dragOverTodo=dragOverTodo; window.dragOverList=dragOverList;
                            window.dragOverTodoList=dragOverTodoList; window.leaveTodoDrag=leaveTodoDrag;
                            window.dropTodo=dropTodo; window.dragStartList=dragStartList;
                            window.dragOverListContainer=dragOverListContainer; window.dropList=dropList;
                            window.dropListContainer=dropListContainer; window.endListDrag=endListDrag;
                            window.endTodoDrag=endTodoDrag; window.generateShareCode=generateShareCode;
                            window.getAllApplicationData=getAllApplicationData; window.saveShareCode=saveShareCode;
                            window.loadShareCode=loadShareCode; window.openSyncModal=openSyncModal;
                            window.closeSyncModal=closeSyncModal; window.copySyncCode=copySyncCode;
                            window.syncWithCode=syncWithCode; window.watchFirebaseChanges=watchFirebaseChanges;
                            window.loadDataFromFirebase=loadDataFromFirebase;
                            document.addEventListener('DOMContentLoaded', ()=> {
                            console.log('🔵 Page chargée - Affichage des todos depuis localStorage');

                            // Charger et afficher les données de tous les projets
                            ['forkx', 'geekomobile', 'geekagne'].forEach(projectId => {
                            updateListSelect(projectId);
                            renderTodos(projectId);
                            document.querySelectorAll(`#${projectId}-tab
                            .priority-btn[data-priority="medium"]`).forEach(b => b.classList.add('selected'));
                            });
                            <div class="list-section" draggable="true" data-list-name="${escapeHtml(listName)}"
                                ondragstart="startListDrag(event, '${projectId}', '${escapeHtml(listName)}')"
                                ondragover="overListDrag(event)" ondrop="dropList(event, '${projectId}')"
                                ondragleave="leaveListDrag(event)" ondragend="endListDrag(event)">
                                <div class="list-header" onclick="toggleListCollapse(event, this)">
                                    <div class="list-header-left">
                                        <span class="list-toggle-icon"><i class="fas fa-chevron-down"></i></span>
                                        <span>${escapeHtml(listName)}</span>
                                    </div>
                                    <div class="list-stats">
                                        <span class="list-count">${listTodos.length} tâche${listTodos.length > 1 ? 's' :
                                            ''}</span>
                                        <span class="list-estimate"><i class="fas fa-calculator"></i> ≈ ${estimate > 0 ?
                                            estimate.toFixed(2) + '€' : '0€'}</span>
                                    </div>
                                </div>
                                <div class="list-items">
                                    ${rootTodos.map(todo => renderTodoHierarchy(todo, listTodos, 0)).join('')}
                                </div>
                            </div>
                            `;
                            }).join('');
                            }

                            function getHasDetails(todo) {
                            return false;
                            }

                            function toggleTodoExpand(event, projectId, todoId) {
                            // Ne pas expand si on clique sur une action
                            if (event.target.closest('.todo-actions')) return;

                            const todoElement = event.currentTarget;
                            if (getHasDetails(loadTodos(projectId).find(t => t.id === todoId))) {
                            todoElement.classList.toggle('expanded');
                            }
                            }

                            // Drag & Drop pour listes
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

                            // Réorganiser les listes (ici on pourrait implémenter une logique d'ordre)
                            // Pour maintenant, on se contente de laisser le système en place
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

                            // Drag & Drop pour tâches
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

                            // Impossible de déplacer une tâche sur elle-même
                            if (draggedTodoId === targetTodoId) return;

                            const todos = loadTodos(projectId);
                            const draggedTodo = todos.find(t => t.id === draggedTodoId);
                            const targetTodo = todos.find(t => t.id === targetTodoId);

                            if (!draggedTodo || !targetTodo) return;

                            // Vérifier si on essaie de faire d'une tâche enfant le parent de sa propre tâche parent
                            const descendants = getAllDescendants(todos, draggedTodoId);
                            if (descendants.some(d => d.id === targetTodoId)) {
                            alert('Impossible : une tâche ne peut pas être le parent d\'une de ses tâches parentes.');
                            draggedTodoId = null;
                            draggedTodoList = null;
                            draggedProjectId = null;
                            return;
                            }

                            // Si on drop sur une autre tâche dans la même liste, demander confirmation pour créer
                            relation
                            parent/enfant
                            if (draggedTodoList === targetListName && draggedTodoId !== targetTodoId) {
                            const confirmation = confirm(`Faire de "${escapeHtml(targetTodo.name)}" la tâche parente de
                            "${escapeHtml(draggedTodo.name)}" ?`);

                            if (confirmation) {
                            // Créer la relation parent/enfant
                            draggedTodo.parentId = targetTodoId;
                            saveTodos(projectId, todos);
                            renderTodos(projectId);
                            } else {
                            // Sinon, faire un simple réarrangement de positions
                            const draggedIndex = todos.findIndex(t => t.id === draggedTodoId);
                            const targetIndex = todos.findIndex(t => t.id === targetTodoId);

                            if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
                            const [movedTodo] = todos.splice(draggedIndex, 1);
                            const newIndex = draggedIndex < targetIndex ? targetIndex - 1 : targetIndex;
                                todos.splice(newIndex, 0, movedTodo); saveTodos(projectId, todos);
                                renderTodos(projectId); } } } else if (draggedTodoList !==targetListName) { //
                                Déplacement vers une liste différente draggedTodo.list=targetListName;
                                draggedTodo.parentId=null; // Réinitialiser le parent si changement de liste
                                saveTodos(projectId, todos); renderTodos(projectId); } draggedTodoId=null;
                                draggedTodoList=null; draggedProjectId=null; } function endTodoDrag(event) {
                                event.currentTarget.classList.remove('dragging'); draggedTodoId=null;
                                draggedTodoList=null; draggedProjectId=null; } // Exposer les fonctions au scope global
                                pour les appels onclick HTML window.switchTab=switchTab; window.addTodo=addTodo;
                                window.saveTodos=saveTodos; window.loadTodos=loadTodos; window.renderTodos=renderTodos;
                                window.editTodo=editTodo; window.deleteTodo=deleteTodo; window.toggleTodo=toggleTodo;
                                window.expandTodo=expandTodo; window.openEditModal=openEditModal;
                                window.closeEditModal=closeEditModal; window.saveTodoEdit=saveTodoEdit;
                                window.openJsonImportModal=openJsonImportModal;
                                window.closeJsonImportModal=closeJsonImportModal;
                                window.importJsonTodos=importJsonTodos; window.exportTodos=exportTodos;
                                window.openImageImportModal=openImageImportModal;
                                window.closeImageImportModal=closeImageImportModal; window.openListModal=openListModal;
                                window.updateListSelect=updateListSelect; window.selectPriority=selectPriority;
                                window.toggleAccordion=toggleAccordion; window.dragStartTodo=dragStartTodo;
                                window.dragOverTodo=dragOverTodo; window.dragOverList=dragOverList;
                                window.dragOverTodoList=dragOverTodoList; window.leaveTodoDrag=leaveTodoDrag;
                                window.dropTodo=dropTodo; window.dragStartList=dragStartList;
                                window.dragOverListContainer=dragOverListContainer; window.dropList=dropList;
                                window.dropListContainer=dropListContainer; window.endListDrag=endListDrag;
                                window.endTodoDrag=endTodoDrag; window.generateShareCode=generateShareCode;
                                window.getAllApplicationData=getAllApplicationData; window.saveShareCode=saveShareCode;
                                window.loadShareCode=loadShareCode; window.openSyncModal=openSyncModal;
                                window.closeSyncModal=closeSyncModal; window.copySyncCode=copySyncCode;
                                window.syncWithCode=syncWithCode; window.watchFirebaseChanges=watchFirebaseChanges;
                                window.loadDataFromFirebase=loadDataFromFirebase;
                                document.addEventListener('DOMContentLoaded', ()=> {
                                console.log('🔵 Page chargée - Affichage des todos depuis localStorage');

                                // Charger et afficher les données de tous les projets
                                ['forkx', 'geekomobile', 'geekagne'].forEach(projectId => {
                                updateListSelect(projectId);
                                renderTodos(projectId);
                                document.querySelectorAll(`#${projectId}-tab
                                .priority-btn[data-priority="medium"]`).forEach(b => b.classList.add('selected'));
                                });

                                // Activer l'onglet ForkX par défaut
                                switchTab('forkx');
                                console.log('✅ Interface chargée - Onglet ForkX activé');
                                });
                                </script>
                                <!-- Firebase SDK -->
                                <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
                                <script
                                    src="https://www.gstatic.com/firebasejs/10.7.0/firebase-database-compat.js"></script>
                                <!-- Firebase Sync Module -->
                                <script src="firebase-sync.js"></script>
                                <script src="forkx-autoload-fix.js"></script>
    <!-- JavaScript Modules -->
    <script src="js/todos-all.js"></script>
    
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-database-compat.js"></script>
    
    <!-- Firebase Sync & Fixes -->
    <script src="js/firebase-sync.js"></script>
    <script src="js/forkx-autoload-fix.js"></script>
</body>
</html>
