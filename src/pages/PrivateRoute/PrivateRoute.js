import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // console.log({...rest});
    const {user, isLoading} = useAuth();
    if(isLoading) {
        return <div className="text-center loading-spinner">
        <Spinner animation="grow" variant="danger" />
    </div>
    }
    return (
        <Route
            {...rest}
            render={({location}) =>
            user?.email ? (children) :
            (<Redirect to={{pathname:"/register",state: {from: location}}}></Redirect>)
        }
        >

        </Route>
    );
};

export default PrivateRoute;