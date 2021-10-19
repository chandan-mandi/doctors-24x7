import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useDb from '../../hooks/usedb';
import './UserDetails.css';

const UserDetails = () => {
    const { user,logout, signInUsingGoogle } = useAuth();
    console.log(user);
    return (
        <div>
            <Container className="py-5 registration-section">
                {user?.email &&
                    <div>
                        <div className="user-photo">
                            <img src={user?.photoURL} alt="" />
                        </div>
                        <h2>Name: {user?.displayName}</h2>
                        <h2>Email : {user?.email}</h2>
                    </div>
                }
                {user?.email ?
                    <div className="btn btn-danger" onClick={logout}>Logout</div>
                    :
                    <div className="p-5 registration-form">
                        <h3>This is Login Page.</h3>
                        <div className="sign-in-btn facebok-login d-flex my-2">
                            {/* <div className="sign-img"><img src={fb} alt="hello" /></div> */}
                            <div className="facebook-sign-in-btn" onClick={signInUsingGoogle}>Continue With Facebook</div>
                        </div>
                        <div className="sign-in-btn google-login d-flex my-2">
                            {/* <div className="sign-img"><img src={google} alt="google" /></div> */}
                            <div className="google-sign-in-btn" onClick={signInUsingGoogle}>Continue With Google</div>
                        </div>
                        <div className="sign-in-btn apple-login d-flex my-2">
                            {/* <div className="sign-img"><img src={apple} alt="google" /></div> */}
                            <div className="apple-sign-in-btn" onClick={signInUsingGoogle}>Continue With Apple</div>
                        </div>
                    </div>
                }
            </Container>
        </div>
    );
};

export default UserDetails;