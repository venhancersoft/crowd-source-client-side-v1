import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';

function CrowdIkTumIlanlarim() {
    return (
        <AuthLayout>
            <h3>İş İlanlarım</h3>
            <Table hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Adı</th>
                    <th>Kategorisi</th>
                    <th>Alt Kategorisi</th>
                    <th>Tahmini süre</th>
                    <th>Tahmini bütçe</th>
                    <th>Başvuran Freelancerlar</th>
                    <th>Düzenle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>React İşi</td>
                    <td>Yazılım Geliştirme</td>
                    <td>Frontend Geliştirme</td>
                    <td>7-10 gün</td>
                    <td>5000 TL</td>
                    <td>
                        <Link to={'/ik-teklifte-bulunanlar'} >
                            Teklifte Bulunanlar
                        </Link>
                    </td>
                    <td>
                        <Link to={'/ik-ilan-duzenleme'} >
                            Düzenle
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Vue İşi</td>
                    <td>Yazılım Geliştirme</td>
                    <td>Frontend Geliştirme</td>
                    <td>10 gün</td>
                    <td>5000 TL</td>
                    <td>
                        <Link to={'/ik-teklifte-bulunanlar'} >
                            Teklifte Bulunanlar
                        </Link>
                    </td>
                    <td>
                        <Link to={'/ik-ilan-duzenleme'} >
                            Düzenle
                        </Link>
                    </td>
                </tr>
                </tbody>
            </Table>
        </AuthLayout>
    )
}

export default CrowdIkTumIlanlarim;