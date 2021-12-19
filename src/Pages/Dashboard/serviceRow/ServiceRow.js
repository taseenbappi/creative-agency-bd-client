import axios from 'axios';
import React from 'react';
import './Product.css';

const ServiceRow = (props) => {
    const { _id, customer_name, email, phone, service_title, project_details } = props.serviceItem;
    // const deleteProductHandler = (id) => {
    //     const userConfirmation = window.confirm("Are you sure want to delete your Product?");

    //     if (userConfirmation) {
    //         axios.delete(`https://localhost:5000/placedOrder/${id}`)
    //             .then(response => {

    //                 if (response.data.deletedCount) {
    //                     // setToys(toys);
    //                     alert("deleted product successfully");
    //                 }
    //                 else {
    //                     alert("product not deleted");
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('There was an error!', error);
    //             });
    //     }
    //     else {
    //         return;
    //     }
    // }

    return (
        <tr className="justify-content-center align-items-center ">
            {/* <th scope="row">{}</th> */}
            <td className=" ">{customer_name}</td>
            <td className="">{email}</td>
            <td className="">{service_title}</td>
            <td className="">{project_details}</td>

            <td>
                <button className="btn btn-success m-1" >+</button>
                <button className="btn btn-danger" >X</button>
            </td>
        </tr>
    );
};

export default ServiceRow;