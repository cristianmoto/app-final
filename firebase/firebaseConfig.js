import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJWXK__7LVmmAky2M5OX1rei2_8cOCoKQ",
  authDomain: "final-app-d982e.firebaseapp.com",
  databaseURL: "https://final-app-d982e-default-rtdb.firebaseio.com",
  projectId: "final-app-d982e",
  storageBucket: "final-app-d982e.appspot.com",
  messagingSenderId: "54255965377",
  appId: "1:54255965377:web:c95d3e0e33d489ed4a3040"
};
  


initializeApp(firebaseConfig);
export default db = getFirestore();