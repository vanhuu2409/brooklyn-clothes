// import * as firebase from "firebase";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZWok7OYBB7KG6dCyS5KzTTXHweiRtZz4",
  authDomain: "brooklyn-ecommerce-5e4f5.firebaseapp.com",
  projectId: "brooklyn-ecommerce-5e4f5",
  storageBucket: "brooklyn-ecommerce-5e4f5.appspot.com",
  messagingSenderId: "232347837944",
  appId: "1:232347837944:web:26b185b00ac768854fa20d",
  measurementId: "G-53M7XFE46Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
