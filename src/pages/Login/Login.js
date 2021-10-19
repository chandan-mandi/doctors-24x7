import React, { useState } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';
import fb from "../../img/ICON/facebook-brands.svg";
import google from "../../img/ICON/search.png";
import apple from "../../img/ICON/apple.png";
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import UserDetails from '../UserDetails/UserDetails';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';

const Login = () => {
    const { signInUsingGoogle, user, isLoading  } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    

    const auth = getAuth();

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(name, email, password);
        if(password.length < 6){
            setError('Password must be 6 characters')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);
        
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setError('');
            verifyEmail();
            setUserName();
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const toggleLogin = () => {
        setIsLogin(true)
    }
    const toggleRegister = () => {
        setIsLogin(false)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
            console.log(result);
        })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {photoURL: name})
        .then(result =>{       
        })
    }

    return (
        <div className="container py-5 registration-section">
            <h2>{user?.displayName} {!isLoading ? '' : <Spinner animation="border" variant="danger" />}</h2>
            {!user?.email ?
                <div className="p-5 registration-form">
                <h2>{isLogin ? 'Join': 'Sign'} In To Green Chilli</h2>
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
                <Form onSubmit={handleRegistration} className="pt-3">
                    {!isLogin && <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" onBlur={handleName} placeholder="Enter your name" />
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePassword} placeholder="Password" required/>
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    {!isLogin ? <Button className="w-100 login-btn" type="submit">
                        Register
                    </Button> :
                    <Button className="w-100 mt-3 login-btn" type="submit">
                        Login
                    </Button>}
                </Form>
                <hr />
                <div className="register-login-toggle d-flex">
                    <p>Not a member yet?</p>
                    {isLogin ? 
                    <button onClick={toggleRegister}>Join now</button>
                    : <button onClick={toggleLogin}>Already User?</button>}
                </div>
            </div> : <UserDetails/>
            }
        </div>
    );
};

export default Login;