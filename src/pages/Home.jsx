import React from 'react';
import Hero from '../components/Hero';
import TargetProfiles from '../components/TargetProfiles';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <TargetProfiles />
        </div>
    );
};

export default Home;
