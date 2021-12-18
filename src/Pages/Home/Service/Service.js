import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { service_title, service_details, picture, _id } = props.service;

    return (
        <div className="col"  >
            <div className="card h-100 border-0 service-card">
                <img src={picture} className="img-fluid m-auto pt-2" height="74" width="74" alt="..." />
                <div className="card-body">
                    <h5 className="card-title service-title">{service_title}</h5>
                    <p className="card-text service-details-txt">{service_details}</p>
                    <Link to={`/service/${_id}`} > <button className='login-btn'> Order Now</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Service;