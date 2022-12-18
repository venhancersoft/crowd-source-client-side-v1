import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Button, FloatingLabel, Form} from 'react-bootstrap';

function CrowdIkIsYayinlama() {
    return (
        <AuthLayout>
            <h3>İş Yayınlama</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>İşin Başlığı</Form.Label>
                    <input placeholder="İşin Başlığı" type="text" className="form-control" name="title"/>
                </Form.Group>
                <Form.Group className={'mb-3'}>
                    <Form.Label>İşin Açıklaması</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="İşin Açıklaması">
                        <Form.Control
                            as="textarea"
                            placeholder="İşin Açıklaması"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className={'mb-3'}>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select aria-label="Kategori Seçiniz">
                        <option>Kategori Seçiniz</option>
                        <option value="Grafik Tasarım">Grafik Tasarım</option>
                        <option value="Yazılım Teknoloji">Yazılım Teknoloji</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className={'mb-3'}>
                    <Form.Label>Alt Kategori</Form.Label>
                    <Form.Select aria-label="Alt Kategori Seçiniz">
                        <option>Alt Kategori Seçiniz</option>
                        <option value="Logo Tasarımı">Logo Tasarımı</option>
                        <option value="3D tasarımı">3D tasarımı</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Tahmini Bütçe</Form.Label>
                    <input placeholder="Tahmini Bütçe" type="text" className="form-control" name="butce" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teslim Süresi</Form.Label>
                    {['Birkaç gün içinde','Bir hafta İçinde', 'Bir ay içinde', '1-3 ay içinde', '3 aydan fazla'].map((type) => (
                        <div key={'radio'+type} className="mb-1">
                            <Form.Check type={'radio'}>
                                <Form.Check.Input type={'radio'} name="group1" isValid />
                                <Form.Check.Label>{type}</Form.Check.Label>
                            </Form.Check>
                        </div>
                    ))}
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={(e) => e.preventDefault()}>
                    İlan ver
                </Button>
            </Form>
        </AuthLayout>
    )
}

export default CrowdIkIsYayinlama;