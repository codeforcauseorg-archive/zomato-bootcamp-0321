import firebase from "firebase";

const config = {
    apiKey: "AIzaSyA8tLuWYoJfSv0TIwx2GKh-EucL3yUK7yw",
    authDomain: "zomato-91cd4.firebaseapp.com",
    projectId: "zomato-91cd4",
    storageBucket: "zomato-91cd4.appspot.com",
    messagingSenderId: "623509549724",
    appId: "1:623509549724:web:e04b501248621cdbf9f359",
  };
  
firebase.initializeApp(config);

export default firebase;