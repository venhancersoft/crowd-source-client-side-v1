import React from 'react';
import {Link} from 'react-router-dom';
import Header from '@/markup/Layout/Header';
import Footer from '@/markup/Layout/Footer';
import PageTitle from '@/markup/Layout/PageTitle';
import Sidebar from '@/markup/Element/Sidebar';

import bnr from '@/images/banner/bnr1.jpg';
import pic1 from '@/images/blog/grid/pic1.jpg';
import pic2 from '@/images/blog/grid/pic2.jpg';
import pic3 from '@/images/blog/grid/pic3.jpg';
import pic4 from '@/images/blog/grid/pic4.jpg';

const blogGride = [
    {image: pic4},
    {image: pic3},
    {image: pic2},
    {image: pic1},
    {image: pic4},
    {image: pic3},
    {image: pic2},
    {image: pic1},
    {image: pic4},
    {image: pic3},
    {image: pic2},
    {image: pic1},
]

function Blogdetailgridsidebar() {
    return (
        <>
            <Header/>
            <div className="page-content bg-white">
                <div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage: 'url(' + bnr + ' )'}}>
                    <PageTitle motherName="Home" activeName="Blog Detailed Grid Sidebar"/>
                </div>
                <div className="content-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12">
                                <div id="masonry" className="dez-blog-grid-3 row">
                                    {blogGride.map((item, index) => (
                                        <div className="post card-container col-lg-6 col-md-6 col-sm-6" key={index}>
                                            <div className="blog-post blog-grid blog-style-1">
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={'/blog-details'}><img src={item.image} alt=""/></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-meta">
                                                        <ul className="d-flex align-items-center">
                                                            <li className="post-date"><i className="fa fa-calendar"></i>September
                                                                18, 2017
                                                            </li>
                                                            <li className="post-comment"><i
                                                                className="fa fa-comments-o"></i><Link
                                                                to={'#'}>5k</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="dez-post-title ">
                                                        <h5 className="post-title font-20"><Link to={'/blog-details'}>Do
                                                            you have a job that the average person doesnӴ even know
                                                            exists?</Link></h5>
                                                    </div>
                                                    <div className="dez-post-text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem Ipsum has been the industry's
                                                            standard dummy.</p>
                                                    </div>
                                                    <div className="dez-post-readmore blog-share">
                                                        <Link to={'/blog-details'} title="READ MORE" rel="bookmark"
                                                              className="site-button-link"><span className="fw6">READ MORE</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pagination-bx clearfix text-center">
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
                            <div className="col-lg-4 col-md-5 col-sm-12 sticky-top">
                                <Sidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Blogdetailgridsidebar;