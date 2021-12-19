import React, { useEffect, useState } from 'react';
import OrderRow from '../OrderRow/OrderRow';


const OrderList = () => {
    const url = "https://glacial-gorge-61316.herokuapp.com/order";

    const [orderList, SetOrderList] = useState();

    console.log(orderList);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => SetOrderList(data));
    }, [])

    return (
        <div className="container-fluid p-0">

            <div className="p-3 table-responsive">
                <table className="table table-bordered table-sm service-table">
                    <thead>
                        <tr className='bg-light table-header'>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Your Name</th>
                            <th scope="col">Email-ID</th>
                            <th scope="col">Price</th>
                            <th scope="col">service_title</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList?.map(order => <OrderRow
                                key={order._id}
                                order={order}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default OrderList;