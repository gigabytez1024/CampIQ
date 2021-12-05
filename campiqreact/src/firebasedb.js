
import firebase from "firebase/compat/app";
  
var firebaseConfig = {
    // Firebase credentials
  apiKey: "AIzaSyDQ_JGRVXeudW06p1i0EDr_G1n0uknhTUQ",
  authDomain: "campiq-a7756.firebaseapp.com",
  projectId: "campiq-a7756",
  storageBucket: "campiq-a7756.appspot.com",
  messagingSenderId: "1001837774458",
  appId: "1:1001837774458:web:b7ce2cbcd4dadfc0715dc3",
  measurementId: "G-RQPG7L8RTB"
  };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;