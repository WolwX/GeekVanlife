// ============================================
// FIREBASE SYNCHRONIZATION MODULE
// ============================================
(function() {
    'use strict';
    console.log('🔥 Firebase Sync Module: Loading...');
    
    // Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyD7PUqS5GGpEuQiZhlaiwhBpiJps5K8Jec",
        authDomain: "geekvanlife.firebaseapp.com",
        projectId: "geekvanlife",
        storageBucket: "geekvanlife.firebasestorage.app",
        messagingSenderId: "808193116530",
        appId: "1:808193116530:web:26d0f44d6258e7933c75eb",
        databaseURL: "https://geekvanlife-default-rtdb.europe-west1.firebasedatabase.app"
    };
    
    // Wait for Firebase SDK to load
    function initializeFirebase() {
        if (typeof firebase === 'undefined') {
            console.error('❌ Firebase SDK not loaded');
            return false;
        }
        
        try {
            firebase.initializeApp(firebaseConfig);
            const firebaseDB = firebase.database();
            
            window.firebaseDB = firebaseDB;
            window.firebaseRef = (path) => firebaseDB.ref(path);
            window.firebaseSet = (ref, data) => ref.set(data);
            window.firebaseGet = (ref) => ref.once('value');
            window.firebaseOnValue = (ref, callback, errorCallback) => ref.on('value', callback, errorCallback);
            
            console.log('✅ Firebase initialized successfully');
            return true;
        } catch (error) {
            console.error('❌ Firebase initialization error:', error);
            return false;
        }
    }
    
    // Load data from Firebase
    window.loadDataFromFirebase = async function() {
        if (!window.firebaseDB) {
            console.warn('⚠️ Firebase not available');
            return;
        }
        
        console.log('🔄 Loading data from Firebase...');
        const projects = { forkx: 'forkx-todos', geekomobile: 'geekomobile-todos', geekagne: 'geekagne-todos' };
        
        try {
            await Promise.all(Object.keys(projects).map(async (projectId) => {
                const dbRef = window.firebaseRef(`todos/${projectId}`);
                const snapshot = await window.firebaseGet(dbRef);
                
                if (snapshot.exists()) {
                    const firebaseData = snapshot.val();
                    const remoteData = firebaseData && firebaseData.data ? firebaseData.data : [];
                    
                    if (Array.isArray(remoteData)) {
                        const storageKey = projects[projectId];
                        localStorage.setItem(storageKey, JSON.stringify(remoteData));
                        console.log(`✅ Loaded ${remoteData.length} tasks for ${projectId}`);
                    }
                }
            }));
        } catch (error) {
            console.error('❌ Error loading from Firebase:', error);
        }
    };
    
    // Watch for real-time changes
    window.watchFirebaseChanges = function() {
        if (!window.firebaseDB) return;
        
        console.log('👀 Watching Firebase for changes...');
        const projects = { forkx: 'forkx-todos', geekomobile: 'geekomobile-todos', geekagne: 'geekagne-todos' };
        
        Object.keys(projects).forEach(projectId => {
            const dbRef = window.firebaseRef(`todos/${projectId}`);
            
            window.firebaseOnValue(
                dbRef,
                (snapshot) => {
                    if (snapshot.exists()) {
                        const firebaseData = snapshot.val();
                        const remoteData = firebaseData && firebaseData.data ? firebaseData.data : [];
                        
                        if (Array.isArray(remoteData)) {
                            const storageKey = projects[projectId];
                            const localDataStr = localStorage.getItem(storageKey);
                            const localData = localDataStr ? JSON.parse(localDataStr) : [];
                            const remoteDataStr = JSON.stringify(remoteData);
                            
                            // Ne pas écraser les données locales avec des données Firebase vides
                            if (remoteData.length === 0 && localData.length > 0) {
                                console.log(`⚠️ Skipping Firebase update: remote is empty but local has ${localData.length} tasks`);
                                return;
                            }
                            
                            if (localDataStr !== remoteDataStr) {
                                localStorage.setItem(storageKey, remoteDataStr);
                                console.log(`🔄 Real-time update for ${projectId}`);
                                
                                if (typeof window.renderTodos === 'function') {
                                    window.renderTodos(projectId);
                                }
                            }
                        }
                    }
                },
                (error) => {
                    console.error(`❌ Firebase watch error for ${projectId}:`, error);
                }
            );
        });
    };
    
    // Override saveTodos to sync with Firebase
    const originalSaveTodos = window.saveTodos;
    if (originalSaveTodos) {
        window.saveTodos = function(projectId, todos) {
            originalSaveTodos(projectId, todos);
            
            if (window.firebaseDB) {
                try {
                    const dbRef = window.firebaseRef(`todos/${projectId}`);
                    window.firebaseSet(dbRef, {
                        data: todos,
                        lastUpdated: new Date().toISOString()
                    }).then(() => {
                        console.log(`📤 Synced ${projectId} to Firebase (${todos.length} tasks)`);
                    }).catch(error => {
                        console.error(`❌ Firebase sync error for ${projectId}:`, error);
                    });
                } catch (error) {
                    console.warn('⚠️ Firebase sync failed:', error);
                }
            }
        };
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (initializeFirebase()) {
                loadDataFromFirebase().then(() => {
                    // Notify that Firebase data is loaded
                    window.dispatchEvent(new Event('firebaseDataLoaded'));
                    watchFirebaseChanges();
                });
            }
        });
    } else {
        if (initializeFirebase()) {
            loadDataFromFirebase().then(() => {
                // Notify that Firebase data is loaded
                window.dispatchEvent(new Event('firebaseDataLoaded'));
                watchFirebaseChanges();
            });
        }
    }
    
    console.log('✅ Firebase Sync Module loaded');
})();
