import React, {useState} from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Link} from 'react-router-dom';
import {Form, Modal, Row} from 'react-bootstrap';
import Listingsidebar from '@/markup/Element/Listingsidebar';

import tPic1 from '@/images/team/gencay.jpg';
import {useStore} from '@/store/store';

function CrowdOzgecmisim() {
    const auth = useStore(state => state.auth);
    const [basicdetails, setBasicDetails] = useState(false);

    return (
        <AuthLayout>
            <>
                <div className="page-content">

                    <div className="overlay-black-dark profile-edit p-t50 p-b20"
                         style={{backgroundColor: '#dedede', marginBottom:30}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-7 candidate-info">
                                    <div className="candidate-detail">
                                        <div className="canditate-des text-center">
                                            <Link to={'#'}>
                                                <img alt="" src={tPic1}/>
                                            </Link>
                                            <div className="upload-link" title="update" data-toggle="tooltip"
                                                 data-placement="right">
                                                <input type="file" className="update-flie"/>
                                                <i className="fa fa-camera"></i>
                                            </div>
                                        </div>
                                        <div className="text-white browse-job text-left">
                                            <h4 className="m-b0">{auth?.UserName}
                                                <Link to={'#'} onClick={() => setBasicDetails(true)}
                                                      className="m-l15 font-16 text-white"><i className="fa fa-pencil"></i></Link>
                                            </h4>
                                            <p className="m-b15">Venhancer</p>
                                            <ul className="clearfix">
                                                <li><i className="ti-location-pin"></i> Kadıköy</li>
                                            </ul>
                                            <div className="progress-box m-t10">
                                                <div className="progress-info">Profil Doluluk Oranı<span>90%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary" style={{width: '90%'}} role="progressbar"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <Link to={'#'}>
                                        <div className="pending-info text-white p-a25">
                                            <h5>Beklenen Durumlar</h5>
                                            <ul className="list-check secondry">
                                                <li>Telefon Doğrulama</li>
                                                <li>Lokasyon Doğrulama</li>
                                                <li>Özgeçmiş ekleme</li>
                                            </ul>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                    <Row>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 m-b30">
                            <Listingsidebar/>
                        </div>

                        <Modal className="modal fade browse-job modal-bx-info editor" show={basicdetails}
                               onHide={setBasicDetails}>
                            <div className="modal-dialog my-0" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ProfilenameModalLongTitle">Temel Detaylar</h5>
                                        <button type="button" className="close" onClick={() => setBasicDetails(false)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Adınız</label>
                                                        <input type="text" value={auth?.UserName} className="form-control"
                                                               placeholder="İsminizi giriniz"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio" className="custom-control-input"
                                                                           id="fresher" name="example1"/>
                                                                    <label className="custom-control-label"
                                                                           htmlFor="fresher">Yeniyim</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio" className="custom-control-input"
                                                                           id="experienced" name="example1"/>
                                                                    <label className="custom-control-label"
                                                                           htmlFor="experienced">Deneyimliyim</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Ülke Seçiniz</label>
                                                        <Form.Control as="select">
                                                            <option selected>Türkiye</option>
                                                            <option>ABD</option>
                                                            <option>Rusya</option>
                                                            <option>Avustralya</option>
                                                            <option>Bahreyn</option>
                                                            <option>Çin</option>
                                                            <option>Dubai</option>
                                                            <option>Fransa</option>
                                                            <option>Almanya</option>
                                                            <option>Japonya</option>
                                                        </Form.Control>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>İlinizi Seçiniz</label>
                                                        <Form.Control as="select">
                                                            <option selected>Adana</option>
                                                        </Form.Control>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Telefon Numarası</label>
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Email Adresi</label>
                                                        <h6 className="m-a0 font-14">{auth?.Email}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="site-button"
                                                onClick={() => setBasicDetails(false)}>İptal
                                        </button>
                                        <button type="button" className="site-button">Kaydet</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div id="resume_headline_bx" className=" job-bx bg-white m-b30">
                                <div className="d-flex">
                                    <h5 className="m-b15">Özgeçmiş Başlığı</h5>

                                </div>
                                <p className="m-b0">Güncel Özgeçmişim</p>
                            </div>
                            <div id="key_skills_bx" className="job-bx bg-white m-b30">
                                <div className="d-flex">
                                    <h5 className="m-b15">Yetenekler</h5>
                                </div>
                                <div className="job-time mr-auto">
                                    <Link to={'#'} className="mr-1"><span>Javascript</span></Link>
                                    <Link to={'#'} className="mr-1"><span>CSS</span></Link>
                                    <Link to={'#'} className="mr-1"><span>HTML</span></Link>
                                    <Link to={'#'} className="mr-1"><span>Bootstrap</span></Link>
                                    <Link to={'#'} className="mr-1"><span>Web Designing</span></Link>
                                    <Link to={'#'} className="mr-1"><span>Photoshop</span></Link>
                                </div>
                            </div>
                            <div id="employment_bx" className="job-bx bg-white m-b30 ">
                                <div className="d-flex">
                                    <h5 className="m-b15">Deneyimler</h5>
                                </div>
                                <h6 className="font-14 m-b0">Senior Software Developer</h6>
                                <p className="m-b0">Venhancer</p>
                                <p className="m-b0">2020-Şimdi</p>
                                <p className="m-b0">2020 den beri çalışıyorum</p>
                                <p className="m-b0">Junior Software Developer</p>
                            </div>
                            <div id="education_bx" className="job-bx bg-white m-b30">
                                <div className="d-flex">
                                    <h5 className="m-b15">Öğrenim Bilgileri</h5>
                                </div>
                                <p></p>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="clearfix m-b20">
                                            <div className="m-b0">İstanbul Üniversitesi</div>
                                            <div className="m-b0">Bilgisayar Mühendisliği</div>
                                            <span className="clearfix font-13">2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="projects_bx" className="job-bx bg-white m-b30">
                                <div className="d-flex">
                                    <h5 className="m-b15">Projeler</h5>
                                </div>
                                <h6 className="font-14 m-b0">Crowd Source</h6>
                                <p className="m-b0">venhancer</p>
                                <p className="m-b0">Kasım 2022 - Şimdi (Tam Zamanlı)</p>
                                <p className="m-b0">Human Resource</p>
                            </div>
                            <div id="profile_summary_bx" className="job-bx bg-white m-b30">
                                <div className="d-flex">
                                    <h5 className="m-b15">Kısaca Açıklama</h5>
                                </div>
                                <p className="m-b0">
                                    10 yıldır web yazılımlarıyla uğraşan bir geliştiriciyim.
                                </p>
                            </div>
                            <div id="accomplishments_bx" className="job-bx bg-white m-b30">
                                <h5 className="m-b10">Başarılar</h5>
                                <div className="list-row">
                                    <div className="list-line">
                                        <div className="d-flex">
                                            <h6 className="font-14 m-b5">En genç yazılımcı</h6>
                                        </div>
                                        <p className="m-b0">Pantene En genç yazılımcı ödülü</p>
                                        <div className="list-line">
                                            <div className="d-flex">
                                                <h6 className="font-14 m-b5">Forit 500</h6>
                                            </div>
                                            <p className="m-b0">En başarılı 500 yazılımcı</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="personal_details_bx" className="job-bx bg-white m-b30">
                                <div className="d-flex">
                                    <h5 className="m-b30">Kişisel Detaylar</h5>

                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="clearfix m-b20">
                                            <label className="m-b0">Doğum Tarihi</label>
                                            <span className="clearfix font-13">18 Şubat 1979</span>
                                        </div>
                                        <div className="clearfix m-b20">
                                            <label className="m-b0">Cinsiyet</label>
                                            <span className="clearfix font-13">Erkek</span>
                                        </div>
                                        <div className="clearfix m-b20">
                                            <label className="m-b0">Bildiği Diller</label>
                                            <span className="clearfix font-13">İngilizce, Rusça</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="clearfix m-b20">
                                            <label className="m-b0">Adres</label>
                                            <span className="clearfix font-13">Kadıköy, İstanbul</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="attach_resume_bx" className="job-bx bg-white m-b30">
                                <h5 className="m-b10">Özgeçmiş Döküman Eki</h5>
                                <p>
                                    Özgeçmişinizi buraya yükleyiniz
                                </p>
                                <form className="attach-resume">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <div className="custom-file">
                                                    <p className="m-auto align-self-center">
                                                        <i className="fa fa-upload"></i>
                                                        En fazla 5MB olabilir
                                                    </p>
                                                    <input type="file" className="site-button form-control"
                                                           id="customFile"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Row>
                </div>
            </>
        </AuthLayout>
    )
}

export default CrowdOzgecmisim;