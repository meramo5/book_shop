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
        <div className="row row-cols-1 row-cols-md-3 mt-5">
                <div className='col'></div>
                <div className="col loginFrom pb-3">
                    <h3 className='mt-5 text-center'>New To Book Shop? <span className='text-danger'>Register</span></h3>
                    <form className="row g-3 w-100 inputFrom mt-2" onSubmit={handleRegister}>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Name</label>
                            <input type="text" name='name' onBlur={handleOnBlur} className="form-control border-bottom" id="inputAddress" />
                        </div>
                        <div className="col-12">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" name='email' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-12">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" name='password' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                        </div>
                        {
                            error && <div class="alert alert-danger" role="alert">
                                {error}
                            </div>
                        }
                        <p className='text-center'>Alrealdy Have An Account <Link to='/login'>Sign In</Link></p>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-dark">Sign in</button>
                        </div>
                    </form>
                </div>
                <div className='col'></div>
            </div>
            
        </div>
    );
};

export default Register;
