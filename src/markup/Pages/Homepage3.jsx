import React from 'react';
import '../../css/reset.css'
import '../../css/landing.css'

function Homepage3() {
    return (
        <>
            <div className="container">
                <header>
                    <div className="logo">
                        <img src="../../images/landing/logo.svg" alt="Logo"/>
                    </div>
                    <nav>
                        <a href="#">Features</a>
                        <a href="#">Team</a>
                        <a href="#">Sign In</a>
                    </nav>
                </header>
                <section id="hero">
                    <div className="hero-image">
                        <img src="../../images/landing/illustration-intro.png" alt="Intro"/>
                    </div>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>
                        Fylo stores all your most important files in one secure location.
                        Access them wherever you need, share and collaborate with friends
                        family, and co-workers.
                    </p>
                    <button className="primary-button">Get Started</button>
                </section>
                <section id="features">
                    <div className="feature-card">
                        <div className="feature-card-image">
                            <img src="../../images/landing/icon-access-anywhere.svg" alt="Feature 1"/>
                        </div>
                        <h3>Access your files, anywhere</h3>
                        <p>
                            The ability to use a smartphone, tablet, or computer to access your
                            account means your files follow you everywhere.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-image">
                            <img src="../../images/landing/icon-security.svg" alt="Feature 1"/>
                        </div>
                        <h3>Security you can trust</h3>
                        <p>
                            2-factor authentication and user-controlled encryption are just a
                            couple of the security features we allow to help secure your files.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-image">
                            <img src="../../images/landing/icon-collaboration.svg" alt="Feature 1"/>
                        </div>
                        <h3>Real-time collaboration</h3>
                        <p>
                            Securely share files and folders with friends, family and colleagues
                            for live collaboration. No email attachments required.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-image">
                            <img src="../../images/landing/icon-any-file.svg" alt="Feature 1"/>
                        </div>
                        <h3>Store any type of file</h3>
                        <p>
                            Whether youre sharing holidays photos or work documents, Fylo has
                            you covered allowing for all file types to be securely stored and
                            shared.
                        </p>
                    </div>
                </section>
                <section id="stay-productive">
                    <div className="image-wrapper">
                        <img
                            src="../../images/landing/illustration-stay-productive.png"
                            alt="Stay productive"
                        />
                    </div>
                    <div className="content-wrapper">
                        <h2>Stay productive, wherever you are</h2>
                        <p>
                            Never let location be an issue when accessing your files. Fylo has
                            you covered for all of your file storage needs.
                            <br/>
                            <br/>
                            Securely share files and folders with friends, family and colleagues
                            for live collaboration. No email attachments required.
                        </p>
                        <a href="#"
                        >See how Fylo works
                            <img src="../../images/landing/icon-arrow.svg" aria-hidden="true"/>
                        </a>
                    </div>
                </section>
                <section id="quotes">
                    <div className="quote-card">
                        <p>
                            Fylo has improved our team productivity by an order of magnitude.
                            Since making the switch our team has become a well-oiled
                            collaboration machine.
                        </p>
                        <div className="profile-wrapper">
                            <div className="profile-image">
                                <img src="../../images/landing/profile-1.jpg" alt="Satish Patel"/>
                            </div>
                            <div className="profile-content">
                                <h5>Bruce McKenzie</h5>
                                <h6>Founder & CEO, Huddle</h6>
                            </div>
                        </div>
                    </div>
                    <div className="quote-card">
                        <p>
                            Fylo has improved our team productivity by an order of magnitude.
                            Since making the switch our team has become a well-oiled
                            collaboration machine.
                        </p>
                        <div className="profile-wrapper">
                            <div className="profile-image">
                                <img src="../../images/landing/profile-2.jpg" alt="Satish Patel"/>
                            </div>
                            <div className="profile-content">
                                <h5>Satish Patel</h5>
                                <h6>Founder & CEO, Huddle</h6>
                            </div>
                        </div>
                    </div>
                    <div className="quote-card">
                        <p>
                            Fylo has improved our team productivity by an order of magnitude.
                            Since making the switch our team has become a well-oiled
                            collaboration machine.
                        </p>
                        <div className="profile-wrapper">
                            <div className="profile-image">
                                <img src="../../images/landing/profile-3.jpg" alt="Satish Patel"/>
                            </div>
                            <div className="profile-content">
                                <h5>Satish Patel</h5>
                                <h6>Founder & CEO, Huddle</h6>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="call-to-action">
                    <h2>Get early access today</h2>
                    <p>
                        It only takes a minute to sign up and our free starter tier is
                        extremely generous. If you have any questions, our support team would
                        be happy to help you.
                    </p>
                    <form>
                        <div className="input-wrapper">
                            <input type="text" placeholder="email@example.com"/>
                        </div>
                        <div className="button-wrapper">
                            <button className="primary-button">Get Started For Free</button>
                        </div>
                    </form>
                </section>
            </div>
            <footer>
                <div className="container">
                    <div className="logo">
                        <img src="../../images/landing/logo.svg" alt="Logo"/>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-address">
                            <img src="../../images/landing/icon-location.svg"/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="footer-com">
                            <div className="item">
                                <img src="../../images/landing/icon-phone.svg"/>
                                <p>+1-543-123-4567</p>
                            </div>
                            <div className="item">
                                <img src="../../images/landing/icon-email.svg"/>
                                <p>example@fylo.com</p>
                            </div>
                        </div>
                        <div className="footer-menu">
                            <a href="#">About Us</a>
                            <a href="#">Jobs</a>
                            <a href="#">Press</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="footer-menu">
                            <a href="#">Contact Us</a>
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Homepage3;