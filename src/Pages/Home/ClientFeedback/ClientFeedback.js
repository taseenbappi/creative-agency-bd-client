import React from 'react';
import './ClientFeedback.css';
import clientImg1 from '../../../images/customer-img/customer-1.png';
import clientImg2 from '../../../images/customer-img/customer-2.png';
import clientImg3 from '../../../images/customer-img/customer-3.png';

const ClientFeedback = () => {
    return (
        <div className="container-fluid py-5">
            <h1 className="client-header-txt">Clients <span>Feedback</span> </h1>

            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 d-flex justify-content-center align-items-center container mx-auto py-5 text-start">

                <div className="col">
                    <div className="card h-100 p-2">
                        <div className='d-flex justify-content-center align-items-center '>
                            <img src={clientImg1} className="img-fluid p-2 me-auto  " height="74" width="74" alt="..." />
                            <div className="me-auto  ">
                                <h5 className="card-title client-title m-0">Nash Patrik</h5>
                                <h6 className="card-title client-details-txt fw-bolder m-0">CEO, Manpol</h6>
                            </div>
                        </div>
                        <div className="p-1">

                            <p className=" client-details-txt">Creative agency service so fast. They build mobile app, web app and UI design , that's awesome work</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-2">
                        <div className='d-flex justify-content-center align-items-center '>
                            <img src={clientImg2} className="img-fluid p-2 me-auto  " height="74" width="74" alt="..." />
                            <div className="me-auto  ">
                                <h5 className="card-title client-title m-0">Miriam Barron</h5>
                                <h6 className="card-title client-details-txt fw-bolder m-0">CEO, Manpol</h6>
                            </div>
                        </div>
                        <div className="p-1">

                            <p className="client-details-txt ">Creative agency service so fast. They build mobile app, web app and UI design , that's awesome work</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-2">
                        <div className='d-flex justify-content-center align-items-center '>
                            <img src={clientImg3} className="img-fluid p-2 me-auto  " height="74" width="74" alt="..." />
                            <div className="me-auto  ">
                                <h5 className="card-title client-title m-0">Bria Malone</h5>
                                <h6 className="card-title client-details-txt fw-bolder m-0">CEO, Manpol</h6>
                            </div>
                        </div>
                        <div className="p-1">

                            <p className="client-details-txt ">Creative agency service so fast. They build mobile app, web app and UI design , that's awesome work</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientFeedback;