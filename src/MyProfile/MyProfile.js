import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../Pages/hooks/useAuth';

const MyProfile = () => {
    const { user,admin } = useAuth();
    return (
        <div className=''>
            <div className='w-25 mx-auto'>
                <Card style={{ width: '18rem' }} className='bg-dark mt-5 '>
                    <Card.Img variant="top" className='rounded-circle' width={200} src={user.photoURL} />
                    <Card.Body className='text-white'>
                        <Card.Title>Name: {user?.displayName}</Card.Title>
                        <Card.Text>
                           email: {user?.email}
                        </Card.Text>
                        <Card.Text>
                            {admin?<Card.Text>Role: Admin</Card.Text>
                            :
                            <Card.Text>Role: User</Card.Text>
                        }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default MyProfile;