// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFaKMhJbhCKwS314B60hFD4jNXEjZ6Q2w",
  authDomain: "toy-zone-bd.firebaseapp.com",
  projectId: "toy-zone-bd",
  storageBucket: "toy-zone-bd.appspot.com",
  messagingSenderId: "166211347374",
  appId: "1:166211347374:web:8b2396167a8623a956de3f",
  measurementId: "G-PPZEKV21F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;