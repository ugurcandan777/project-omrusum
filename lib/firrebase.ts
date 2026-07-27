import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYV2RLj_uPy3u5mfN4GYNaj4fKmOveXGE",
  authDomain: "bizimhikayemiz-2609d.firebaseapp.com",
  projectId: "bizimhikayemiz-2609d",
  storageBucket: "bizimhikayemiz-2609d.firebasestorage.app",
  messagingSenderId: "748086547021",
  appId: "1:748086547021:web:2d3249fc1cd0b88a2fc204",
  measurementId: "G-RKLPGHR5TC",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);