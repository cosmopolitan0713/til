import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBx5CNbkY4Ku97mUpWUp9bfFwL6K-YICBI",
  authDomain: "line-clone-938c2.firebaseapp.com",
  projectId: "line-clone-938c2",
  storageBucket: "line-clone-938c2.appspot.com",
  messagingSenderId: "121010589821",
  appId: "1:121010589821:web:2afa6194d35ff4bc3ba114"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
