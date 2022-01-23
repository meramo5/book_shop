import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../Pages/hooks/useAuth';

const MyProfile = () => {
    const { user,admin } = useAuth();
    return (
        <div className=''>
            
        </div>
    );
};

export default MyProfile;