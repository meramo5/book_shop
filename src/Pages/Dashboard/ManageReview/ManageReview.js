import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://obscure-mesa-53122.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const handleDeleteReview = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://obscure-mesa-53122.herokuapp.com/reviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restReview = reviews.filter(order => order._id !== id);
                        setReviews(restReview);
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='mt-5 mb-3'>Manage Customer <span className='text-danger'>Review</span></h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {reviews.map(review => <>
                    <Col>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Reviewer: {review.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Comment: {review.comment}
                                </Card.Text>
                                <Card.Text>
                                    Rating: {review.rating}
                                </Card.Text>
                            </Card.Body>
                            <button onClick={() => handleDeleteReview(review._id)} className="btn btn-danger b-0">Delete Review</button>
                        </Card>
                    </Col>
                </>)}
            </Row>

        </div>
    );
};

export default ManageReview;