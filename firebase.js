
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6Irh0Xs_Jrt_6IOUM2mz6vxZm3q52HoY",
  authDomain: "laundry-application-7f4c7.firebaseapp.com",
  projectId: "laundry-application-7f4c7",
  storageBucket: "laundry-application-7f4c7.appspot.com",
  messagingSenderId: "571088013444",
  appId: "1:571088013444:web:6a5e8ded1f44846994dad1"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};