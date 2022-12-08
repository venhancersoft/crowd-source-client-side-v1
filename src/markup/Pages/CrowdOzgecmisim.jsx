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
                                            <h5 className="font-weight-700 pull-left text-uppercase">Özgeçmiş</h5>
                                            <Link to={'./'}
                                                  className="site-button right-arrow button-sm float-right">Geri</Link>
                                        </div>
                                        <form>
                                            <div className="row m-b30">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="post-bx">
                                                        <div className="job-post-info m-a0">
                                                            <div id="it_skills_bx" className="job-bx table-job-bx bg-white m-b30">
                                                                <div className="d-flex">
                                                                    <h4>Yeteneklerim</h4>
                                                                </div>
                                                                <div className="job-time m-t15 m-b10">
                                                                    <a className="mr-1" href="#"><span>PHP</span></a><a
                                                                    className="mr-1"
                                                                    href="#"><span>Angular</span></a><a
                                                                    className="mr-1"
                                                                    href="#"><span>Bootstrap</span></a><a
                                                                    className="mr-1"
                                                                    href="#"><span>Wordpress</span></a></div>
                                                            </div>
                                                            <div id="it_skills_bx" className="job-bx table-job-bx bg-white m-b30">
                                                                <div className="d-flex">
                                                                    <h4>İş Deneyimlerim </h4>
                                                                </div>
                                                                <table>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Şirket</th>
                                                                        <th>Görevi</th>
                                                                        <th>Tarih Aralığı</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Facebook</td>
                                                                        <td>3</td>
                                                                        <td>2018</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Microsoft</td>
                                                                        <td>4</td>
                                                                        <td>2013</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Airbnb</td>
                                                                        <td>5</td>
                                                                        <td>2016</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Binance</td>
                                                                        <td>3</td>
                                                                        <td>2018</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>OKX</td>
                                                                        <td>64bit</td>
                                                                        <td>2017</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div id="education" className="job-bx table-job-bx bg-white m-b30">
                                                                <div className="d-flex">
                                                                    <h4>Eğitim </h4>
                                                                </div>
                                                                <table>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Okul</th>
                                                                        <th>Bölüm</th>
                                                                        <th>Tarih Aralığı</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>ODTU</td>
                                                                        <td>3</td>
                                                                        <td>2018</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>İTU</td>
                                                                        <td>4</td>
                                                                        <td>2013</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Bilkent</td>
                                                                        <td>5</td>
                                                                        <td>2016</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div id="attach_resume_bx" className="job-bx bg-white m-b30">
                                                                <h4 className="m-b10">CV Yükleme Alanı</h4>
                                                                <form className="attach-resume">
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12">
                                                                            <div className="form-group">
                                                                                <div className="custom-file">
                                                                                    <p className="m-auto align-self-center">
                                                                                        <i className="fa fa-upload"></i>
                                                                                        Upload Resume File size is 3 MB
                                                                                    </p>
                                                                                    <input type="file" className="site-button form-control"
                                                                                           id="customFile"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                                <p className="text-center">
                                                                    If you do not have a resume document, you may write your brief professional
                                                                    profile <Link to={'#'} className="site-button-link">here</Link>.
                                                                </p>
                                                            </div>
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