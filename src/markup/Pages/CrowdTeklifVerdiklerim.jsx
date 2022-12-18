import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function CrowdTeklifVerdiklerim() {
    return (
        <AuthLayout>
            <h3>Teklif Verdiklerim</h3>
            <Table hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Adı</th>
                    <th>Kategorisi</th>
                    <th>Alt Kategorisi</th>
                    <th>Tahmini süre</th>
                    <th>Tahmini bütçe</th>
                    <th>Freelancer tahmini bütçe</th>
                    <th>Durumu</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>React İşi</td>
                    <td>Yazılım Geliştirme</td>
                    <td>Frontend Geliştirme</td>
                    <td>10 gün</td>
                    <td>5000 TL</td>
                    <td>4950 TL</td>
                    <td>Beklemede</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Vue İşi</td>
                    <td>Yazılım Geliştirme</td>
                    <td>Frontend Geliştirme</td>
                    <td>10 gün</td>
                    <td>5000 TL</td>
                    <td>4950 TL</td>
                    <td>Kabul edildi<br />
                        <Link to={'/is-sureci'} >
                            İş Sürecine Git
                        </Link>
                    </td>
                </tr>
                </tbody>
            </Table>
        </AuthLayout>
    )
}

export default CrowdTeklifVerdiklerim;