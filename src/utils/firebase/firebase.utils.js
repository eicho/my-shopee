import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO1KuJKfu_WWTBV8sVTyIz8sS3FacfHis",
  authDomain: "project-my-shopee-db.firebaseapp.com",
  projectId: "project-my-shopee-db",
  storageBucket: "project-my-shopee-db.appspot.com",
  messagingSenderId: "136722722081",
  appId: "1:136722722081:web:b71d8e0739a07b5d49a260",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
