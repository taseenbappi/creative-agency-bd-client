import React from 'react';
import partnerImg1 from "../../../images/netflix.png";
import partnerImg2 from "../../../images/airbnb.png";
import partnerImg3 from "../../../images/google.png";
import partnerImg4 from "../../../images/slack.png";
import partnerImg5 from "../../../images/uber.png";

const Partner = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center container mx-auto p-0 py-3">

            <div className="col-6 col-lg-2 col-md-2 col-sm-6 ">
                <img src={partnerImg1} alt="" className="img-fluid  p-3" />
            </div>
            <div className="col-6 col-lg-2 col-md-2 col-sm-6 ">
                <img src={partnerImg5} alt="" className="img-fluid p-3" />

            </div>
            <div className="col-6 col-lg-2 col-md-2 col-sm-6 ">
                <img src={partnerImg3} alt="" className="img-fluid p-3" />
            </div>
            <div className="col-6 col-lg-2 col-md-2 col-sm-6 ">
                <img src={partnerImg4} alt="" className="img-fluid p-3" />
            </div>
            <div className="col-6 col-lg-2 col-md-2 col-sm-6 ">
                <img src={partnerImg2} alt="" className="img-fluid p-3" />
            </div>
        </div>
    );
};

export default Partner;