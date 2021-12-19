import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        console.log(data);
        axios.post('https://glacial-gorge-61316.herokuapp.com/reviews', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Review Send Successfully!!');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className=' border-top shadow border-3 rounded border-primary p-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("customer_name")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required value={user?.displayName} />

                <input type="text" {...register("designation")} placeholder="company name/designation" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                <textarea  {...register("description")} placeholder="description" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                <input type="submit" value="Submit" className="login-btn " />
            </form>
        </div>
    );
};

export default Review;