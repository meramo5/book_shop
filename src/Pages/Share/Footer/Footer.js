import React from 'react';
import '../../../Style/style.css';
const Footer = () => {
    return (
        <div className='mt-3'>
            <hr/>
            <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                <div className='col'>
                    <h5 className='mb-4'>Book Shoop</h5>
                    <p className=' icons'><i class="fas fa-phone-square"></i> 15807</p>
                    <p className=' icons'><i class="fas fa-envelope"></i> info@bookshoop.com</p>
                    <p className=' icons'><i class="fas fa-address-card"></i> Level: 14, 30/A VIP Road, Uttara, Dhaka</p>
                </div>
                <div className='col'>
                    <h5 className='mb-4'>Expliore BY</h5>
                    <p className=' icons'>Category</p>
                    <p className=' icons'>Author</p>
                    <p className=' icons'>Publisher</p>
                </div>
                <div className='col'>
                    <h5 className='mb-4'>Get To Know Us</h5>
                    <p className=' icons'>Contact Us</p>
                    <p className=' icons'>About Us</p>
                    <p className=' icons'>Blog</p>
                </div>
                <div className='col social'>
                    <h5>Stay Connected With Us</h5>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;