import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';

import Profilesidebar from '@/markup/Element/Profilesidebar';

const contacts = [
    {id: 1, title: 'Social Media Expert', company: 'Facebook',},
    {id: 2, title: 'Web Designer', company: 'Facebook',},
    {id: 3, title: 'Finance Accountant', company: 'Facebook',},
    {id: 4, title: 'Social Media Expert', company: 'Facebook',},
    {id: 5, title: 'Web Designer', company: 'Facebook',},
    {id: 6, title: 'Finance Accountant', company: 'Facebook',},
    {id: 7, title: 'Social Media Expert', company: 'Facebook',},
    {id: 8, title: 'Web Designer', company: 'Facebook',},
    {id: 9, title: 'Finance Accountant', company: 'Facebook',},
    {id: 10, title: 'Social Media Expert', company: 'Facebook',},
]

function Jobsalert() {

    return (
        <>
            <Header2/>
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white p-t50 p-b20">
                        <div className="container">
                            <div className="row">
                                <Profilesidebar/>
                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="job-bx table-job-bx browse-job clearfix">
                                        <div className="job-bx-title clearfix">
                                            <h4 className="font-weight-700 pull-left text-uppercase">Kaydettiğim İşler</h4>
                                        </div>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>İş Adı</th>
                                                <th>İşveren</th>
                                                <th>Yetenekler</th>
                                                <th>Konum</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {contacts.map((contact, index) => (
                                                <tr key={index}>
                                                    <td className="job-name">{contact.title}</td>
                                                    <td className="date">{contact.company}</td>
                                                    <td className="criterias">Javascript, Vuejs, .NET</td>
                                                    <td className="job-links">
                                                        İstanbul
                                                    </td>
                                                </tr>
                                            ))}

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

export default Jobsalert;