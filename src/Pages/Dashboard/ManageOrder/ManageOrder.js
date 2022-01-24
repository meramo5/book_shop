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
            
        </div>
    );
};

export default ManageOrder;