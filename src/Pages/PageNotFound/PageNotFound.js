import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className=''>
            <h1 className='text-danger text-center mt-5'>This page is not found</h1>
            <div className='mx-auto text-center mt-5'>
            <Link to='/home' className=' w-25 mx-auto'><button className='btn btn-dark'>Back to Home</button></Link>
            </div>
            
        </div>
    );
};

export default PageNotFound;