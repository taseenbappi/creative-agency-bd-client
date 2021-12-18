import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const OrderPlaced = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/placedOrder', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Order placed successfully!!');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])





    return (
        <div className="container-fluid border p-0">
            <Navigation></Navigation>

            <div className="row py-5 p-5  mx-auto ">

                <div className="col-12 col-lg-7 col-md-6 col-sm-12 p-3">
                    <div className="text-start" >
                        <div className="card-body">
                            <h3 className="service-header-txt ">Title: <span className="text-primary">{service.service_title}</span></h3>
                            <p className="card-text fs-5 text-secondary">Description: {service.service_details}</p>

                            <img src={service.picture} className="details-img img-fluid" alt="..." height="150" />
                        </div>

                    </div>
                </div>

                <div className="col-12 col-lg-5 col-md-6 col-sm-12 p-5 border-top shadow border-3 rounded border-warning">
                    <h2 className="order-title">Order Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("customer_name")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required value={user?.displayName} />

                        <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3 w-75 mx-auto bg-light" required value={user?.email} />

                        <input type="number" {...register("phone")} placeholder="Your Contact Number" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="text" {...register("service_title")} placeholder="service name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <textarea  {...register("project_details")} placeholder="write your project details" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="submit" value="Placed Order" className="login-btn " />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default OrderPlaced;