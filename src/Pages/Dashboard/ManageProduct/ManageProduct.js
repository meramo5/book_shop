import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageProduct = () => {
    const [products,setProduct]=useState([]);

    useEffect(() => {
        fetch('https://obscure-mesa-53122.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    console.log(products);
    const handleDeleteProduct=(id)=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://obscure-mesa-53122.herokuapp.com/books/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restBooking = products.filter(order => order._id !== id);
                        setProduct(restBooking);
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='mt-5 mb-3'>Manage Product and <span className='text-danger'>Remove</span></h3>
            <Row xs={1} md={2} lg={4} className="g-4">
                {products.map(product => <>
                    <Col>
                        <Card border="secondary" style={{ width: '16rem' }}>
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                   Price: ${product.price}
                                </Card.Text>
                                <Card.Text>
                                   Author: ${product.author}
                                </Card.Text>
                                <Card.Text>
                                   Edition: ${product.edition}
                                </Card.Text>
                                <Card.Text>
                                   Category: ${product.category}
                                </Card.Text>
                                <Card.Text>
                                <img src={product.img} alt="" style={{width:'100px'}} srcset="" />
                                </Card.Text>
                            </Card.Body>
                            <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger b-0">Delete Product</button>
                        </Card>
                    </Col>
                </>)}
            </Row>
            {/* <img src={product.img} alt="" style={{width:'100px'}} srcset="" /> */}
        </div>
    );
};

export default ManageProduct;