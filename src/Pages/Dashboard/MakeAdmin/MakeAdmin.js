import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        // update request for admin role
        axios.put('http://localhost:5000/users/admin/', data)
            .then(response => {
                if (response.data.modifiedCount) {
                    alert("Admin added successfully");
                    reset();
                }
                else {
                    alert("try register email");
                }
            })
            .catch(error => {

                console.error('There was an error!', error);
            });
        reset();

    };
    return (
        <div className="container-fluid p-0">

            <div className="row p-5   ">

                <div className="col-12 p-3 border-top shadow border-3 rounded border-danger">

                    <h2 >Admin Form</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3 w-100 mx-auto bg-light" />

                        <input type="submit" value="Add Admin" className="login-btn " />
                    </form>

                </div>
                {/* <div className="col-12 col-lg-6 col-md-6 col-sm-12">

                </div> */}

            </div >
        </div>
    );
};

export default MakeAdmin;