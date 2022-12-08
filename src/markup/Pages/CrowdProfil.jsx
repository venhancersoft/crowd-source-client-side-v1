import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Header2 from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';
import Profilesidebar from '@/markup/Element/Profilesidebar';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function CrowdProfil() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <Header2/>
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white browse-job p-t50 p-b20">
                        <div className="container">
                            <div className="row">
                                <Profilesidebar/>
                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="job-bx job-profile">
                                        <div className="job-bx-title clearfix">
                                            <h5 className="font-weight-700 pull-left text-uppercase">Profil</h5>
                                            <Link to={'./'}
                                                  className="site-button right-arrow button-sm float-right">Geri</Link>
                                        </div>
                                        <form>
                                            <div className="row m-b30">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Ad</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Alexander"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Soyadınız</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Weir"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Meslek:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Web Designer"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Tarih:</label>
                                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Languages:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="English"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Age:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="32 Year"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Current Salary($):</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="2000$"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Expected Salary:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="2500$"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Description:</label>
                                                        <textarea className="form-control">
														</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-bx-title clearfix">
                                                <h5 className="font-weight-700 pull-left text-uppercase">Contact
                                                    Information</h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Phone:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="+1 123 456 7890"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Email Address:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="info@example.com"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Country:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Country Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Postcode:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="112233"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>City:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="London"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Full Address:</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="New york City"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="site-button m-b30">Kaydet</button>
                                        </form>
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

export default CrowdProfil;