import React from 'react';
import { Container } from 'react-bootstrap';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';
import fb from "../../img/ICON/facebook-brands.svg";
import google from "../../img/ICON/search.png";
import apple from "../../img/ICON/apple.png";
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    // const { user, logout, signInUsingGoogle } = useFirebase();
    // console.log(user);
    const {signInUsingGoogle, user} = useAuth();
    console.log(user);
    return (
        <div>
           <h2>Login Page</h2>
           <button className="btn btn-warning" onClick={signInUsingGoogle}>Google</button>
        </div>
    );
};

export default Login;