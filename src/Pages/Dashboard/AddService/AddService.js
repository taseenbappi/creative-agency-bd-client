import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/services', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('service added successfully!!');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container-fluid p-0">

            <div className="row   mx-auto ">


                <div className="col-12  p-5 border-top shadow border-3 rounded border-warning">
                    <h2 className="register-title">Add A Service</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("service_title")} placeholder="Service Title" className="form-control p-2 m-3  mx-auto bg-light" required />

                        <input {...register("service_details")} placeholder="service short description" className="form-control p-2 m-3 mx-auto bg-light" required />


                        <input {...register("picture")} placeholder="Image URL" className="form-control p-2 m-3  mx-auto bg-light" required />

                        <input type="submit" value="Add" className="login-btn " />
                    </form>

                </div>

            </div>

        </div>
    )
};

export default AddService;