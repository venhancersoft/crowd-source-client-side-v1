import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Button, FloatingLabel, Form} from 'react-bootstrap';

function CrowdIkIsDuzenleme() {
    return (
        <AuthLayout>
            <h3>İş Düzenleme</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>İşin Başlığı</Form.Label>
                    <input value={'React İşi'} placeholder="İşin Başlığı" type="text" className="form-control" name="title" autoComplete="false" />
                </Form.Group>
                <Form.Group className={'mb-3'}>
                    <Form.Label>İşin Açıklaması</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="İşin Açıklaması">
                        <Form.Control
                            as="textarea"
                            placeholder="İşin Açıklaması"
                            style={{ height: '100px' }}
                            value={'Kurumsal bir web sitesi yaptırmak istiyorum'}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className={'mb-3'}>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select aria-label="Kategori Seçiniz">
                        <option>Kategori Seçiniz</option>
                        <option value="Grafik Tasarım">Grafik Tasarım</option>
                        <option value="Yazılım Teknoloji" selected={true}>Yazılım Teknoloji</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className={'mb-3'}>
                    <Form.Label>Alt Kategori</Form.Label>
                    <Form.Select aria-label="Alt Kategori Seçiniz">
                        <option>Alt Kategori Seçiniz</option>
                        <option value="Logo Tasarımı">Logo Tasarımı</option>
                        <option value="Frontend Geliştirme" selected={true}>Frontend Geliştirme</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Tahmini Bütçe</Form.Label>
                    <input placeholder="Tahmini Bütçe" type="text" value={5000} className="form-control" name="butce" autoComplete={false} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teslim Süresi</Form.Label>
                    {['1-3 gün','7-10 gün', 'Bir ay içinde', '1-3 ay içinde', '3 aydan fazla'].map((type) => (
                        <div key={'radio'} className="mb-1">
                            <Form.Check type={'radio'}>
                                <Form.Check.Input checked={type === '7-10 gün'} type={'radio'} name="group1" isValid />
                                <Form.Check.Label>{type}</Form.Check.Label>
                                <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            </Form.Check>
                        </div>
                    ))}
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={(e) => e.preventDefault()}>
                    İşi düzenle
                </Button>
            </Form>
        </AuthLayout>
    )
}

export default CrowdIkIsDuzenleme;