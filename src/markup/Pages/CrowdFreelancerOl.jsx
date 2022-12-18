import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {useStore} from '@/store/store';
import {Button, Col, Container, FloatingLabel, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CrowdFreelancerOl() {
    const auth = useStore(state => state.auth);
    return (
        <AuthLayout>
            <Container>
                <Row className={'mb-5'}>
                    <Col>
                        <h1>Freelancer Ol</h1>
                        <h2>Merhaba, {auth?.UserName}. 👋</h2>
                    </Col>
                </Row>
                <Row className={'mb-5'}>
                    <Col>
                        <h3>Profil Fotoğrafı</h3>
                        <div>Seni en iyi yansıttığını düşündüğün profil resmini ekle! Böylelikle müşterilerin tam olarak
                            kiminle çalışacaklarını bilirler.
                        </div>
                    </Col>
                    <Col>
                            <input type={'file'}/>
                    </Col>
                </Row>
                <Row className={'mb-5'}>
                    <Col>
                        <h3>Doğum Tarihin</h3>
                        <div>Bu bilgiyi kesinlikle profilinde göstermeyeceğiz fakat freelancer olmak için 18
                            yaşından büyük olman gerekir. 😊
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Gün</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Ay</option>
                                    <option value="1">Ocak</option>
                                    <option value="2">Şubat</option>
                                    <option value="3">Mart</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Yıl</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2021">2020</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={'mb-5'}>
                    <Col>
                        <h3>Uzmanlık Alanın</h3>
                        <div>Uzmanlık kategorini ve uzmanı olduğun alanı belirtmen çok önemli. Eğer üşengeç biriysen,
                            kendinden daha sonra da bahsedebilirsin.
                        </div>
                    </Col>
                    <Col>
                        <Form.Group className={'mb-5'}>
                            <Form.Label>Uzmanlık Kategorisi</Form.Label>
                            <Form.Select>
                                <option>Uzmanlık Kategorisi Seçiniz</option>
                                <option>Danışman</option>
                                <option>Data Scientist</option>
                                <option>Yazılım Uzmanı</option>
                                <option>Tasarımcı</option>
                                <option>Influencer</option>
                                <option>Pazarlama Uzmanı</option>
                                <option>Müzisyen</option>
                                <option>Çevirmen</option>
                                <option>Video/Prodüksiyon Uzmanı</option>
                                <option>Sanal Asistan</option>
                                <option>Seslendirmen</option>
                                <option>Yazar</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className={'mb-5'}>
                            <Form.Control placeholder={'Başlık'} type="text"/>
                        </Form.Group>
                        <Form.Group className={'mb-5'}>
                            <FloatingLabel controlId="floatingTextarea2" label="Hakkında">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={'mb-5'}>
                    <Col>
                        <h3>Uzmanı Olduğun Alanlar & Araçlar</h3>
                        <div>Uzmanı olduğun alan ve araçları eklemen alıcıların tercihte bulunmaları ve daha kolay teklif alman için faydalı olacaktır.</div>
                    </Col>
                    <Col>
                        <Form.Group>
                            <select className="form-select" multiple>
                                <option value="Adobe">Adobe</option>
                                <option value="Adobe Acrobat">Adobe Acrobat</option>
                                <option value="Adobe Audition">Adobe Audition</option>
                                <option value="Adobe Captivate">Adobe Captivate</option>
                                <option value="Adobe Contribute">Adobe Contribute</option>
                                <option value="Adobe Director">Adobe Director</option>
                                <option value="Adobe Encore">Adobe Encore</option>
                                <option value="Adobe Fireworks">Adobe Fireworks</option>
                                <option value="Adobe FreeHand">Adobe FreeHand</option>
                                <option value="Adobe GoLive">Adobe GoLive</option>
                                <option value="Adobe Illustrator">Adobe Illustrator</option>
                                <option value="Adobe Imageready">Adobe Imageready</option>
                                <option value="Adobe Indesign">Adobe Indesign</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button variant="primary" size="lg">
                        Freelancer Ol
                    </Button>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default CrowdFreelancerOl;