// Import the functions you need from the SDKs you need
import { Firestore } from "firebase/firestore/lite";
import firebase from './firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW6lbvWq_nWJjgPfFbZLfSOVAAvxFt8LU",
  authDomain: "jobi-9c642.firebaseapp.com",
  projectId: "jobi-9c642",
  storageBucket: "jobi-9c642.appspot.com",
  messagingSenderId: "471643587222",
  appId: "1:471643587222:web:cac0e0b4367ea4b13d78b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//getTitles();
// const db = firebase.getFirestore(app);

//console.log(db);


async function getJobs() {
  const jobCol = collection(db, 'Jobs');
  const jobSnapshot = await getDocs(jobCol);
  const jobList = jobSnapshot.docs.map(doc => doc.data());
 //console.log(jobList);
  return jobList;
}
  export default getJobs;