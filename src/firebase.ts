import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeudq7kNL0NzHZKDthknc7UC0QFCzxr5Y",
  authDomain: "portfolio-admin-4a3bd.firebaseapp.com",
  projectId: "portfolio-admin-4a3bd",
  storageBucket: "portfolio-admin-4a3bd.firebasestorage.app",
  messagingSenderId: "803002632579",
  appId: "1:803002632579:web:e2097d3ddc6add99360eb6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
