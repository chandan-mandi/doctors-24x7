import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import MakeAnAppointment from './MakeAnAppointment/MakeAnAppointment';
import OurFacilities from './OurFacilities/OurFacilities';
import TopServices from './TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TopServices></TopServices>
            <OurFacilities></OurFacilities>
            <MakeAnAppointment></MakeAnAppointment>
        </div>
    );
};

export default Home;