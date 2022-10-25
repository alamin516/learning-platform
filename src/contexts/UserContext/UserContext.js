import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const loginProvider = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const updateUserProfile = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const emailVerification = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false)
        }) 
        return () => unSubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        loginProvider, 
        createUser,
        updateUserProfile, 
        emailVerification,
        logIn, 
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;