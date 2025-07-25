// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBND4yYrFPFhs4wr2JPMfu38DY2Mb1z7ic",
  authDomain: "vocalhire-ai.firebaseapp.com",
  projectId: "vocalhire-ai",
  storageBucket: "vocalhire-ai.firebasestorage.app",
  messagingSenderId: "876840699155",
  appId: "1:876840699155:web:d5978e4825d493f10b06e6",
  measurementId: "G-YLRY0YLSXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);