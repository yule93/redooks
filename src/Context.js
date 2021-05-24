import React, {useState, useContext} from "react";

// Data storage
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Minjoo",
        loggedIn: false
    });
    const logUserIn = () => setUser({ ...user, loggedIn: true });
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
  };
  
  export const useFns = () => {
    const { fn } = useContext(UserContext);
    return fn;
  };

export default UserContextProvider;