import React from 'react';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import TargetProfiles from '../components/TargetProfiles';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ValueProposition />
            <TargetProfiles />
            <Services />
        </div>
    );
};

export default Home;
