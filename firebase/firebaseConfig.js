import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyCZJ8uxOaiASMxGazt9B60S8NDi0bk57aU",
  
    authDomain: "beeweather-4fc4e.firebaseapp.com",
  
    projectId: "beeweather-4fc4e",
  
    storageBucket: "beeweather-4fc4e.appspot.com",
  
    messagingSenderId: "611681207854",
  
    appId: "1:611681207854:web:deff26aa70b01562cf81bf"
  
  };
  
  


initializeApp(firebaseConfig);
export default db = getFirestore();