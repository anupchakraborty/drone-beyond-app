import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FooterBottom from '../../Shared/FooterBottom/FooterBottom';
import Header from '../../Shared/Header/Header';
import Topbar from '../../Shared/Topbar/Topbar';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Header></Header>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Home;