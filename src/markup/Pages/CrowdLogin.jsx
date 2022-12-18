import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {login} from '@/services/AuthService';
import {useStore} from '@/store/store';

function CrowdLogin(props) {
    const [email, setEmail] = useState('');
    let errorsObj = {email: '', password: ''};
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');
    const setStoreState = useStore(state => state.setStoreState);
    const isAuth = useStore(state => state.auth);

    async function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = {...errorsObj};
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
            return;
        }

        const loginData = await login(email, password);
        //type İK:2 mı freelance:1
        setStoreState({auth: {...loginData, type: 2}});
    }

    return (
        <>
            {isAuth && <Redirect to={isAuth.type === 1 ? '/profil' : 'ik-profil'}/>}
            <div className="page-content">
                <div className="section-full content-inner-2 shop-account">
                    <div className="container">
                        <div className="max-w500 m-auto bg-white m-b30">
                            <div className="p-a30 job-bx browse-job radius-sm seth">
                                <div className="tab-content nav">
                                    <form onSubmit={onLogin} className="col-12 p-a0 ">
                                        <p className="font-weight-600">Hesabınız varsa giriş yapınız</p>

                                        <div className="form-group ">
                                            <label>E-Mail adresiniz</label>
                                            <div className="input-group">
                                                <input type="email" className="form-control"
                                                       placeholder="Email adresi"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {errors.email &&
                                                <div className="text-danger fs-12">{errors.email}</div>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Şifreniz *</label>
                                            <div className="input-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    placeholder="Şifre"
                                                    onChange={(e) =>
                                                        setPassword(e.target.value)
                                                    }
                                                />
                                                {errors.password &&
                                                <div className="text-danger fs-12">{errors.password}</div>}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button className="site-button float-left" onSubmit={onLogin}>login</button>
                                            <Link to="/register"
                                                  className="site-button-link forget-pass m-t15 float-right"><i
                                                className="fa fa-unlock-alt"></i> Üye Ol</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrowdLogin