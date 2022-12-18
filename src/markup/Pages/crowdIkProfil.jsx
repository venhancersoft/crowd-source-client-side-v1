import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Form} from 'react-bootstrap';

function CrowdIkProfil() {
    return (
        <AuthLayout>
            <div className="job-bx-title clearfix">
                <h5 className="font-weight-700 pull-left text-uppercase">Firma Profil</h5>
            </div>
            <form>
                <div className="row m-b30">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Şirket Adı</label>
                            <input type="text" className="form-control"
                                   placeholder="Şirket Adı Giriniz"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control"
                                   placeholder=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Website</label>
                            <input type="text" className="form-control"
                                   placeholder=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Kuruluş Tarihi </label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Sektör</label>
                            <Form.Control as="select" className="custom-select">
                                <option>Eğitim</option>
                                <option>Yazılım</option>
                                <option>İnşaat</option>
                                <option>Reklam</option>
                                <option>İnsan Kaynakları</option>
                            </Form.Control>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Açıklama:</label>
                            <textarea className="form-control"></textarea>
                        </div>
                    </div>
                </div>

                <div className="job-bx-title clearfix">
                    <h5 className="font-weight-700 pull-left text-uppercase">İletişim Bilgileri</h5>
                </div>
                <div className="row m-b30">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Telefon</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Ülke</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Şehir</label>
                            <input type="email" className="form-control"
                                   placeholder="Delhi"/>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Adres:</label>
                            <textarea className="form-control"></textarea>
                        </div>
                    </div>
                </div>

                <div className="job-bx-title clearfix">
                    <h5 className="font-weight-700 pull-left text-uppercase">Sosyal Medya Linkleri</h5>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Facebook</label>
                            <input type="text" className="form-control" placeholder="https://www.facebook.com/"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Twitter</label>
                            <input type="text" className="form-control" placeholder="https://www.twitter.com/"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Google</label>
                            <input type="text" className="form-control" placeholder="https://www.google.com/"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Linkedin</label>
                            <input type="email" className="form-control" placeholder="https://www.linkedin.com/"/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="site-button m-b30">Güncelle</button>
            </form>
        </AuthLayout>
    )
}

export default CrowdIkProfil;