import React from 'react';
import {Link} from 'react-router-dom';
import Header from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';
import Jobsearchform from '@/markup/Element/Jobsearchform';

import bnr from '@/images/banner/bnr1.jpg';

import pic1 from '@/images/city/pic1.jpg';
import pic2 from '@/images/city/pic2.jpg';
import pic3 from '@/images/city/pic3.jpg';
import pic4 from '@/images/city/pic4.jpg';
import pic5 from '@/images/city/pic5.jpg';
import pic6 from '@/images/city/pic6.jpg';
import pic7 from '@/images/city/pic7.jpg';
import pic8 from '@/images/city/pic8.jpg';

import logo1 from '@/images/logo/logo1.jpg';
import logo2 from '@/images/logo/logo2.jpg';
// import logo3 from '@/images/logo/logo3.jpg';
import logo4 from '@/images/logo/logo4.jpg';
import logo5 from '@/images/logo/logo5.jpg';
import logo6 from '@/images/logo/logo6.jpg';
import logo7 from '@/images/logo/logo7.jpg';
import logo8 from '@/images/logo/logo8.jpg';
import logo9 from '@/images/logo/logo9.jpg';
import logo10 from '@/images/logo/logo10.jpg';

const cityBox = [
    {image: pic1, title: 'Iraq',},
    {image: pic2, title: 'Argentina',},
    {image: pic3, title: 'Indonesia',},
    {image: pic4, title: 'Gambia',},
    {image: pic5, title: 'India',},
    {image: pic6, title: 'Thailand',},
    {image: pic7, title: 'Banjul',},
    {image: pic8, title: 'Spain',},
]
const companyLogo = [
    {image: logo1},
    {image: logo2},
    {image: logo2},
    {image: logo4},
    {image: logo5},
    {image: logo6},
    {image: logo7},
    {image: logo8},
    {image: logo9},
    {image: logo10},
]

function Categoryalljob() {
    return (
        <>
            <Header/>
            <div className="page-content">
                <div className="dez-bnr-inr jobs-category overlay-black-middle"
                     style={{backgroundImage: 'url(' + bnr + ')'}}>
                    <div className="container">
                        <div className="dez-bnr-inr-entry">
                            <Jobsearchform/>
                            <div className="category-jobs-info">
                                <div className="nav">
                                    <ul>
                                        <li className="active"><Link to={'/category-all-jobs'}>All Jobs</Link></li>
                                        <li><Link to={'/category-company-jobs'}>Jobs by Company</Link></li>
                                        <li><Link to={'/category-jobs'}>Jobs by Category</Link></li>
                                        <li><Link to={'/category-location-jobs'}>Jobs by Location</Link></li>
                                        <li><Link to={'/category-designations-jobs'}>Jobs by Designation</Link></li>
                                        <li><Link to={'/category-skill-jobs'}>Jobs by Skill</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-block">
                    <div className="section-full content-inner jobs-category-bx">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 m-b30">
                                    <div className="job-bx bg-white">
                                        <div className="job-bx-title clearfix">
                                            <h6 className="text-uppercase">Browse Jobs by Locations
                                                <Link to={'#'} className="float-right font-12 text-primary">View
                                                    All</Link></h6>
                                        </div>
                                        <div className="row">
                                            {cityBox.map((item, index) => (
                                                <div className="col-lg-3 col-sm-6 col-md-6 m-b30" key={index}>
                                                    <Link to={'#'}>
                                                        <div className="city-bx align-items-end d-flex"
                                                             style={{backgroundImage: `url(${item.image})`}}>
                                                            <div className="city-info">
                                                                <h5>{item.title}</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30">
                                    <div className="job-bx bg-white">
                                        <div className="job-bx-title clearfix">
                                            <h6 className="text-uppercase">Browse Jobs by Industries
                                                <Link to={'#'} className="float-right font-12 text-primary">View
                                                    All</Link></h6>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Android Jobs</Link></li>
                                                    <li><Link to={'#'}>WordPress Jobs</Link></li>
                                                    <li><Link to={'#'}>eCommerce Jobs</Link></li>
                                                    <li><Link to={'#'}>Design Jobs</Link></li>
                                                    <li><Link to={'#'}>Mobile Jobs</Link></li>
                                                    <li><Link to={'#'}>MySQL Jobs</Link></li>
                                                    <li><Link to={'#'}>SEO Jobs</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Website Design</Link></li>
                                                    <li><Link to={'#'}>Web Development</Link></li>
                                                    <li><Link to={'#'}>Web Design</Link></li>
                                                    <li><Link to={'#'}>Programming Jobs</Link></li>
                                                    <li><Link to={'#'}>JavaScript Jobs</Link></li>
                                                    <li><Link to={'#'}>Developer Jobs</Link></li>
                                                    <li><Link to={'#'}>Software Jobs</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30">
                                    <div className="job-bx bg-white">
                                        <div className="job-bx-title clearfix">
                                            <h6 className="text-uppercase">Browse Jobs by Functional Areas
                                                <Link to={'#'} className="float-right font-12 text-primary">View
                                                    All</Link></h6>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Email Marketing</Link></li>
                                                    <li><Link to={'#'}>Lead Generation</Link></li>
                                                    <li><Link to={'#'}>Public Relations</Link></li>
                                                    <li><Link to={'#'}>Telemarketing Jobs</Link></li>
                                                    <li><Link to={'#'}>Display Advertising</Link></li>
                                                    <li><Link to={'#'}>Marketing Strategy</Link></li>
                                                    <li><Link to={'#'}>Search Engine Marketing</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Other - Sales & Marketing</Link></li>
                                                    <li><Link to={'#'}>Display Advertising</Link></li>
                                                    <li><Link to={'#'}>Market & Customer</Link></li>
                                                    <li><Link to={'#'}>Search Engine Optimization</Link></li>
                                                    <li><Link to={'#'}>Social Media Marketing</Link></li>
                                                    <li><Link to={'#'}>Search Engine Marketing</Link></li>
                                                    <li><Link to={'#'}>Marketing Strategy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 m-b30">
                                    <div className="job-bx clearfix bg-white">
                                        <div className="job-bx-title clearfix">
                                            <h6 className="text-uppercase">Browse Jobs by Companies
                                                <Link to={'#'} className="float-right font-12 text-primary">View
                                                    All</Link></h6>
                                        </div>
                                        <ul className="company-logo-wg clearfix">
                                            {companyLogo.map((item, index) => (
                                                <li className="brand-logo" key={index}>
                                                    <Link to={'#'}><img src={item.image} alt=""/></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30">
                                    <div className="job-bx bg-white">
                                        <div className="job-bx-title clearfix">
                                            <h6 className="text-uppercase">Browse Jobs by Designations
                                                <Link to={'#'} className="float-right font-12 text-primary">View
                                                    All</Link></h6>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Email Marketing</Link></li>
                                                    <li><Link to={'#'}>Lead Generation</Link></li>
                                                    <li><Link to={'#'}>Public Relations</Link></li>
                                                    <li><Link to={'#'}>Telemarketing Jobs</Link></li>
                                                    <li><Link to={'#'}>Display Advertising</Link></li>
                                                    <li><Link to={'#'}>Marketing Strategy</Link></li>
                                                    <li><Link to={'#'}>Search Engine Marketing</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Other - Sales & Marketing</Link></li>
                                                    <li><Link to={'#'}>Display Advertising</Link></li>
                                                    <li><Link to={'#'}>Market & Customer</Link></li>
                                                    <li><Link to={'#'}>Search Engine Optimization</Link></li>
                                                    <li><Link to={'#'}>Social Media Marketing</Link></li>
                                                    <li><Link to={'#'}>Search Engine Marketing</Link></li>
                                                    <li><Link to={'#'}>Marketing Strategy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30">
                                    <div className="job-bx bg-white">
                                        <div className="job-bx-title clearfix">
                                            <h6 className="text-uppercase">Browse Jobs by Skills
                                                <Link to={'#'} className="float-right font-12 text-primary">View
                                                    All</Link></h6>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Android Jobs</Link></li>
                                                    <li><Link to={'#'}>WordPress Jobs</Link></li>
                                                    <li><Link to={'#'}>eCommerce Jobs</Link></li>
                                                    <li><Link to={'#'}>Design Jobs</Link></li>
                                                    <li><Link to={'#'}>Mobile Jobs</Link></li>
                                                    <li><Link to={'#'}>MySQL Jobs</Link></li>
                                                    <li><Link to={'#'}>SEO Jobs</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <ul className="category-list">
                                                    <li><Link to={'#'}>Website Design Jobs</Link></li>
                                                    <li><Link to={'#'}>Web Development Jobs</Link></li>
                                                    <li><Link to={'#'}>Web Design Jobs</Link></li>
                                                    <li><Link to={'#'}>Programming Jobs</Link></li>
                                                    <li><Link to={'#'}>JavaScript Jobs</Link></li>
                                                    <li><Link to={'#'}>Developer Jobs</Link></li>
                                                    <li><Link to={'#'}>Software Jobs</Link></li>
                                                </ul>
                                            </div>
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

export default Categoryalljob;