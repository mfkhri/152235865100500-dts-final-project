// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP3da9hCAvU_t_dkOfTO2GrSefTafj3PE",
  authDomain: "dts2022-d3935.firebaseapp.com",
  projectId: "dts2022-d3935",
  storageBucket: "dts2022-d3935.appspot.com",
  messagingSenderId: "360696600641",
  appId: "1:360696600641:web:3ccc0a7265794053c60ec0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fucntion
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(UserCredential.user);
  } catch (error) {
    console.log(error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const activeUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(activeUser.user);
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = async (email) => {
  try {
    sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error.message);
  }
};

const logOut = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  logOut,
};
