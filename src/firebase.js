// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDucnKp4_ocQh3pQaUkRDPoOPtiiTv7X50",
  authDomain: "realtor-clone-react-31730.firebaseapp.com",
  projectId: "realtor-clone-react-31730",
  storageBucket: "realtor-clone-react-31730.appspot.com",
  messagingSenderId: "836304302045",
  appId: "1:836304302045:web:1dbbbfe1c4f082f3cbd034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();