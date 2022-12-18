import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Button, Card, Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CrowdIsDetay() {
    return (
        <AuthLayout>
            <Card>
                <Card.Body>
                    <Card.Title>React İşi</Card.Title>
                    <Card.Text>
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
                    </Card.Text>
                    <Form.Group className={'mb-5'}>
                        <Form.Control placeholder={'Talep Fiyatı gir'} type="text"/>
                    </Form.Group>
                    <Button variant="primary">Başvur</Button>
                </Card.Body>
            </Card>
        </AuthLayout>
    )
}

export default CrowdIsDetay;