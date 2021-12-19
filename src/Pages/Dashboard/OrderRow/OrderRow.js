import React from 'react';

const OrderRow = (props) => {

    const { _id, customer_name, email, price, service_title, project_details } = props.order;

    return (
        <tr className="justify-content-center align-items-center ">
            {/* <th scope="row">{}</th> */}
            <td className=" ">{customer_name}</td>
            <td className="">{email}</td>
            <td className="">{price}</td>
            <td className="">{service_title}</td>
            <td className="">{project_details}</td>

            <td>
                <button className="btn btn-success m-1" >+</button>
                <button className="btn btn-danger" >X</button>
            </td>
        </tr>
    );
};

export default OrderRow;