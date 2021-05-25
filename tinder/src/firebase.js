import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDv-FdI981VNOPhyciw2_OFHrxX6mDl4AI",
  authDomain: "tinder-d094b.firebaseapp.com",
  projectId: "tinder-d094b",
  storageBucket: "tinder-d094b.appspot.com",
  messagingSenderId: "453794139758",
  appId: "1:453794139758:web:2780c4fccfa66bc405a07f",
  measurementId: "G-Y0PK91LT26",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//export default db;
