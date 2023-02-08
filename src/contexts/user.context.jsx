//export both the 'context' and the 'provider'
//'provider' is the actual component
import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

//as the actual value u wanna access
//This user context object is going to give us back whatever value is passed in for the value.
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//literal functional component
//.provider will wrap around any other components that need access to the values inside
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; //set of function,actual value

  //with use effect, with this callback, run whatever return from this callback when it mounts.
  useEffect(() => {
    //centralized sign out and sign in into this listener callback.
    const unsubscribe = onAuthStateChangedListener((user) => {
      //   console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      //If a user signed out, store null.If a user signed in, store the object.
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
