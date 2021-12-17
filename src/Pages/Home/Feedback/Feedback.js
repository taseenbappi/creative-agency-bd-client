import React from 'react';

const Feedback = (props) => {
    const { customer_name, designation, description, img_url } = props.review;
    return (
        <div>
            <div className="col">
                <div className="card h-100 p-2">
                    <div className='d-flex justify-content-center align-items-center '>
                        <img src={img_url} className="img-fluid p-2 me-auto  " height="74" width="74" alt="..." />
                        <div className="me-auto  ">
                            <h5 className="card-title client-title m-0">{customer_name}</h5>
                            <h6 className="card-title client-details-txt fw-bolder m-0">{designation}</h6>
                        </div>
                    </div>
                    <div className="p-1">

                        <p className=" client-details-txt">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;