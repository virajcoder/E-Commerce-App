// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmDgP_dwj-cC2Smf4ypwjBv9ovHDkBoxs",
  authDomain: "v-bey-c5ff9.firebaseapp.com",
  projectId: "v-bey-c5ff9",
  storageBucket: "v-bey-c5ff9.appspot.com",
  messagingSenderId: "931663418673",
  appId: "1:931663418673:web:e7a7772b5d4f5a0b2f0c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const db=getFirestore(app);

export default app;