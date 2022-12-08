import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import icon3 from '@/images/logo/icon3.jpg';

function Profilesidebar() {
    const router = useRouteMatch();
    const path = router.path;
    return (
        <div className="col-xl-3 col-lg-4 m-b30">
            <div className="sticky-top">
                <div className="candidate-info company-info">
                    <div className="candidate-detail text-center">
                        <div className="canditate-des">
                            <Link to={'#'}>
                                <img alt="" src={icon3}/>
                            </Link>
                            <div className="upload-link" title="update" data-toggle="tooltip"
                                 data-placement="right">
                                <input type="file" className="update-flie"/>
                                <i className="fa fa-pencil"></i>
                            </div>
                        </div>
                        <div className="candidate-title">
                            <h4 className="m-b5"><Link to={'#'}>@COMPANY</Link></h4>
                        </div>
                    </div>
                    <ul>
                        <li><Link to={'/ik-profil'} className={path === '/ik-profil' ? 'active' : null} >
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span>Profil</span></Link></li>
                        <li><Link to={'/ik-cv'}  className={path === '/ik-cv' ? 'active' : null}>
                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                            <span>CVler</span></Link></li>
                        <li><Link to={'/ik-is-yayinlama'}  className={path === '/ik-is-yayinlama' ? 'active' : null}>
                            <i className="fa fa-random" aria-hidden="true"></i>
                            <span>İş Yayınlama</span></Link></li>
                        <li><Link to={'/ik-teklifte-bulunanlar'}  className={path === '/ik-teklifte-bulunanlar' ? 'active' : null}>
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                            <span>Teklifte Bulunanlar</span></Link></li>
                        <li><Link to={'/ik-aday-puanlama'}  className={path === '/ik-aday-puanlama' ? 'active' : null}>
                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                            <span>Aday Puanlama</span></Link></li>
                        <li><Link to={'/ik-aday-onerme'}  className={path === '/ik-aday-onerme' ? 'active' : null}>
                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                            <span>Aday Önerme</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profilesidebar;