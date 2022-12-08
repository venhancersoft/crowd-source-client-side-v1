import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Header2 from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';
import Profilesidebar from '@/markup/Element/Profilesidebar';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
function Jobprofile() {
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
                                        <h4>Mülakat Talep Et</h4>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Tarih:</label>
                                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
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

export default Jobprofile;