import React, { useState } from 'react';

const Review = () => {
    const [review,setReview]=useState({});
    const [confirm, setConfirm] = useState(false);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...review };
        newLoginData[field] = value;
        setReview(newLoginData);
    }
    const handleReview = e => {
        e.preventDefault();
        const reviews = {
            ...review
        }
        fetch('https://obscure-mesa-53122.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
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
        <div className=''>
            <div className="row row-cols-1 row-cols-sm-2">
                <div className="col">
                    <h3 className='mt-5 mb-3'>Please <span className='text-danger'>Review</span> Our Service</h3>
                    <form className="row g-3 w-100 inputFrom mt-2" id="create-course-form" onSubmit={handleReview}>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Your Name</label>
                            <input type="text" name='name' onBlur={handleOnBlur} className="form-control" id="inputAddress" />
                        </div>
                        <div className="col-12">
                            <label for="inputPassword4" className="form-label">Comment</label>
                            <textarea type="text" name='comment' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputPassword4" className="form-label">Rating out of 1 to 5</label>
                            <input type="number" name='rating' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                        {
                                confirm && <div class="alert alert-success" role="alert">
                                    Review Placed Successfully
                                </div>
                            }
                    </form>
                </div>
                <div className="col picutre mt-5">
                    {/* <img src={picture} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Review;