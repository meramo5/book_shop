import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('https://obscure-mesa-53122.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
    const product = books.slice(0,8);
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Find Your Books</h1>
            <h6 className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>Get Your Favourite books from here</h6>
            
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {
                product.map(book=><div class="col">
                <div class="card">
                    <img height={200} src={book.img} class="card-img-top" alt="..."/>
                    <div class ="card-body">
                    <h4 class ="card-title">{book.name}</h4>
                    <h5>Price: <span className='text-danger'>${book.price}</span></h5>
                    <p class ="card-text">{book.details}</p>
                    <Link to={`/purchase/${book._id}`}><button className='btn btn-dark'>Purchase</button></Link>               
                    </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default Services;