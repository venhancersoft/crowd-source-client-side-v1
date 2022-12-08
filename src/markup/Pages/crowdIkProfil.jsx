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
                                            <h4 className="font-weight-700 pull-left text-uppercase">Profil</h4>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Şirketin Adı</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Sektör</label>
                                                    <Form.Control as="select" custom className="select-btn">
                                                        <option>Sektör Seçiniz</option>
                                                        <option>Construction</option>
                                                        <option>Corodinator</option>
                                                        <option>Employer</option>
                                                        <option>Financial Career</option>
                                                        <option>Information Technology</option>
                                                        <option>Marketing</option>
                                                        <option>Quality check</option>
                                                        <option>Real Estate</option>
                                                        <option>Sales</option>
                                                        <option>Supporting</option>
                                                        <option>Teaching</option>
                                                    </Form.Control>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Telefon:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Adres:</label>
                                                    <textarea className="form-control" />
                                                </div>
                                            </div>
                                            <button className="site-button m-b30">Kaydet</button>
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