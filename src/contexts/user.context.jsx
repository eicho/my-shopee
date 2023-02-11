//export both the 'context' and the 'provider'
//'provider' is the actual component
import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// an object which has these key value pairs where it's the actual Value.
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

//'INITIAL_STATE' is an object and current user is equal to null because when initialize the application, have no current user.
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  // console.log("dispatched"); //call 'dispatch' whenever 'userReducer' run
  // console.log(action);

  const { type, payload } = action;

  // switch statement is a special block of code where pass the switch, some value or passing type.
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      //give me the same values on the previous state object that you had, but anything afterwards going to overwrite
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

//as the actual value u wanna access
//This user context object is going to give us back whatever value is passed in for the value.
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//literal functional component
//.provider will wrap around any other components that need access to the values inside
export const UserProvider = ({ children }) => {
  //Whenever 'dispatch' gets called and a new 'state' object is returned, then will rerun this functional component.
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE); //'useReducer' as a hook.'useReducer' has 2 arguments.(userreducer or some reducer,initial value of the state).'dispatch' will take 'action' object and then pass it in
  // console.log(currentUser);

  const setCurrentUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });

  const value = { currentUser, setCurrentUser };

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
