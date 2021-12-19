import React from 'react';
import './Services.css';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="container-fluid py-5" id='services'>
            <h1 className="service-header-txt">Provide awesome <span>services</span> </h1>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center align-items-center container mx-auto py-5">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;