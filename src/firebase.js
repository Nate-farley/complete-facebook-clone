import { initializeApp } from 'firebase/app';


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAsptm551ffRcg7uSIJciaCi0-18CgKviY",
  authDomain: "facebook-clone-48a01.firebaseapp.com",
  databaseURL: "https://facebook-clone-48a01-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-48a01",
  storageBucket: "facebook-clone-48a01.appspot.com",
  messagingSenderId: "633473105012",
  appId: "1:633473105012:web:72c63920c057d1d9602521",
  measurementId: "G-9MZKE8VF5K"

};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);




export { auth };
export default db;