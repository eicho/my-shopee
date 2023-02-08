//export both the 'context' and the 'provider'
//'provider' is the actual component
import { createContext, useState } from "react";

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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
