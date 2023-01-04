import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utilities/firebase/firebase.utils";


// Actual value we want to access.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// Thw functional component.
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(() => {});
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};