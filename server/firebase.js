// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import "firebase/firestore";
// import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzPzP5zNkKNi2vJfEO9WnipDqm4jozYwU",
  authDomain: "portfolio-reactv1.firebaseapp.com",
  projectId: "portfolio-reactv1",
  storageBucket: "portfolio-reactv1.appspot.com",
  messagingSenderId: "807016394648",
  appId: "1:807016394648:web:be88ece5e5c1fd6b0cc5ed",
  measurementId: "G-C0QVSCN75D",
  databaseURL:
    "https://portfolio-reactv1-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(app);

export const MarkerRef = db.collection("markers");

export default MarkerRef;
