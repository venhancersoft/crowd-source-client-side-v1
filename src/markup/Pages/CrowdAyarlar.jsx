import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';
import Profilesidebar from '@/markup/Element/Profilesidebar';

function Jobprofile() {
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
                                            <h5 className="font-weight-700 pull-left text-uppercase">Ayarlar</h5>
                                            <Link to={'./'}
                                                  className="site-button right-arrow button-sm float-right">Geri</Link>
                                        </div>
                                        <form>
                                            <div className="row m-b30">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Eski Şifreyi Gir</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Yeni Şifreyi Gir</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Yeni Şifreyi Tekrarla:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="site-button m-b30">Save Setting</button>
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

export default Jobprofile;