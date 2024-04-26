// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp_E90GBVCupk9PJ4_VCLU8FSGrx32AC8",
  authDomain: "mern-job-online-portal.firebaseapp.com",
  projectId: "mern-job-online-portal",
  storageBucket: "mern-job-online-portal.appspot.com",
  messagingSenderId: "318422714856",
  appId: "1:318422714856:web:5b6ff98d870843bd3dbc5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
