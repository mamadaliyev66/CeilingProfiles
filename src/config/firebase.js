import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyAbLu4ulIVAHLEwbkZ3H4GzZUHpFerp8YQ",
  authDomain: "ceilingswebapp.firebaseapp.com",
  projectId: "ceilingswebapp",
  storageBucket: "ceilingswebapp.appspot.com",
  messagingSenderId: "1087937962030",
  appId: "1:1087937962030:web:1a0842a4b3a77fb89dffbf",
  measurementId: "G-ZP4Y0D7ZSR"


};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage(app);

const app2=firebase.initializeApp(firebaseConfig)
const firestore = app2.firestore();

const auth = getAuth(app)

export { auth, storage,firestore, firebase ,app,db};