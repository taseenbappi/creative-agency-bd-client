import React from 'react';
import './Banner.css';
import fram from '../../../images/frame.svg';
import { FaHandPointer } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center container mx-auto p-0 py-5" >
            <div className="col-12 col-lg-5 col-md-6 col-sm-12 text-start p-3">
                <h1 className="banner-highlight-txt">Let’s Grow Your
                    Brand To The
                    Next Level</h1>
                <p>Our promises to help and achieved your goal.</p>
                <button className="login-btn">Hire us<FaHandPointer className='m-1'></FaHandPointer></button>
            </div>
            <div className="col-12 col-lg-7 col-md-6 col-sm-12 p-3">
                <img src={fram} alt="" className="img-fluid frame-img" />
            </div>
        </div>
    );
};

export default Banner;