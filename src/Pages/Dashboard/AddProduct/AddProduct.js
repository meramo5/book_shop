import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const [confirm, setConfirm] = useState(false);
    // const { user, registerUser, isLoading, authError } = useAuth();



    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddData = { ...addProduct };
        newAddData[field] = value;
        setAddProduct(newAddData);
    }
    const handleAddProduct=(e)=>{
        e.preventDefault();
        const product = {
            ...addProduct
        }
        fetch('https://obscure-mesa-53122.herokuapp.com/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setConfirm(true);
                    document.getElementById("create-course-form").reset();
                }
            })
    }
    return (
        <div className="container">
                
            </div>
    );
};

export default AddProduct;