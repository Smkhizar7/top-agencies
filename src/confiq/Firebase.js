import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { 
    getFirestore,
    collection,
    doc,
    setDoc,
    query, 
    where, 
    onSnapshot,
    updateDoc
} from "firebase/firestore"; 

// const firebaseConfig = {
//     apiKey: "AIzaSyDK1HKGdtqlsdT5w7GgM2fNl5MLPu9YFOE",
//     authDomain: "top-agencies.firebaseapp.com",
//     projectId: "top-agencies",
//     storageBucket: "top-agencies.appspot.com",
//     messagingSenderId: "618240086298",
//     appId: "1:618240086298:web:aebfd4e7bad8f7fd1e1ca3",
//     measurementId: "G-3WETD6VBY0"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAQkoieI6ev5xTRtedLrwEtds7NITCejng",
    authDomain: "top-agencies-72f51.firebaseapp.com",
    projectId: "top-agencies-72f51",
    storageBucket: "top-agencies-72f51.appspot.com",
    messagingSenderId: "469568935854",
    appId: "1:469568935854:web:5e779039689b1795961a3f",
    measurementId: "G-1F5G2PZYMV"
  };
initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth();
export { 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    collection,
    doc,
    setDoc,
    query, 
    where, 
    onSnapshot,
    updateDoc
};