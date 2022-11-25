import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(null)

    console.log(user)

    // Create New User
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update Name and Photo
    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // 5. Logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    //6. Login with Password
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        loading,
        logout,
        signin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
