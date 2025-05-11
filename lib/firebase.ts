// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHf1o_9MXuR3MHrhZA7NsvZQkdNgsdiPA",
  authDomain: "my-app-c37df.firebaseapp.com",
  projectId: "my-app-c37df",
  storageBucket: "my-app-c37df.firebasestorage.app",
  messagingSenderId: "90164343642",
  appId: "1:90164343642:web:7d9051e0e4f45b37bff963",
  measurementId: "G-Q8TE8BPH8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app; 