// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNfEhQK_2-FDS8QMJNg8dboZ6AB5Xm9ZI",
  authDomain: "task-management-web-app-25360.firebaseapp.com",
  projectId: "task-management-web-app-25360",
  storageBucket: "task-management-web-app-25360.appspot.com",
  messagingSenderId: "624409684775",
  appId: "1:624409684775:web:14809f03e211037e2cd702",
  measurementId: "G-STHMFNYEY1"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)