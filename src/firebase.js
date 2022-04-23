import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCUgkHFDYIJ7W8VDXIw6iRqOKH53fs0krA",
  authDomain: "meal-plan-40f06.firebaseapp.com",
  projectId: "meal-plan-40f06",
  storageBucket: "meal-plan-40f06.appspot.com",
  messagingSenderId: "605162601038",
  appId: "1:605162601038:web:77661cc7ef897e0d81211f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

const googleProvider = new GoogleAuthProvider()                            

export { db, auth, googleProvider, app }  
