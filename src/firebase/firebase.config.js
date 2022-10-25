// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnMiR9hQJihan7SXSPWmm_euFqOVYFYjE",
  authDomain: "tech-learning-mate.firebaseapp.com",
  projectId: "tech-learning-mate",
  storageBucket: "tech-learning-mate.appspot.com",
  messagingSenderId: "870361388381",
  appId: "1:870361388381:web:b4ad38f4e28954df7184b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;