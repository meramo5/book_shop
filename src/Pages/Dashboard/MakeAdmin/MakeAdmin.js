import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
        e.target.value = '';
    }
    const handleMakeAdmin = e => {
        const proceed = window.confirm('Are you sure, you want to make admin?');
        const user = { email }
        if (proceed) {
            fetch('https://obscure-mesa-53122.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setEmail('');
                        setSuccess(true);
                        document.getElementById("create-course-form").reset();
                    }

                })
            e.preventDefault();
        }
    }
    return (
        <div>
            
            <div className="row row-cols-1 row-cols-sm-2">
                <div className="col">
                    <form className="row g-3 mt-5" id="create-course-form" onSubmit={handleMakeAdmin}>
                    <h3>Make An <span className='text-danger'>Admin</span></h3>
                        <div className="col">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" name="email" onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark">Make Admin</button>
                        </div>
                        {
                            success && <div className="alert alert-success" role="alert">
                                Make Admin Successfully
                            </div>
                        }
                    </form>
                </div>
                <div className="col picutre">
                    {/* <img src={picture} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;