import firebase from 'firebase';
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDLFjeRQf4eAwa7lL_l5v8PEZiib0LwgMU",
  authDomain: "kerja-2f44b.firebaseapp.com",
  projectId: "kerja-2f44b",
  storageBucket: "kerja-2f44b.appspot.com",
  messagingSenderId: "752985869478",
  appId: "1:752985869478:web:fbd0823dfa2bfa43567867"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const storage = firebase.storage()
const fire = firebase;

export {
  storage, fire as default
}