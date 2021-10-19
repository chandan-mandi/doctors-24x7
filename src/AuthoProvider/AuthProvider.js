import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allAuthContext = useFirebase();
    console.log(allAuthContext);
    return (
        <AuthContext.Provider value={allAuthContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;