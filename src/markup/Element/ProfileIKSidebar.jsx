import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import icon3 from '@/images/logo/icon3.jpg';

function Profilesidebar() {
    const router = useRouteMatch();
    const pathArr = router.path.split('/');
    const path = pathArr[pathArr.length - 1];
    return (
        <div className="col-xl-3 col-lg-4 m-b30">
            <div className="sticky-top">
                <div className="candidate-info company-info">
                    <div className="candidate-detail text-center">
                        <div className="canditate-des">
                            <Link to={import.meta.env.BASE_URL + '#'}>
                                <img alt="" src={icon3}/>
                            </Link>
                            <div className="upload-link" title="update" data-toggle="tooltip"
                                 data-placement="right">
                                <input type="file" className="update-flie"/>
                                <i className="fa fa-pencil"></i>
                            </div>
                        </div>
                        <div className="candidate-title">
                            <h4 className="m-b5"><Link to={import.meta.env.BASE_URL + '#'}>İşalım HR</Link></h4>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link to={import.meta.env.BASE_URL + 'ik-profil'} className={path === 'ik-profil' ? 'active' : null} >
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <span>Profil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={import.meta.env.BASE_URL + 'ik-is-yayinlama'}  className={path === 'ik-is-yayinlama' ? 'active' : null}>
                                <i className="fa fa-random" aria-hidden="true"></i>
                                <span>İlan Yayınlama</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={import.meta.env.BASE_URL + 'ik-tum-ilanlarim'}  className={path === 'ik-tum-ilanlarim' ? 'active' : null}>
                                <i className="fa fa-random" aria-hidden="true"></i>
                                <span>Tüm İlanlarım</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={import.meta.env.BASE_URL + 'ik-cv'}  className={path === 'ik-cv' ? 'active' : null}>
                                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                <span>Freelancerlar</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profilesidebar;