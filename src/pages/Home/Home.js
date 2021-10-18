import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import TopServices from './TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TopServices></TopServices>
        </div>
    );
};

export default Home;