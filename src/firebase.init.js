// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkVTU5Z96s5AyRRw9-Gy60UhUrUWb9v2U",
  authDomain: "chapai-matchmaking.firebaseapp.com",
  projectId: "chapai-matchmaking",
  storageBucket: "chapai-matchmaking.appspot.com",
  messagingSenderId: "895178488051",
  appId: "1:895178488051:web:a3bb13b1fccf95199a5f86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;