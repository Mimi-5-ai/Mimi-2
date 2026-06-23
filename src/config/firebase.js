import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdx9HBs69kZiU2y_JBHQTQaLKWFYbbRk4",
  authDomain: "mimi-soul.firebaseapp.com",
  projectId: "mimi-soul",
  storageBucket: "mimi-soul.firebasestorage.app",
  messagingSenderId: "175898088236",
  appId: "1:175898088236:web:1d282971d91dbcbe785289",
  measurementId: "G-L5CD64846Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);