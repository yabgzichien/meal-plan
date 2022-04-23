import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {

  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

const googleProvider = new GoogleAuthProvider()                            

export { db, auth, googleProvider, app }  
