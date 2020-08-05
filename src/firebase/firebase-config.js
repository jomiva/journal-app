import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoocuEYPGY5uVyi7C0cCy1D1Cd1Uzg6Hs",
  authDomain: "react-app-curso-96215.firebaseapp.com",
  databaseURL: "https://react-app-curso-96215.firebaseio.com",
  projectId: "react-app-curso-96215",
  storageBucket: "react-app-curso-96215.appspot.com",
  messagingSenderId: "482921909151",
  appId: "1:482921909151:web:a204997fcb5af8a65bcbaa",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
