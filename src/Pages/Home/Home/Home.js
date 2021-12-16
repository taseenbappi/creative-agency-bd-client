import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="bg ">
                <Navigation></Navigation>
                <Banner></Banner>

            </div>
            <Partner></Partner>
            <Services></Services>
        </div>
    );
};

export default Home;