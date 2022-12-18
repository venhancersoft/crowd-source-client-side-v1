import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Col, Form, Row} from 'react-bootstrap';


//Images
import Icon1 from './../../images/logo/icon1.png';
import {Link} from 'react-router-dom';

const jobPost =[
    { image: Icon1},{ image: Icon1},{ image: Icon1},
    { image: Icon1},{ image: Icon1},{ image: Icon1},
]
const brandLogo = [
    { image: Icon1},{ image: Icon1},{ image: Icon1},
    { image: Icon1},{ image: Icon1},{ image: Icon1},
    { image: Icon1},{ image: Icon1},{ image: Icon1},
]


function CrowdIsAra() {
    return (
        <AuthLayout>
            <h3>İş Ara</h3>
            <Row>
                <Col>
                    <div className="input-group col-md-12 m-b30">
                        <input className="form-control py-2" type="search" value="React" />
                          <span className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                          </span>
                    </div>
                </Col>
            </Row>
            <div className="content-block">
                <div className="section-full browse-job p-b50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="post-job-bx">
                                    {jobPost.map((item,index)=>(
                                        <li key={index}>
                                            <div className="post-bx">
                                                <div className="d-flex m-b30">
                                                    <div className="job-post-company">
                                                        <span><img alt="" src={Icon1}/></span>
                                                    </div>
                                                    <div className="job-post-info">
                                                        <h4><Link to={'/is-detay'}>React İşi</Link></h4>
                                                        <Row>
                                                            <Col>
                                                                <div><b>Kategori:</b> Yazılım Geliştirme</div>
                                                                <div><b>Alt Kategori:</b> Frontend Geliştirme</div>
                                                                <div><b>Teslim Süresi:</b> 10 Gün</div>
                                                                <div><b>Tahmini Bütçe:</b> 5000 TL</div>
                                                            </Col>
                                                            <Col>
                                                                <div>React ile yazılmış bir ilan sitesi istiyorum</div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                                <div className="pagination-bx m-t30">
                                    <ul className="pagination">
                                        <li className="previous"><Link to={'#'}><i className="ti-arrow-left"></i> Prev</Link></li>
                                        <li className="active"><Link to={'#'}>1</Link></li>
                                        <li><Link to={'#'}>2</Link></li>
                                        <li><Link to={'#'}>3</Link></li>
                                        <li className="next"><Link to={'#'}>Next <i className="ti-arrow-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default CrowdIsAra;