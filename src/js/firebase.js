import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvDrjai-pBaRBBiiYBxQSMvb7NsPZy5RA",
  authDomain: "jeildc-3a611.firebaseapp.com",
  projectId: "jeildc-3a611",
  storageBucket: "jeildc-3a611.appspot.com",
  messagingSenderId: "1028180370116",
  appId: "1:1028180370116:web:9398ffe85ce897534c9f91"
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }

