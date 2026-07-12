import {auth} from "../../components/Firebase/firebase";
import React, {useEffect, useState, useContext} from "react";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, SetCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user){
        if (user) {
            SetCurrentUser({...user});
            setUserLoggedIn(true)
        } else {
            SetCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    } 

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}