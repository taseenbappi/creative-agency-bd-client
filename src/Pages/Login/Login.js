import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import logo from "../../images/logo-1.svg";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const Login = () => {

    const { googleSignInHandler, isLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {

        reset();

    };
    const handleGoogleSignIn = () => {
        googleSignInHandler(location, navigate);
    }
    if (isLoading) {
        return <Spinner animation="border" />
    }
    return (
        <div className='container-fluid py-5 text-center'>
            <Link to="/home"><img src={logo} alt="" className="img-fluid m-auto" /></Link>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow">
                            <div className="card-title text-center border-bottom">
                                <h2 className="p-3">Login</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3  mx-auto bg-light" />
                                    <input type="password" {...register("password")} placeholder="Password" className="form-control p-2 m-3 mx-auto bg-light" />
                                    <input type="submit" value="Login" className="login-btn  mx-auto" />

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <NavLink to="/register" ><span className='py-3'>New user? Please go for register account</span></NavLink>
            <div className='d-flex flex-column justify-content-center align-items-center p-3'>

                <button className='google-btn' onClick={handleGoogleSignIn}><FaGoogle className='m-2'></FaGoogle>continue with Goolge</button>

            </div>

        </div>
    );
};

export default Login;