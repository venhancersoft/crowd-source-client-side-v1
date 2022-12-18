import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import Rate from '@/markup/Element/Rate';
import {Col, Row} from 'react-bootstrap';


function CrowdIkAdayPuanlama() {
    return (
        <AuthLayout>
            <h3>Puanlama</h3>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}><h5>İletişimde nezaket</h5></Col>
                <Col><Rate /></Col>
            </Row>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}><h5>İş Disiplini</h5></Col>
                <Col><Rate /></Col>
            </Row>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}><h5>İşin tamamlanması</h5></Col>
                <Col><Rate /></Col>
            </Row>
        </AuthLayout>
    )
}

export default CrowdIkAdayPuanlama;