import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBJjXs7D-zGsA5mWbktNQnpiMdFJkmDYRs",
  authDomain: "reventscourse-25367.firebaseapp.com",
  projectId: "reventscourse-25367",
  storageBucket: "reventscourse-25367.appspot.com",
  messagingSenderId: "769597807252",
  appId: "1:769597807252:web:3698e566b3fe2642783281"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase