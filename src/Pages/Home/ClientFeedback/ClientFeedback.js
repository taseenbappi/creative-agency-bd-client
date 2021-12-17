import React, { useState, useEffect } from 'react';
import './ClientFeedback.css';
import Feedback from '../Feedback/Feedback';

const ClientFeedback = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://glacial-gorge-61316.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container-fluid py-5">
            <h1 className="client-header-txt">Clients <span>Feedback</span> </h1>

            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 d-flex justify-content-center align-items-center container mx-auto py-5 text-start">
                {
                    reviews.map(review => <Feedback
                        key={review._id}
                        review={review}
                    ></Feedback>)
                }


            </div>
        </div>
    );
};

export default ClientFeedback;