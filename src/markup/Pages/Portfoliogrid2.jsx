import React from 'react';
import Header from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';
import PageTitle from '@/markup/Layout/PageTitle';
import Tab1 from '@/markup/Element/Tab1';

import bnr from '@/images/banner/bnr2.jpg';

function Portfoliogrid2() {
    return (
        <>
            <Header/>
            <div className="page-content bg-white">
                <div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage: 'url( ' + bnr + ')'}}>
                    <PageTitle motherName="Home" activeName="Portfolio Masonry"/>
                </div>
                <div className="content-block">
                    <div className="section-full content-inner-2 portfolio-box">
                        <div className="container">
                            <div className="section-head text-black text-center m-b20">
                                <h2 className="m-b10">Our Portfolio</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard.</p>
                            </div>
                            <Tab1/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Portfoliogrid2;