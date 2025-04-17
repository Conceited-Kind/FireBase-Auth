// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHdUp4RkYQT5GUxXpWv--4O0Qyo48Ps_o",
    authDomain: "fir-auth-demo-17a54.firebaseapp.com",
    projectId: "fir-auth-demo-17a54",
    storageBucket: "fir-auth-demo-17a54.firebasestorage.app",
    messagingSenderId: "759350269194",
    appId: "1:759350269194:web:888b1d035044760aa396f3",
    measurementId: "G-GMZLG6RHGS"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
  } from "firebase/auth";
  
  // Email/Password Sign Up
  export const signUpWithEmail = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Email/Password Sign In
  export const signInWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('You have successfully logged in!');
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Google Sign In
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Sign Out
  export const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };