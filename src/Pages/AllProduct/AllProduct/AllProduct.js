import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FooterBottom from '../../Shared/FooterBottom/FooterBottom';
import Header from '../../Shared/Header/Header';
import Topbar from '../../Shared/Topbar/Topbar';
import ProductsContent from '../ProductsContent/ProductsContent';

const AllProduct = () => {
    return (
        <div>
            <Topbar/>
            <Header/>
            <ProductsContent/>
            <Footer/>
            <FooterBottom/>
        </div>
    );
};

export default AllProduct;