import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDK1HKGdtqlsdT5w7GgM2fNl5MLPu9YFOE",
    authDomain: "top-agencies.firebaseapp.com",
    projectId: "top-agencies",
    storageBucket: "top-agencies.appspot.com",
    messagingSenderId: "618240086298",
    appId: "1:618240086298:web:aebfd4e7bad8f7fd1e1ca3",
    measurementId: "G-3WETD6VBY0"
};

initializeApp(firebaseConfig)

const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };