// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2KydG0NPrWlmPIJoH1Tpf3v3yaZ4I8FI",
  authDomain: "netflix-clone-210e5.firebaseapp.com",
  projectId: "netflix-clone-210e5",
  storageBucket: "netflix-clone-210e5.appspot.com",
  messagingSenderId: "845579917633",
  appId: "1:845579917633:web:32e5577b12b08a1237e9c0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }