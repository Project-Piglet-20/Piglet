import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwAG0HSvza4q_hEqxkwR0NmgS60PVnWbg",
    authDomain: "piglet-9d94f.firebaseapp.com",
    databaseURL: "https://piglet-9d94f.firebaseio.com",
    projectId: "piglet-9d94f",
    storageBucket: "piglet-9d94f.appspot.com",
    messagingSenderId: "850329957603",
    appId: "1:850329957603:web:da07f78574f82bab92c1d6",
    measurementId: "G-PS30013RJC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


export default firebase;