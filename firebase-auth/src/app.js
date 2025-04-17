import { 
    signUpWithEmail, 
    signInWithEmail, 
    signInWithGoogle, 
    signOutUser,
    googleSignIn
  } from "./auth.js";
import { auth } from "./firebase-config.js";
  
export const setupUI = () => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
    <h1>Firebase Authentication</h1>
    <button id="googleSignInButton">Sign in with Google</button>
  `;

  document.getElementById('googleSignInButton').addEventListener('click', async () => {
    try {
      const user = await googleSignIn();
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      alert('Failed to sign in. Please try again.');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const signUpForm = document.getElementById('signup-form');
    const signInForm = document.getElementById('signin-form');
    const googleSignInBtn = document.getElementById('google-signin');
    const signOutBtn = document.getElementById('signout-btn');
    const authStatus = document.getElementById('auth-status');
    const userEmail = document.getElementById('user-email');
  
    // Check auth state
    auth.onAuthStateChanged((user) => {
      if (user) {
        authStatus.textContent = 'Signed in';
        userEmail.textContent = user.email;
        signUpForm.style.display = 'none';
        signInForm.style.display = 'none';
        signOutBtn.style.display = 'block';
        googleSignInBtn.style.display = 'none';
      } else {
        authStatus.textContent = 'Signed out';
        userEmail.textContent = '';
        signUpForm.style.display = 'block';
        signInForm.style.display = 'block';
        signOutBtn.style.display = 'none';
        googleSignInBtn.style.display = 'block';
      }
    });
  
    // Sign Up with Email/Password
    signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = signUpForm['signup-email'].value;
      const password = signUpForm['signup-password'].value;
      
      try {
        await signUpWithEmail(email, password);
        alert('Account created successfully!');
      } catch (error) {
        alert(`Sign up error: ${error.message}`);
      }
    });
  
    // Sign In with Email/Password
    signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = signInForm['signin-email'].value;
      const password = signInForm['signin-password'].value;
      
      try {
        await signInWithEmail(email, password);
      } catch (error) {
        alert(`Sign in error: ${error.message}`);
      }
    });
  
    // Sign In with Google
    googleSignInBtn.addEventListener('click', async () => {
      try {
        await signInWithGoogle();
      } catch (error) {
        alert(`Google sign in error: ${error.message}`);
      }
    });
  
    // Sign Out
    signOutBtn.addEventListener('click', async () => {
      try {
        await signOutUser();
      } catch (error) {
        alert(`Sign out error: ${error.message}`);
      }
    });
  });