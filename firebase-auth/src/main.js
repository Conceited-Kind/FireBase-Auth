import './style.css';
import { signUpWithEmail, signInWithEmail, signInWithGoogle } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Render the login form
  const renderLoginForm = () => {
    app.innerHTML = `
      <div id="auth-container">
        <h1>Firebase-Auth-Demo</h1> <!-- Updated heading -->
        <form id="signin-form">
          <label for="signin-email">Email Address:</label>
          <input type="email" id="signin-email" placeholder="Enter your email" required />

          <label for="signin-password">Password:</label>
          <input type="password" id="signin-password" placeholder="Enter your password" required />

          <label>
            <input type="checkbox" id="remember-me"> Remember Me
          </label>

          <button type="submit" id="login-btn">Login</button>
        </form>

        <button id="google-signin">Sign in with Google</button>

        <p id="auth-status"></p>
        <p>Don't have an account? <a href="#" id="signup-link">Sign up</a></p>
        <p><a href="#" id="forgot-password">Forgot Password?</a></p>
      </div>
    `;

    // Attach event listeners for login
    const signInForm = document.getElementById('signin-form');
    const googleSignInBtn = document.getElementById('google-signin');
    const signupLink = document.getElementById('signup-link');
    const authStatus = document.getElementById('auth-status');

    signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        await signInWithEmail(email, password);
        authStatus.textContent = 'You have successfully logged in!';
        authStatus.style.color = 'green';
      } catch (error) {
        authStatus.textContent = `Error: ${error.message}`;
        authStatus.style.color = 'red';
      }
    });

    googleSignInBtn.addEventListener('click', async () => {
      try {
        await signInWithGoogle();
        authStatus.textContent = 'You have successfully logged in with Google!';
        authStatus.style.color = 'green';
      } catch (error) {
        authStatus.textContent = `Error: ${error.message}`;
        authStatus.style.color = 'red';
      }
    });

    signupLink.addEventListener('click', (e) => {
      e.preventDefault();
      renderSignUpForm();
    });
  };

  // Render the sign-up form
  const renderSignUpForm = () => {
    app.innerHTML = `
      <div id="auth-container">
        <h1>Sign Up</h1>
        <form id="signup-form">
          <label for="signup-email">Email Address:</label>
          <input type="email" id="signup-email" placeholder="Enter your email" required />

          <label for="signup-password">Password:</label>
          <input type="password" id="signup-password" placeholder="Enter your password" required />

          <button type="submit" id="signup-btn">Sign Up</button>
        </form>

        <p id="auth-status"></p>
        <p>Already have an account? <a href="#" id="login-link">Login</a></p>
      </div>
    `;

    // Attach event listeners for sign-up
    const signUpForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');
    const authStatus = document.getElementById('auth-status');

    signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const password = document.getElementById('signup-password').value;
      if (password.length < 6) {
        authStatus.textContent = 'Password must be at least 6 characters long.';
        authStatus.style.color = 'red';
        return;
      }
      try {
        const email = document.getElementById('signup-email').value;
        await signUpWithEmail(email, password);
        authStatus.textContent = 'You have successfully signed up!';
        authStatus.style.color = 'green';
      } catch (error) {
        authStatus.textContent = `Error: ${error.message}`;
        authStatus.style.color = 'red';
      }
    });

    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      renderLoginForm();
    });
  };

  renderLoginForm();
});