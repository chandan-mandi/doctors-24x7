import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
           setUser(result?.user);
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)

        })
    },[])



    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    return {
        signInUsingGoogle,
        user,
        isLoading,
        logout,
    }
};

export default useFirebase;