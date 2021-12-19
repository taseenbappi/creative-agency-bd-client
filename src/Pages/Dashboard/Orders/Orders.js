import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Orders = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {

        // send data to database
        axios.post('https://glacial-gorge-61316.herokuapp.com/order', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Order Confirmed success!!');
                    reset();
                }
            })
            .catch(function (error) {

            });
    };
    return (
        <div className=' border-top shadow border-3 rounded border-primary p-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("customer_name")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required value={user?.displayName} />

                <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3 w-75 mx-auto bg-light" required value={user?.email} />

                <input type="number" {...register("price")} placeholder="price" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                <input type="text" {...register("service_title")} placeholder="service name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                <textarea  {...register("project_details")} placeholder="write your project details" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                <input type="submit" value="Send" className="login-btn " />
            </form>
        </div>
    );
};

export default Orders;