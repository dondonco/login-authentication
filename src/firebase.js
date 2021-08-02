import firebase
 from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAdPuLiPuUjxVnwos4bknQcW7tQLZbNCFU",
    authDomain: "login-with-authenticatio-d5289.firebaseapp.com",
    projectId: "login-with-authenticatio-d5289",
    storageBucket: "login-with-authenticatio-d5289.appspot.com",
    messagingSenderId: "227015508093",
    appId: "1:227015508093:web:29a766354cb6033ff43114"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth};
