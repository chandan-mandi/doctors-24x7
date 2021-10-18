import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allAuthContext = useAuth();
    console.log(allAuthContext);
    return (
        <AuthContext.Provider value={allAuthContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;