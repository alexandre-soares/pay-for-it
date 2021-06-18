import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA9f9Ot0ygv0GLjXclHBTK-Hr6MToB6ASU",
  authDomain: "vuejs-invoice-app.firebaseapp.com",
  projectId: "vuejs-invoice-app",
  storageBucket: "vuejs-invoice-app.appspot.com",
  messagingSenderId: "283717958558",
  appId: "1:283717958558:web:6e0d0f900849d57714748f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();