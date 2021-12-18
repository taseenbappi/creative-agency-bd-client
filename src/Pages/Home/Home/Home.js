import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import OurWork from '../OurWork/OurWork';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="bg ">

                <Banner></Banner>

            </div>
            <Partner></Partner>
            <Services></Services>
            <OurWork></OurWork>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;