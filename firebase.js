import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBv9ahL7sx2RlZeUetNMwDsAUqYLYwLJZM",
    authDomain: "todo-app-74f3b.firebaseapp.com",
    projectId: "todo-app-74f3b",
    storageBucket: "todo-app-74f3b.appspot.com",
    messagingSenderId: "175462209023",
    appId: "1:175462209023:web:f7658d3a197700a4ab43ca",
    measurementId: "G-3F14J4W9M3"
})
const db=firebaseApp.firestore();

export default db;