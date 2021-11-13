import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FooterBottom from '../../Shared/FooterBottom/FooterBottom';
import Header from '../../Shared/Header/Header';
import Topbar from '../../Shared/Topbar/Topbar';
import AboutContent from '../AboutContent/AboutContent';

const AboutUs = () => {
    return (
        <div>
            <Topbar/>
            <Header/>
            <AboutContent/>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default AboutUs;