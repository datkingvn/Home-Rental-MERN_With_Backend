import React, {createContext, useEffect, useState} from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";
import app from "../firebase/firebase.config.js";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create an Account (email, password)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signup with Gmail
    const signUpWithGmail = async () => {
        return await signInWithPopup(auth, googleProvider)
    }

    // Login using email, password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Logout
    const logOut = () => {
        return signOut(auth)
    }

    // Update Profile
    const updateUserProfile = async ({ name, photoURL }) => {
        try {
            await updateProfile(auth.currentUser, { displayName: name, photoURL });
            // Update successful.
        } catch (error) {
            // An error happened.
            throw error;
        }
    };

    // Check signed-in user (Get the currently signed-in user)
    useEffect(() => {
        const checkSignedInUser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return checkSignedInUser();
        }
    }, []);

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
