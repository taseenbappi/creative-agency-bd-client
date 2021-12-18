import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Orders from '../Orders/Orders';
import Review from '../Review/Review';

const Sidebar = () => {
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
                <div className="col-4 p-3">
                    <div className="list-group" id="list-tab" role="tablist">

                        <a className="list-group-item list-group-item-action active" id="list-order-list" data-bs-toggle="list" href="#list-order" role="tab" aria-controls="list-order">Order</a>

                        <a className="list-group-item list-group-item-action" id="list-review-list" data-bs-toggle="list" href="#list-review" role="tab" aria-controls="list-review">Review</a>

                        <a className="list-group-item list-group-item-action" id="list-service-list" data-bs-toggle="list" href="#list-service" role="tab" aria-controls="list-service">Service List</a>

                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-order" role="tabpanel" aria-labelledby="list-order-list"><Orders></Orders></div>
                        <div className="tab-pane fade" id="list-service" role="tabpanel" aria-labelledby="list-service-list">Hello2</div>
                        <div className="tab-pane fade" id="list-review" role="tabpanel" aria-labelledby="list-review-list"><Review></Review></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;