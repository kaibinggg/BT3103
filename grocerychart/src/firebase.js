import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCn6h9iadoQt_2OQEQK6rgNO6h5ox6TO6k",
  authDomain: "bt3103-d8043.firebaseapp.com",
  databaseURL: "https://bt3103-d8043.firebaseio.com",
  projectId: "bt3103-d8043",
  storageBucket: "bt3103-d8043.appspot.com",
  messagingSenderId: "869194002236",
  appId: "1:869194002236:web:be28e34330d3fea1c1b839",
  measurementId: "G-R9LFFK2XQ5"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;