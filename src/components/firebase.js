/** @format */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfuGNf58B2sx8KvEdRHYM6pIS1Wo0axhw",
  authDomain: "slack-35c43.firebaseapp.com",
  projectId: "slack-35c43",
  storageBucket: "slack-35c43.appspot.com",
  messagingSenderId: "227393864184",
  appId: "1:227393864184:web:2d0df3dcf8dae6f345560d",
  measurementId: "G-9FT4X671KB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

const provider = new GoogleAuthProvider();
export { auth, provider, db };
