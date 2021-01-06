import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqCNdYStQVcmjiQ6o2c2tqm4Q1GVsVuyU",
    authDomain: "twitter-clone-ab831.firebaseapp.com",
    projectId: "twitter-clone-ab831",
    storageBucket: "twitter-clone-ab831.appspot.com",
    messagingSenderId: "983446521443",
    appId: "1:983446521443:web:9a4b1d74e64adaf45b9a56",
    measurementId: "G-DSNV5EXFY2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;