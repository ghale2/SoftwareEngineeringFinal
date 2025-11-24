import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA7Rj7M9eedoCDL81yQzrFI2NW3yPuIMJQ",
  authDomain: "campushub-58e25.firebaseapp.com",
  projectId: "campushub-58e25",
  storageBucket: "campushub-58e25.appspot.com",
  messagingSenderId: "561321546790",
  appId: "1:561321546790:web:83d7f41e08ad0f1f7742e7",
  measurementId: "G-3K8SC5N6VX"
};

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
