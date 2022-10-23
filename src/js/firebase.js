import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: 'AIzaSyCuY8yDoH553agIAfG8dlh7_3v8gjiY9SM',
  authDomain: 'jeildc.firebaseapp.com',
  projectId: 'jeildc',
  storageBucket: 'jeildc.appspot.com',
  messagingSenderId: '276098396961',
  appId: '1:276098396961:web:12a58fed72998964844460',
  measurementId: 'G-Y442EV81J1'
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }
