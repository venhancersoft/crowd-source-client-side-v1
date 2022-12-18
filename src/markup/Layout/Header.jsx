import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout';

import logo2 from '@/images/logo.png';

const Header = () => {
    return (
        <>
            <header className="site-header mo-left header fullwidth">
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix">
                        <div className="container clearfix">

                            <div className="logo-header mostion">
                                <Link to={'/'}><img src={logo2} className="logo" alt="img"/></Link>
                            </div>

                            <button className="navbar-toggler collapsed navicon  justify-content-end" type="button"
                                    data-toggle="collapse" data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Logout/>
                                </div>
                            </div>

                            <div className="header-nav navbar-collapse collapse myNavbar justify-content-start"
                                 id="navbarNavDropdown">
                                <div className="logo-header mostion d-md-block d-lg-none">
                                    <img src={logo2} alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;

