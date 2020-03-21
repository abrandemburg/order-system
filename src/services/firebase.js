import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAaKYtdPEaufQUnPrWkR0pvrXsEKN1uFGU',
  authDomain: 'peruzzaria.firebaseapp.com',
  databaseURL: 'https://peruzzaria.firebaseio.com',
  projectId: 'peruzzaria',
  storageBucket: 'peruzzaria.appspot.com',
  messagingSenderId: '237310618933',
  appId: '1:237310618933:web:699ecc6da1e7a24c2f307c',
  measurementId: 'G-D87NRBVD1N'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
