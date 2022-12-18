import React from 'react';
import AuthLayout from '@/markup/Layout/AuthLayout';

function CrowdAyarlar() {
    return (
        <AuthLayout>
            <div className="job-bx-title clearfix">
                <h5 className="font-weight-700 pull-left text-uppercase">Ayarlar</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row m-b30">
                    <div className="col-lg-12 col-md-12">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Eski Şifreyi Gir</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Yeni Şifreyi Gir</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Yeni Şifreyi Tekrarla:</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="site-button m-b30">Şifreyi Değiştir</button>
            </form>
        </AuthLayout>
    )
}

export default CrowdAyarlar;