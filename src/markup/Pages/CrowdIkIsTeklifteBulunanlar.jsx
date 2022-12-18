import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';

function CrowdIkIsTeklifteBulunanlar() {
    return (
        <AuthLayout>
            <h3>Reactjs işi Teklfte Bulunanlar</h3>
            <Table hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Adı</th>
                    <th>Teklifi</th>
                    <th>Profil</th>
                    <th>İşlem</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Gencay Doyurucu</td>
                    <td>10000TL</td>
                    <td>
                        <Link to={'/profil'} >
                            Profil
                        </Link>
                    </td>
                    <td>
                        <Link to={'/ik-is-sureci'} >
                            Anlaş
                        </Link>
                    </td>
                </tr>
                </tbody>
            </Table>
        </AuthLayout>
    )
}

export default CrowdIkIsTeklifteBulunanlar;