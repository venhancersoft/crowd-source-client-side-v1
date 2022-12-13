import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import Logout from './Logout';

import logo2 from '@/images/logo.png';
import bnr3 from '@/images/background/bg3.jpg';


class Header extends Component {
    state = {
        // initial state
        show: false,
    }

    handleClose = () => {
        this.setState({show: false});
    };
    handleShow = () => {
        this.setState({show: true});
    };

    componentDidMount() {
        // sidebar open/close

        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            //   Navicon.classList.toggle('open');
        }

        Navicon.addEventListener('click', toggleFunc);

        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () {
                checkLi(this)
            });
        }

        function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll("li").forEach(el =>
                (current.parentElement !== el) ? el.classList.remove('open') : ''
            );
            setTimeout(() => {
                current.parentElement.classList.toggle('open');
            }, 100);
        }
    }

    render() {
        return (
            <>
                <header className="site-header mo-left header fullwidth">
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar clearfix">
                            <div className="container clearfix">

                                <div className="logo-header mostion">
                                    <Link to={import.meta.env.BASE_URL}><img src={logo2} className="logo" alt="img"/></Link>
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
                                        <Link to={import.meta.env.BASE_URL} className="dez-page"><img src={logo2} alt=""/></Link>
                                    </div>
                                    <ul className="nav navbar-nav">
                                        <li className="">
                                            <Link  to={import.meta.env.BASE_URL}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={import.meta.env.BASE_URL + "profil"}>Profil</Link>
                                        </li>
                                        <li>
                                            <Link to={import.meta.env.BASE_URL + 'ik-profil'}>İK</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;

