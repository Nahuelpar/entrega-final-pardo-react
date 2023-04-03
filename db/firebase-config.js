import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi8cuVvg7ehwghGBRK9UNUmXNqIqebryA",
  authDomain: "coder-test-27a60.firebaseapp.com",
  projectId: "coder-test-27a60",
  storageBucket: "coder-test-27a60.appspot.com",
  messagingSenderId: "1024916045985",
  appId: "1:1024916045985:web:f9e7793165fbf33217b0e0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;