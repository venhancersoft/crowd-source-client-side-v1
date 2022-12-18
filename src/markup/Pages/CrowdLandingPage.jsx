import React from 'react';
import {FaArrowRight, FaCircle, FaMapMarker, FaMarker, FaStar} from 'react-icons/all';
import Companies from '@/images/landing/Company.png'
import ReactLogo from '@/images/landing/react.png'
import CPlusPlus from '@/images/landing/c++.png'
import RNLogo from '@/images/landing/rn.png'
import Android from '@/images/landing/android.png'
import IOS from '@/images/landing/ios.png'
import WorkFlow from '@/images/landing/workflow.png'
import gencay from '@/images/team/gencay.jpg';

function LandingPage() {
    // const auth = useStore(state => state.auth);

    return (
        <div className="landing">
            <section id="top-section">
                <div className="container">
                    <div className="header">
                        <div className="left-header">
                            <div id="logo">Talenter</div>
                            <div className="menu-items">
                                <div className="selected">Anasayfa</div>
                                <div>Yetenek Bul</div>
                                <div>İş Bul</div>
                                <div>Neden Talenter?</div>
                            </div>
                        </div>
                        <div className="right-header">
                            <div>Giriş Yap</div>
                            <div className="get-started">Hadi Başlayalım</div>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="left-hero">
                            <div className="left-hero-title">İşiniz için<span>mükemmel</span> yeteneği keşfedin.
                            </div>
                            <div className="left-hero-desc">
                                Talenter, yapay zeka tabanlı eşleştirme ile birinci sınıf yetenekler edinmeyi kolaylaştırır.
                                işi doğru yapmanıza yardımcı olur
                            </div>
                            <div className="left-hero-actions">
                                <div className="hire-a-talent">
                                    Yeteneklerle iletişime geç
                                </div>
                                <div className="apply-as-a-talent">
                                    Freelancer Ol <FaArrowRight color="F1BD4C"/>
                                </div>
                            </div>
                        </div>
                        <div className="right-hero">
                            <div className="hero-1">

                            </div>
                            <div className="hero-2">
                                <div className="hero-3"></div>
                                <div className="hero-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="brand-companies">
                <div className="container">
                    <img src={Companies}/>
                </div>
            </section>
            <section id="services">
                <div className="container">
                    <div id="services-header">
                        <div className="title">En çok talep gören yetenekler ve hizmetler</div>
                        <div className="desc">Başka bir beceri mi arıyorsunuz? Freelancelere göz atın</div>
                    </div>
                    <div id="services-jobs">
                        <div className="cards">
                            <div className="card">
                                <div className="card-logo">
                                    <img src={ReactLogo}/>
                                </div>
                                <div className="card-description">
                                    <div className="card-title">React.js Developer</div>
                                    <div className="card-person-count"><span></span>1895 Kişi</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-logo">
                                    <img src={CPlusPlus}/>
                                </div>
                                <div className="card-description">
                                    <div className="card-title">C++ Developer</div>
                                    <div className="card-person-count"><span></span>1895 Kişi</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-logo">
                                    <img src={RNLogo}/>
                                </div>
                                <div className="card-description">
                                    <div className="card-title">React Native Developer</div>
                                    <div className="card-person-count"><span></span>1895 Kişi</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-logo">
                                    <img src={Android}/>
                                </div>
                                <div className="card-description">
                                    <div className="card-title">Android Developer</div>
                                    <div className="card-person-count"><span></span>1895 Kişi</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-logo">
                                    <img src={IOS}/>
                                </div>
                                <div className="card-description">
                                    <div className="card-title">IOS Developer</div>
                                    <div className="card-person-count"><span></span>1895 Kişi</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-logo">
                                    <img src={WorkFlow}/>
                                </div>
                                <div className="card-description">
                                    <div className="card-title">WebFlow Developer</div>
                                    <div className="card-person-count"><span></span>1895 Kişi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="all-jobs">
                        <span>Tüm İşleri Göster</span>
                        <FaArrowRight />
                    </span>
                    <div id="services-freelancer">
                        <div className="cards">
                            <div className="card">
                                <div className="freelancer-header">
                                    <div className="freelancer-logo">
                                        <img src={gencay}/>
                                    </div>
                                    <div className="freelancer-title">
                                        <div className="freelancer-name">Gencay Doyurucu</div>
                                        <div className="freelancer-info">
                                                <span>
                                                    <FaStar size={'14'}
                                                            color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span>En Yüksek Oy</span>
                                                </span>
                                                <span>
                                                    <FaStar size={'14'}
                                                            color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span>5.0 (100 Jobs)</span>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="freelancer-body">
                                    <div className="freelancer-job-title">Senior Java Developer</div>
                                    <div style={{display: 'flex', gap: '8px'}}>
                                        <span>
                                                    <FaCircle size={'8'}
                                                              color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span style={{marginLeft:'5px'}}>Full Time</span>
                                                </span>
                                        <span>
                                                    <FaCircle size={'8'}
                                                              color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span style={{marginLeft:'5px'}}>Onsite</span>
                                                </span>
                                    </div>

                                </div>
                                <div className="freelancer-footer">
                                    <div className="freelancer-pay">
                                        <span>$25</span>/ Danışmanlık
                                    </div>
                                    <div className="freelancer-button"><span>See more</span></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="freelancer-header">
                                    <div className="freelancer-logo">
                                        <img src={gencay}/>
                                    </div>
                                    <div className="freelancer-title">
                                        <div className="freelancer-name">Halil Ceyhan</div>
                                        <div className="freelancer-info">
                                                <span>
                                                    <FaMapMarker size={'14'}
                                                            color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span>İstanbul</span>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="freelancer-body">
                                    <div className="freelancer-job-title">C++ Developer</div>
                                    <div style={{display: 'flex', gap: '8px'}}>
                                        <span>
                                                    <FaCircle size={'8'}
                                                              color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span style={{marginLeft:'5px'}}>Full Time</span>
                                                </span>
                                        <span>
                                                    <FaCircle size={'8'}
                                                              color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span style={{marginLeft:'5px'}}>Onsite</span>
                                                </span>
                                    </div>

                                </div>
                                <div className="freelancer-footer">
                                    <div className="freelancer-pay">
                                        <span>$3000</span>/ Aylık
                                    </div>
                                    <div className="freelancer-button"><span>See more</span></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="freelancer-header">
                                    <div className="freelancer-logo">
                                        <img src={gencay}/>
                                    </div>
                                    <div className="freelancer-title">
                                        <div className="freelancer-name">Gencay Doyurucu</div>
                                        <div className="freelancer-info">
                                            <FaMapMarker size={'14'}
                                                         color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                            <span>İstanbul</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="freelancer-body">
                                    <div className="freelancer-job-title">IOS Developer</div>
                                    <div style={{display: 'flex', gap: '8px'}}>
                                        <span>
                                                    <FaCircle size={'8'}
                                                              color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span style={{marginLeft:'5px'}}>Full Time</span>
                                                </span>
                                        <span>
                                                    <FaCircle size={'8'}
                                                              color={getComputedStyle(document.documentElement).getPropertyValue('--landing-yellow')}/>
                                                    <span style={{marginLeft:'5px'}}>Onsite</span>
                                                </span>
                                    </div>

                                </div>
                                <div className="freelancer-footer">
                                    <div className="freelancer-pay">
                                        <span>$30</span>/ Danışmanlık
                                    </div>
                                    <div className="freelancer-button"><span>See more</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="all-freelancer">
                        <span>Tüm Freelancerları Göster</span>
                        <FaArrowRight />
                    </span>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;