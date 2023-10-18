// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9lelVtygGutMzI-KMpaGntwYgiZAoXhc",
  authDomain: "fashion-hub-client.firebaseapp.com",
  projectId: "fashion-hub-client",
  storageBucket: "fashion-hub-client.appspot.com",
  messagingSenderId: "1049506241542",
  appId: "1:1049506241542:web:e5d75e703b78ac6de2f787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;