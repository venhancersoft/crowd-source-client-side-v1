import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import pic1 from '@/images/team/gencay.jpg'
import {useStore} from '@/store/store';

function Profilesidebar() {
    const router = useRouteMatch();
    const pathArr = router.path.split('/');
    const path = pathArr[pathArr.length - 1];
    const auth = useStore(state => state.auth);
    return (
        <div className="col-xl-3 col-lg-4 m-b30">
            <div className="sticky-top">
                <div className="candidate-info">
                    <div className="candidate-detail text-center">
                        <div className="canditate-des">
                            <Link to={''}>
                                <img alt="" src={pic1}/>
                            </Link>
                            <div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                                <input type="file" className="update-flie"/>
                                <i className="fa fa-camera"></i>
                            </div>
                        </div>
                        <div className="candidate-title">
                            <div className="">
                                <h4 className="m-b5">{auth.UserName}</h4>
                                <p className="m-b0">Web developer</p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link to={import.meta.env.BASE_URL +'profil'} className={path==='profil' ? 'active': null}>
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <span>Profil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={import.meta.env.BASE_URL +'freelancer-ol'} className={path==='freelancer-ol' ? 'active': null}>
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>Freelancer Ol</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={import.meta.env.BASE_URL +'is-ara'} className={path==='is-ara' ? 'active': null}>
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>İş Ara</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={import.meta.env.BASE_URL +'teklif-verdiklerim'} className={path==='teklif-verdiklerim' ? 'active': null}>
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                <span>Teklif Verdiklerim</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={import.meta.env.BASE_URL +'ayarlar'} className={path==='ayarlar' ? 'active': null}>
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                <span>Ayarlar</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profilesidebar;