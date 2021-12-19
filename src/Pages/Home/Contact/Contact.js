import React from 'react';
import { useForm } from 'react-hook-form';
import { IoIosSend } from "react-icons/io";


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {


    };
    return (
        <div className="container-fluid bg" id='contact'>
            <div className="row d-flex justify-content-center align-items-center container mx-auto p-0 py-5 ">
                <div className="col-12 col-lg-5 col-md-6 col-sm-12 text-start p-3">
                    <h1 className="banner-highlight-txt pb-3">Let us handle your project, professionally.</h1>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general. </p>

                </div>
                <div className="col-12 col-lg-7 col-md-6 col-sm-12 p-3 ">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" />
                        <input type="email" {...register("email")} placeholder="example@email.com" className="form-control p-2 m-3 w-75 mx-auto bg-light" />
                        <textarea {...register("message")} placeholder="leave your message" className="form-control p-2 m-3 w-75 mx-auto bg-light" style={{ height: "120px" }} />
                        <button type="submit" className="login-btn " >Send<IoIosSend className='text-warning'></IoIosSend></button>



                    </form>
                </div>
            </div>
            <p className='m-0 p-3 '>copyright - 2022| Develop by: Taseenul Hoque Bappi </p>
        </div>
    );
};

export default Contact;