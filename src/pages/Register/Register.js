
import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import './Register.css';
import fb from "../../img/ICON/facebook-brands.svg";
import google from "../../img/ICON/search.png";
import apple from "../../img/ICON/apple.png";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase"
const Register = () => {
    const {signInUsingGoogle, user} = useAuth();
    /* const { user, logout,isLoading, signInUsingGoogle, handleUserRegister, handleUserLogin } = useAuth();
    console.log(user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */
    // if (isLoading) {
    //     return <Spinner animation="border" variant="danger" />
    // }

    /* const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    console.log(email,password);
    const handleRegister = () => {
        handleUserRegister(email,password)
    }
    const handleLogin = () => {
        handleUserLogin(email,password)
    } */

    return (
        <div className="container py-5 registration-section">
            {/* <h2>This is Registration Page.{user.email} {!isLoading ? '' : <Spinner animation="border" variant="danger" />}</h2> */}
            <div className="text-center loading-spinner"><Spinner animation="border" variant="danger" /></div>
            <div className="p-5 registration-form">
                <h2>Sign In To Green Chilli</h2>
                <div className="sign-in-btn facebok-login d-flex my-2">
                    <div className="sign-img"><img src={fb} alt="hello" /></div>
                    <div className="facebook-sign-in-btn" onClick={signInUsingGoogle}>Continue With Facebook</div>
                </div>
                <div className="sign-in-btn google-login d-flex my-2">
                    <div className="sign-img"><img src={google} alt="google" /></div>
                    <div className="google-sign-in-btn" onClick={signInUsingGoogle}>Continue With Google</div>
                </div>
                <div className="sign-in-btn apple-login d-flex my-2">
                    <div className="sign-img"><img src={apple} alt="google" /></div>
                    <div className="apple-sign-in-btn" onClick={signInUsingGoogle}>Continue With Apple</div>
                </div>

               {/*  <Form className="pt-3">
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleRegister} className="w-100 login-btn" type="submit">
                        Register
                    </Button>
                    <Button onClick={handleLogin} className="w-100 mt-3 login-btn" type="submit">
                        Login
                    </Button>
                </Form> */}
            </div>
        </div>
    );
};

export default Register;