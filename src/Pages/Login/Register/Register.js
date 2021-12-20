import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser, authError,error } = useAuth();
    const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }
    const handleRegister = (e) => {

        console.log('Press button');
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();

    }
    return (
        <div className="container">
            
        </div>
    );
};

export default Register;