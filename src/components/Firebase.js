import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9YA5qCBcvFjCO-qa0Smc529D9FIdmUh8",
  authDomain: "library-app-9ab4d.firebaseapp.com",
  projectId: "library-app-9ab4d",
  storageBucket: "library-app-9ab4d.appspot.com",
  messagingSenderId: "349000933696",
  appId: "1:349000933696:web:919922881c0a4415e61aa5",
};


firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export default firebase;
