import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrder] = useState([]);
    const [accepted, setAccepted] = useState(true);
    useEffect(() => {
        fetch('https://obscure-mesa-53122.herokuapp.com/purchased/allorder')
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
    }, [accepted]);


    const handleCancenOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://obscure-mesa-53122.herokuapp.com/purchased/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restBooking = orders.filter(order => order._id !== id);
                        setOrder(restBooking);
                    }
                })
        }
    }
    const handleAcceptOrder = (id) => {
        const ids = { id };
        const proceed = window.confirm('Are you sure, you want to accepted?');
        if (proceed) {
            const url = `https://obscure-mesa-53122.herokuapp.com/purchased/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(ids)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        alert('Accepted Successfully');
                        setAccepted(false);
                    }
                })
        }
    }
    return (
        <div>
        <h3 className='mt-5 mb-3'>Manage Order and <span className='text-danger'>Confirmed</span></h3>
            
            <Row xs={1} md={2} lg={4} className="g-4">
                {orders.map(order => <>
                    <Col>
                        <Card border="secondary" style={{ width: '16rem' }}>
                            <Card.Header>Buyer:{order.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Car: {order.itemName}
                                </Card.Text>
                                <Card.Text>
                                   Price: ${order.itemPrice}
                                </Card.Text>
                                <Card.Text>
                                   Status: {order.status}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>Phone: {order.phone}</Card.Footer>
                            <button onClick={() => handleCancenOrder(order._id)} className="btn btn-danger b-0">Cancel Order</button>
                            <button onClick={() => handleAcceptOrder(order._id)} className="btn btn-info mt-2 b-0">Accept Order</button>
                        </Card>
                    </Col>
                </>)}
            </Row>


            
        </div>
    );
};

export default ManageOrder;
