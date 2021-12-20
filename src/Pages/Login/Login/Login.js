import React, { useState } from 'react';
import { useLocation,useHistory,Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { googleSignIn, loginUser,error } = useAuth();
    const [loginData, setLoginData] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const location = useLocation();
    const history = useHistory();


    const handleLoginSubmit = (e) => {
        console.log('press login')
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }
    return (
        <div className='container mt-5'>
            
        </div>
        
    );
};

export default Login;