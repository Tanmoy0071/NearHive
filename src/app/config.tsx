import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB_JCnk07CS7K3wKds59EaKRDiAx93ahgc",
  authDomain: "tnennt-1e1f2.firebaseapp.com",
  databaseURL: "https://tnennt-1e1f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tnennt-1e1f2",
  storageBucket: "tnennt-1e1f2.appspot.com",
  messagingSenderId: "950564714045",
  appId: "1:950564714045:web:9307c9822c4f77efa39c54"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export{storage}