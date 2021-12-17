import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';
import logo from "../../images/logo-1.svg";
import { NavLink } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { googleSignInHandler } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {

        reset();

    };

    return (
        <div className='container-fluid py-5 text-center'>
            <Link to="/home"><img src={logo} alt="" className="img-fluid m-auto" /></Link>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow">
                            <div className="card-title text-center border-bottom">
                                <h2 className="p-3">Register</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" {...register("name")} placeholder="Your name" className="form-control p-2 m-3  mx-auto bg-light" />
                                    <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3  mx-auto bg-light" />
                                    <input type="password" {...register("password")} placeholder="Password" className="form-control p-2 m-3 mx-auto bg-light" />
                                    <input type="submit" value="Register" className="login-btn  mx-auto" />

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <NavLink to="/login" ><span className='py-3'>Already you have account? Go for login!</span></NavLink>


        </div>
    );
};

export default Register;