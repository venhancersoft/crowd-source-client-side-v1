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
                                            <h4 className="font-weight-700 pull-left text-uppercase">Teklifte Bulunanlar</h4>
                                        </div>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Teklifte Bulunan</th>
                                                <th>İşin Tanımı</th>
                                                <th>Ücret Teklifi</th>
                                                <th>İşlemler</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Freelancer A</td>
                                                <td>React Js işi </td>
                                                <td>250 TL</td>
                                                <td><button>İşi Ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>Freelancer B</td>
                                                <td>React Js işi </td>
                                                <td>250 TL</td>
                                                <td><button>İşi Ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>Freelancer C</td>
                                                <td>DotNet Core işi</td>
                                                <td>250 TL</td>
                                                <td><button>İşi Ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>Freelancer A</td>
                                                <td>DotNet Core işi</td>
                                                <td>250 TL</td>
                                                <td><button>İşi Ver</button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="pagination-bx float-right">
                                            <ul className="pagination">
                                                <li className="previous"><Link to={'#'}><i
                                                    className="ti-arrow-left"></i> Prev</Link></li>
                                                <li className="active"><Link to={'#'}>1</Link></li>
                                                <li><Link to={'#'}>2</Link></li>
                                                <li><Link to={'#'}>3</Link></li>
                                                <li className="next"><Link to={'#'}>Next <i
                                                    className="ti-arrow-right"></i></Link></li>
                                            </ul>
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