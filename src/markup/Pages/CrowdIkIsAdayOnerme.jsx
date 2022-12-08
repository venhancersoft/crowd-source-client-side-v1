import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';
import {Form} from 'react-bootstrap';
import GoogleMaps from 'simple-react-google-maps';

import icon3 from '@/images/logo/icon3.jpg'
import ProfileIKSidebar from '@/markup/Element/ProfileIKSidebar';

function Companyprofile() {
    return (
        <>
            <Header2/>
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white p-t50 p-b20">
                        <div className="container">
                            <div className="row">
                                <ProfileIKSidebar />
                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="job-bx submit-resume">
                                        <div className="job-bx-title clearfix">
                                            <h4 className="font-weight-700 pull-left text-uppercase">Aday Önerme</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Companyprofile;