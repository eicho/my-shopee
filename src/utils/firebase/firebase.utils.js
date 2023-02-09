import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO1KuJKfu_WWTBV8sVTyIz8sS3FacfHis",
  authDomain: "project-my-shopee-db.firebaseapp.com",
  projectId: "project-my-shopee-db",
  storageBucket: "project-my-shopee-db.appspot.com",
  messagingSenderId: "136722722081",
  appId: "1:136722722081:web:b71d8e0739a07b5d49a260",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

//track of whether or not users are authenticating or not
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//created some collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //'writeBatch'' method that we imported from Firebase Firestorm.
  const batch = writeBatch(db);
  //got the collection reference,collection reference is equal to collection passing in our DB
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    // 'collectionRef' tells directly this 'doc' method which database we're using
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if 'userSnapshot' doesn't exist, then we create a new instance in our database
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //to know when user signin

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef; //get back a valid 'userDocRef'
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  //two parameters,'auth','callback' that you want to call every time this 'auth state' changes.
  onAuthStateChanged(auth, callback);
