import React from 'react';
import './Services.css';
import serviceImg1 from '../../../images/services-img/web-mobile-design.png';
import serviceImg2 from '../../../images/services-img/graphic-design.png';
import serviceImg3 from '../../../images/services-img/web-development.png';

const Services = () => {
    return (
        <div className="container-fluid py-5">
            <h1 className="service-header-txt">Provide awesome <span>services</span> </h1>

            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center align-items-center container mx-auto py-5">
                <div class="col">
                    <div class="card h-100 border-0 service-card">
                        <img src={serviceImg1} class="img-fluid m-auto pt-2" height="74" width="74" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Web & Mobile design</h5>
                            <p class="card-text">We craft stunning and amazing web UI, using a well
                                <br />
                                drrafted UX to fit your product.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 service-card">
                        <img src={serviceImg2} class="img-fluid m-auto pt-2" height="74" width="74" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Graphic design</h5>
                            <p class="card-text">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 service-card">
                        <img src={serviceImg3} class="img-fluid m-auto pt-2" height="74" width="74" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Web development</h5>
                            <p class="card-text">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Services;