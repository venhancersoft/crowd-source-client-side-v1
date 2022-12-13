import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import pic1 from '@/images/team/pic1.jpg'

function Profilesidebar() {
    const router = useRouteMatch();
    const pathArr = router.path.split('/');
    const path = pathArr[pathArr.length - 1];
    console.log(path);
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
                                <h4 className="m-b5"><Link to={'#'}>David Matin</Link></h4>
                                <p className="m-b0"><Link to={'#'}>Web developer</Link></p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li><Link to={import.meta.env.BASE_URL +'profil'} className={path==='profil' ? 'active': null}>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span>Profil</span></Link></li>
                        <li><Link to={import.meta.env.BASE_URL +'ozgecmis'} className={path==='ozgecmis' ? 'active': null}>
                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                            <span>Özgeçmiş</span></Link></li>
                        <li><Link to={import.meta.env.BASE_URL +'mulakat'} className={path==='mulakat' ? 'active': null}>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <span>Mülakat</span></Link></li>
                        <li><Link to={import.meta.env.BASE_URL +'teklif-verdiklerim'} className={path==='teklif-verdiklerim' ? 'active': null}>
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                            <span>Teklif Verdiklerim</span></Link></li>
                        <li><Link to={import.meta.env.BASE_URL +'banka-bilgilerim'} className={path==='banka-bilgilerim' ? 'active': null}>
                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                            <span>Banka Bilgilerim</span></Link></li>
                        <li><Link to={import.meta.env.BASE_URL +'kaydettigim-isler'} className={path==='kaydettigim-isler' ? 'active': null}>
                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                            <span>Kaydettiğim İşler</span></Link></li>
                        <li><Link to={import.meta.env.BASE_URL +'is-alarmlari'} className={path==='is-alarmları' ? 'active': null}>
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <span>İş Alarmları</span></Link></li>
                        <li><Link to={import.meta.env.BASE_URL +'ayarlar'} className={path==='ayarlar' ? 'active': null}>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <span>Ayarlar</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profilesidebar;