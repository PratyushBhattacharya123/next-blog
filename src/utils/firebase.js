// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-project-413608.firebaseapp.com",
  projectId: "blog-project-413608",
  storageBucket: "blog-project-413608.appspot.com",
  messagingSenderId: "545450744786",
  appId: "1:545450744786:web:1ec1d11bb798e6b63f860b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
