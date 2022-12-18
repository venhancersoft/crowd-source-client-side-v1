import React, {useLayoutEffect} from 'react';
import Header from '@/markup/Layout/Header';
import CountUp from 'react-countup';
import Jobcategories from '@/markup/Element/Jobcategories';

import bnr1 from '@/images/main-slider/slide1.jpg';
import {useStore} from '@/store/store';

function Homepage() {
    const auth = useStore(state => state.auth);
    useLayoutEffect(() => {
        if(!auth){
            location.href = '/login'
        }
    },[auth])
    return (
        <div className="page-wraper">
            <Header/>
            <div className="page-content">
                <div className="dez-bnr-inr dez-bnr-inr-md overlay-black-dark"
                     style={{backgroundImage: 'url(' + bnr1 + ')'}}>
                    <div className="container">
                        <div className="dez-bnr-inr-entry align-m text-white">
                            <div className=" job-search-form">
                                <h2 className="text-center">Yeni İşinizi Arayın</h2>

                                    <div className="input-group">
                                        <input type="text" className="form-control"
                                               placeholder="İş Adı"/>
                                        <input type="text" className="form-control"
                                               placeholder="İl, ilçe"/>
                                        <div className="input-group-prepend">
                                            <button className="site-button">Ara</button>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full job-categories content-inner-2 bg-white">
                    <div className="container">
                        <div className="section-head d-flex head-counter clearfix">
                            <div className="mr-auto">
                                <h2 className="m-b5">Populer Kategoriler</h2>
                                <h6 className="fw3">20 den fazla</h6>
                            </div>
                            <div className="head-counter-bx">
                                <h2 className="m-b5 counter"><CountUp end={1800} duration={5}/></h2>
                                <h6 className="fw3">İş yayınlandı</h6>
                            </div>
                        </div>
                        <Jobcategories/>
                    </div>
                </div>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default Homepage;