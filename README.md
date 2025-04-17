# FireBase-Auth

# Firebase Auth Demo

This is a simple Firebase Authentication demo project that allows users to sign up, log in, and log in with Google. The project is built using Firebase Authentication, JavaScript, and HTML/CSS.

---

## Features

- **Sign Up**: Users can create a new account using their email and password.
- **Login**: Users can log in using their email and password.
- **Google Sign-In**: Users can log in using their Google account.
- **Dynamic Forms**: The app dynamically switches between login and sign-up forms.
- **Error Handling**: Displays user-friendly error messages for invalid credentials or other issues.
- **Responsive Design**: The app is styled to look good on both desktop and mobile devices.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Firebase CLI](https://firebase.google.com/docs/cli)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Conceited-Kind/FireBase-Auth.git
cd FireBase-Auth
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Firebase
- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new project or use an existing one.
- Enable **Email/Password** and **Google** sign-in providers under **Authentication** > **Sign-in method**.
- Add your app's domain (e.g., `localhost` or your Firebase Hosting domain) to the **Authorized domains** section.
- Copy your Firebase configuration and replace the placeholder values in `firebase-config.js`:
  ```javascript
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };
  ```

### 4. Build the Project
```bash
npm run build
```

### 5. Deploy to Firebase Hosting
```bash
firebase deploy
```

---

## Usage

### Local Development
To run the project locally:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production
After deploying to Firebase Hosting, visit your Firebase Hosting URL (e.g., `https://your-project-id.web.app`).

---

## File Structure

```
firebase-auth/
├── dist/                   # Production build files
├── src/                    # Source files
│   ├── auth.js             # Firebase authentication logic
│   ├── firebase-config.js  # Firebase configuration
│   ├── main.js             # Main JavaScript file
│   ├── style.css           # Styles for the app
│   └── index.html          # HTML structure
├── firebase.json           # Firebase Hosting configuration
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## Features in Detail

### Sign Up
- Users can create a new account using their email and password.
- Passwords must be at least 6 characters long.
- Displays success or error messages dynamically.

### Login
- Users can log in using their email and password.
- Displays success or error messages dynamically.

### Google Sign-In
- Users can log in using their Google account.
- Requires enabling the Google sign-in provider in the Firebase Console.

### Forgot Password (Optional)
- A placeholder for implementing password reset functionality.

---

## Technologies Used

- **Firebase Authentication**: For user authentication.
- **JavaScript**: For dynamic form rendering and event handling.
- **HTML/CSS**: For the structure and styling of the app.
- **Vite**: For building and serving the project.

---

## Known Issues

- Ensure the Firebase configuration is correct to avoid `auth/unauthorized-domain` or `auth/invalid-credential` errors.
- If the Google Sign-In popup is blocked, try testing in an incognito window or disabling browser extensions.

---

## Future Enhancements

- Add password reset functionality.
- Improve error handling with more detailed messages.
- Add user profile management (e.g., update email or password).
- Enhance the UI for better user experience.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## Author

Created by [Conceited-Kind](https://github.com/Conceited-Kind). Contributions are welcome!

---

Let me know if you need further assistance or modifications! 🚀
