// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxiL-qTVAzWzq0uIz7fILGSGM-y1xgXuM",
  authDomain: "spacetec24.firebaseapp.com",
  projectId: "spacetec24",
  storageBucket: "spacetec24.firebasestorage.app",
  messagingSenderId: "193499103126",
  appId: "1:193499103126:web:1187bcae32568f894c27b7",
  measurementId: "G-6V7GRHR5S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);