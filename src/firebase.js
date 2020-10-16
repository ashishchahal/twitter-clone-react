import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4JCtCkPd7XH6vu1m-ZcO_6-h4o01HwU8",
    authDomain: "twitter-clone-react-bdac7.firebaseapp.com",
    databaseURL: "https://twitter-clone-react-bdac7.firebaseio.com",
    projectId: "twitter-clone-react-bdac7",
    storageBucket: "twitter-clone-react-bdac7.appspot.com",
    messagingSenderId: "1068176513115",
    appId: "1:1068176513115:web:eb5d83cf2f88d5f3d5477e",
    measurementId: "G-3P1QMK9VR3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;