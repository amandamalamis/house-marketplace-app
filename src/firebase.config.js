// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6tdMYV8IJTVk7RubSAJELS_iQHkV5aYU",
    authDomain: "house-marketplace-app-de0ae.firebaseapp.com",
    projectId: "house-marketplace-app-de0ae",
    storageBucket: "house-marketplace-app-de0ae.appspot.com",
    messagingSenderId: "173782797813",
    appId: "1:173782797813:web:b785f8996c61ccb2dca4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();