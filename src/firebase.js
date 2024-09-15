// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdujspBmDBsPlFd0Z8xNWLxRDDCQWec08",
  authDomain: "chatappreact-b5a21.firebaseapp.com",
  projectId: "chatappreact-b5a21",
  storageBucket: "chatappreact-b5a21.appspot.com",
  messagingSenderId: "812901886224",
  appId: "1:812901886224:web:c81908dc6258459415dd95",
  measurementId: "G-SES4D1KFSN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

