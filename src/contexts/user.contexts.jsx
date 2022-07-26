import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

export const userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };


    useEffect(() => {
        console.log('use state called')
        const unSubscribe = onAuthStateChangeListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unSubscribe
    }, [])

    return <userContext.Provider value={value}>{children}</userContext.Provider>

}