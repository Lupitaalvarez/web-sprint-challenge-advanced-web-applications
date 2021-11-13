import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';

const Logout = () => {
    const { push } = useHistory();
    useEffect(()=> {
        axiosWithAuth()
            .post('http://localhost:5000/api/logout')
            .then(resp => {
                localStorage.removeItem("token");
                history.push('/login');
            }).catch(err=> {
                console.log(err);
            })
    }, []);
    return(<div>You Have been logged out</div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.