import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Share/Header/Header';

const AllBooks = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('https://boiling-journey-11612.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
    return (
        <>
            <Header></Header>
            <div>
                <div className='container'>
                    <h3 className='text-center mt-4'>Find Your Books</h3>
                    <h5 className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>Get by books by choice</h5>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        {
                            books.map(book => <div className="col">
                            <div className="card">
                                <img src={book.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{book.name}</h5>
                                    <h5 className="card-title">Price: <span className='text-danger'> ${book.price}</span></h5>
                                    <p className="card-text">{book.details}</p>
                                    <Link to={`/purchase/${book._id}`}><button className='btn btn-dark'>Purchase</button></Link> 
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default AllBooks;