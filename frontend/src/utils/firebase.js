// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuWsMVGzGnxzUpoforC0xOTysfLclEewA',
  authDomain: 'attasg-47031.firebaseapp.com',
  projectId: 'attasg-47031',
  storageBucket: 'attasg-47031.appspot.com',
  messagingSenderId: '656899418216',
  appId: '1:656899418216:web:c866e18be9fa8efccbf3dd',
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
