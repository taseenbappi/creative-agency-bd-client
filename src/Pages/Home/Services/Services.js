import React from 'react';
import './Services.css';
import serviceImg1 from '../../../images/services-img/web-mobile-design.svg';
import serviceImg2 from '../../../images/services-img/graphic-design.svg';
import serviceImg3 from '../../../images/services-img/web-development.svg';

const Services = () => {
    return (
        <div className="container-fluid py-5">
            <h1 className="service-header-txt">Provide awesome <span>services</span> </h1>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center align-items-center container mx-auto py-5">
                <div className="col">
                    <div className="card h-100 border-0 service-card">
                        <img src={serviceImg1} className="img-fluid m-auto pt-2" height="74" width="74" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title service-title">Web & Mobile design</h5>
                            <p className="card-text service-details-txt">We craft stunning and amazing web UI, using a well
                                <br />
                                drrafted UX to fit your product.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 service-card">
                        <img src={serviceImg2} className="img-fluid m-auto pt-2" height="74" width="74" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title service-title">Graphic design</h5>
                            <p className="card-text service-details-txt">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 service-card">
                        <img src={serviceImg3} className="img-fluid m-auto pt-2" height="74" width="74" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title service-title">Web development</h5>
                            <p className="card-text service-details-txt">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Services;