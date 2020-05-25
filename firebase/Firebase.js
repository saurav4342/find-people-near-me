import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAJiwOb94P2aRQN0vtE-cGNsr2EmKyI0mI",
    authDomain: "friends-app-3c0e0.firebaseapp.com",
    databaseURL: "https://friends-app-3c0e0.firebaseio.com",
    projectId: "friends-app-3c0e0",
    storageBucket: "friends-app-3c0e0.appspot.com",
    messagingSenderId: "138696330582",
    appId: "1:138696330582:web:5d1ca93dae907a5845daf7",
    measurementId: "G-Y0NSSEHQE2"
  };
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;

  export const db = firebase.database();

 