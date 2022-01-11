import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://obscure-mesa-53122.herokuapp.com/purchased/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user.email]);
    console.log(orders)
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
    return (
        <div className='container-fluid'>
        <h3 className='mt-5 mb-3'>My <span className='text-danger'> Order</span></h3>
        <Row xs={1} md={2} lg={4} className="g-4">
            {orders.map(order => <>
                <Col>
                    <Card border="secondary" style={{ width: '16rem' }}>
                        <Card.Header><span>Buyer: </span> {order.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <span className='text-bold'>Car:</span> {order.itemName}
                            </Card.Text>
                            <Card.Text>
                               Price: ${order.itemPrice}
                            </Card.Text>
                            <Card.Text>
                               Phone: {order.phone}
                            </Card.Text>
                            <Card.Text>
                                   Status: {order.status}
                                </Card.Text>
                        </Card.Body>
                        <button onClick={() => handleCancenOrder(order._id)} className="btn btn-danger b-0">Cancel Order</button>
                    </Card>
                </Col>
            </>)}
        </Row>
    </div>
    );
};

export default MyOrder;