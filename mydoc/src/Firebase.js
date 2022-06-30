import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhWXdcTQC6oJH-Re2Rn1PGJigYvlXC1SQ",
    authDomain: "mydoc-30513.firebaseapp.com",
    projectId: "mydoc-30513",
    storageBucket: "mydoc-30513.appspot.com",
    messagingSenderId: "319115149057",
    appId: "1:319115149057:web:f5be4b8f1f7c2b60372500",
    measurementId: "G-X4S3LTWLJ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
  
export { auth, provider };
export default db;