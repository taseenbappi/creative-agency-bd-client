import React, { useEffect, useState } from 'react';
import ServiceRow from '../serviceRow/ServiceRow';
import './ServiceList.css';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState();
    console.log(serviceList);
    useEffect(() => {
        fetch("https://glacial-gorge-61316.herokuapp.com/placedOrder")
            .then(res => res.json())
            .then(data => setServiceList(data));
    }, [])

    return (
        <div className="container-fluid p-0">

            <div className="p-3 table-responsive">
                <table className="table table-bordered table-sm service-table">
                    <thead>
                        <tr className='bg-light table-header'>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Customer Name</th>
                            <th scope="col">Email-ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            serviceList?.map(serviceItem => <ServiceRow
                                key={serviceItem._id}
                                serviceItem={serviceItem}
                            ></ServiceRow>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ServiceList;