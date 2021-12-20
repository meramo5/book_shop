import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Header from '../Share/Header/Header';
const Purchase = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const { user } = useAuth();
    const status = 'Pending';

    const initialInfo = { name: user.displayName, email: user.email, phone: '' }
    const [confirmPurchased, setConfirmPurchased] = useState(initialInfo)


    useEffect(() => {
        const url = `http://localhost:5000/books/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [purchaseId]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...confirmPurchased }
        newInfo[field] = value;
        console.log(newInfo);
        setConfirmPurchased(newInfo);
    }

    const handleInfo = e => {
        e.preventDefault();
        const purchased = {
            ...confirmPurchased,
            status,
            itemName:purchase.name,
            itemPrice:purchase.price
        }
        fetch('http://localhost:5000/purchased', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchased)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setConfirm(true);
                    document.getElementById("create-course-form").reset();
                    alert('Order Placed Successfully');
                }
            })
    }
    return (
        <>
            <Header></Header>
            <div className='container mt-5'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={purchase.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{purchase.name}</h5>
                                <h5 className="card-title">Price: <span className='text-danger'>${purchase.price}</span></h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Fill the Form for Confirmed<span className='text-danger'> Purchase</span></h3>
                        <form className="row g-3 w-100 inputFrom mt-2" id="create-course-form" onSubmit={handleInfo}>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Name</label>
                                <input type="text" defaultValue={user.displayName} name='name' onBlur={handleOnBlur} className="form-control" id="inputAddress" />
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" defaultValue={user.email} name='email' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="number" className="form-label">Phone</label>
                                <input type="text" name='phone' onBlur={handleOnBlur} className="form-control" id="number" />
                            </div>
                            <div className="col-12">
                                <label for="address" className="form-label">Address</label>
                                <input type="text" name='address' onBlur={handleOnBlur} className="form-control" id="address" />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-dark">Confirmed</button>
                            </div>
                            {
                                confirm && <div class="alert alert-success" role="alert">
                                    Order Placed Successfully
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;