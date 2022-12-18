import React from 'react';
import {Link} from 'react-scroll';


function Listingsidebar() {
    return (
        <div className="sticky-top bg-white">
            <div className="candidate-info onepage" style={{cursor: 'pointer'}}>
                <ul>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="resume_headline_bx" smooth={true} offset={-70}
                              duration={500}><span>Özgeçmiş Başlığı</span>
                        </Link>

                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="key_skills_bx" smooth={true} offset={-70}
                              duration={500}><span>Yetenekler</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="employment_bx" smooth={true} offset={-70}
                              duration={500}><span>Deneyimler</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="education_bx" smooth={true} offset={-70}
                              duration={500}><span>Öğrenim Bilgileri</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="projects_bx" smooth={true} offset={-70}
                              duration={500}><span>Projeler</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="profile_summary_bx" smooth={true} offset={-70}
                              duration={500}><span>Kısaca Açıklama</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="accomplishments_bx" smooth={true} offset={-70}
                              duration={500}><span>Başarılar</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="personal_details_bx" smooth={true} offset={-70}
                              duration={500}><span>Kişisel Detaylar</span>
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              className="scroll-bar nav-link" to="attach_resume_bx" smooth={true} offset={-70}
                              duration={500}><span>Özgeçmiş Döküman Eki</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Listingsidebar;