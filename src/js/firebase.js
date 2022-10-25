import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEG2oPobv02jKbTkA-VuYXbdlXCKRNKC8",
  authDomain: "jeildc-da954.firebaseapp.com",
  projectId: "jeildc-da954",
  storageBucket: "jeildc-da954.appspot.com",
  messagingSenderId: "230734112603",
  appId: "1:230734112603:web:4317a4a4ae47c023c8dc7e"
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }

