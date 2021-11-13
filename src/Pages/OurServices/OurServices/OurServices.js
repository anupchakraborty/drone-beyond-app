import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FooterBottom from '../../Shared/FooterBottom/FooterBottom';
import Header from '../../Shared/Header/Header';
import Topbar from '../../Shared/Topbar/Topbar';
import OurServiceContent from '../OurServiceContent/OurServiceContent';

const OurServices = () => {
    return (
        <div>
            <Topbar/>
            <Header/>
            <OurServiceContent/>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default OurServices;