import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
           setUser(result?.user);
        })
    }
    return {
        signInUsingGoogle,
        user
    }
};

export default useFirebase;