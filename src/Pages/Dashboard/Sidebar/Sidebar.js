import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderList from '../OrderList/OrderList';
import Orders from '../Orders/Orders';
import Review from '../Review/Review';
import ServiceList from '../SerivceList/ServiceList';

const Sidebar = () => {
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://glacial-gorge-61316.herokuapp.com/users/admin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.message)
            })
    }, [user])

    return (
        <>
            <Navigation></Navigation>
            {/* <div className='col-md-3 p-3'>
                <ul className='list-group sticky-top  py-2'>
                    <NavLink as='li' className='list-group-item  bg-light' to='/order' >
                        Order<span className='badge badge-sm bg-primary'>0</span>
                    </NavLink>
                    <NavLink as='li' className='list-group-item  bg-light' to='/reading'>
                        Service list <span className='badge badge-sm bg-primary'>0</span>
                    </NavLink>
                    <NavLink as='li' className='list-group-item  bg-light' to='/finish'>
                        Review <span className='badge badge-sm bg-primary'>0</span>
                    </NavLink>
                </ul>
            </div> */}
            <div className="row py-3 mx-auto">
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 p-3">
                    <div className="list-group" id="list-tab" role="tablist">

                        {!isAdmin && <a className="list-group-item list-group-item-action active" id="list-order-list" data-bs-toggle="list" href="#list-order" role="tab" aria-controls="list-order">Order</a>}

                        {!isAdmin && <a className="list-group-item list-group-item-action " id="list-orderList-list" data-bs-toggle="list" href="#list-orderList" role="tab" aria-controls="list-orderList">My Order</a>}

                        {!isAdmin && <a className="list-group-item list-group-item-action" id="list-review-list" data-bs-toggle="list" href="#list-review" role="tab" aria-controls="list-review">Review</a>}

                        {isAdmin && <a className="list-group-item list-group-item-action" id="list-service-list" data-bs-toggle="list" href="#list-service" role="tab" aria-controls="list-service">Manage Order Service</a>}

                        {isAdmin && <a className="list-group-item list-group-item-action" id="list-admin-list" data-bs-toggle="list" href="#list-admin" role="tab" aria-controls="list-admin">Make Admin</a>}
                        {isAdmin && <a className="list-group-item list-group-item-action" id="list-addService-list" data-bs-toggle="list" href="#list-addService" role="tab" aria-controls="list-addService">Add Service</a>}

                    </div>
                </div>
                <div className="col-12 col-lg-8 col-md-8 col-sm-12">
                    <div className="tab-content" id="nav-tabContent">

                        <div className="tab-pane fade show active" id="list-order" role="tabpanel" aria-labelledby="list-order-list"><Orders></Orders></div>

                        <div className="tab-pane fade show " id="list-orderList" role="tabpanel" aria-labelledby="list-orderList-list"><OrderList></OrderList></div>

                        <div className="tab-pane fade" id="list-service" role="tabpanel" aria-labelledby="list-service-list"><ServiceList></ServiceList></div>

                        <div className="tab-pane fade" id="list-review" role="tabpanel" aria-labelledby="list-review-list"><Review></Review></div>

                        <div className="tab-pane fade" id="list-admin" role="tabpanel" aria-labelledby="list-admin-list"><MakeAdmin></MakeAdmin></div>

                        <div className="tab-pane fade" id="list-addService" role="tabpanel" aria-labelledby="list-addService-list"><AddService></AddService></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;