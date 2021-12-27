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
        <div className='row row-cols-1 row-cols-md-3 '>
                <div className="col">
                    
                </div>
                <div className="col">
                    <div className='w-100 m-auto mt-5 loginFrom'>
                        <h3 className=' text-center'>Sign In With</h3>
                        <div>
                            <form class="row g-3" onSubmit={handleLoginSubmit}>
                                <div class="col-12">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" className="" name="email" onBlur={handleOnBlur} class="form-control" id="inputEmail4" />
                                </div>
                                <div class="col-12">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <input type="password" name="password" onBlur={handleOnBlur} class="form-control " id="inputPassword4" />
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-dark  text-center mb-3">Sign in</button>
                                </div>
                            </form>
                            <p className=' text-center'>Not a Member?<Link to='/register'> Sign up</Link> </p>
                        </div>
                        <div className=' text-center'>
                            <button className='btn btn-dark' onClick={handleGoogleSignIn}>Google Sign in</button>
                        </div>

                    </div>
                </div>
                <div className="col">
                    
                </div>
            </div>
            
        </div>
        
        
        
    );
};

export default Login;
