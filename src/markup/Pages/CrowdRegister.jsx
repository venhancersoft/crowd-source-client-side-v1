import React, {useState} from 'react';
import classNames from 'classnames';
import {createDefaultMaskGenerator, MaskedInput} from 'react-hook-mask';

const maskGenerator = createDefaultMaskGenerator('+99 999 999 99 99');

function CrowdRegister(props) {
    const [individualSelected, setIndividualSelected] = useState(true);
    let errorsObj = {};
    const [errors, setErrors] = useState(errorsObj);
    const [rePassword, setRePassword] = useState('')
    const [form, setForm] = useState({
        name: '',
        companyName: '',
        surname: '',
        userName: '',
        userType: 0,
        phoneNumber: '+90 5',
        password: '',
        email: ''
    })

    // const dispatch = useDispatch();
    const toggleChoice = () => setIndividualSelected((prev) => !prev)

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = {...errorsObj};
        if (form.password !== rePassword) {
            errorObj.password = 'Şifreler birbirine eşit olmalı';
            error = true;
        }
        if (form.password === '') {
            errorObj.password = 'Şifre alanı zorunludur.';
            error = true;
        }
        if (form.phoneNumber === '') {
            errorObj.phoneNumber = 'Telefon alanı zorunludur.';
            error = true;
        }
        if (!individualSelected && form.companyName === '') {
            errorObj.companyName = 'Şirket ismi alanı zorunludur.';
            error = true;
        }
        if (form.surname === '') {
            errorObj.surname = 'Soyisim alanı zorunludur.';
            error = true;
        }
        if (form.name === '') {
            errorObj.name = 'İsim alanı zorunludur.';
            error = true;
        }
        if (form.email === '') {
            errorObj.email = 'Email alanı zorunludur.';
            error = true;
        }
        if (form.password === '') {
            errorObj.password = 'Şifre alanı zorunludur.';
            error = true;
        }
        setErrors(errorObj);
        if (error) return;
        const obj = {
            email: form.email,
            password: form.password,
            name: form.name,
            surname: form.surname,
            companyName: form.companyName,
            phoneNumber: form.phoneNumber
        }
        if (individualSelected) {
            delete obj.companyName
        }

    }

    return (
        <>
            <div className="page-content">
                <div className="section-full content-inner browse-job shop-account">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 m-b30">
                                <div className="p-a30 job-bx max-w500 radius-sm bg-white m-auto">
                                    <div className="tab-content">
                                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                                            <button
                                                type="button"
                                                onClick={toggleChoice}
                                                className={classNames({
                                                    'btn': true,
                                                    'btn-primary': individualSelected,
                                                    'btn-secondary': !individualSelected
                                                })}>
                                                Bireysel
                                            </button>
                                            <button
                                                type="button"
                                                onClick={toggleChoice}
                                                className={classNames({
                                                    'btn': true,
                                                    'btn-primary': !individualSelected,
                                                    'btn-secondary': individualSelected
                                                })}>
                                                Kurumsal
                                            </button>
                                        </div>

                                            <h3 className="form-title m-t0">Personal Information</h3>
                                            <p>Enter your e-mail address and your password. </p>
                                            <div className="form-group">
                                                <label className="font-weight-700">İsim *</label>
                                                <input autoComplete="off" name="dzName" value={form.name}
                                                       onChange={(e) => setForm({...form, name: e.target.value})}
                                                       className="form-control"
                                                       placeholder="İsim" type="text"/>
                                                <div className="text-danger">{errors.name &&
                                                <div>{errors.name}</div>}</div>
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-700">Soyisim *</label>
                                                <input name="dzSurName" autoComplete="off" value={form.surname}
                                                       onChange={(e) => setForm({...form, surname: e.target.value})}
                                                       className="form-control"
                                                       placeholder="Soyisim" type="text"/>
                                                <div className="text-danger">{errors.surname &&
                                                <div>{errors.surname}</div>}</div>
                                            </div>
                                            {
                                                !individualSelected && (<div className="form-group">
                                                    <label className="font-weight-700">Şirket Adı *</label>
                                                    <input autoComplete="off" name="dzCompanyName"
                                                           value={form.companyName} onChange={(e) => setForm({
                                                        ...form,
                                                        companyName: e.target.value
                                                    })} className="form-control"
                                                           placeholder="Şirket Adı" type="text"/>
                                                    <div className="text-danger">{errors.companyName &&
                                                    <div>{errors.companyName}</div>}</div>
                                                </div>)
                                            }

                                            <div className="form-group">
                                                <label className="font-weight-700">Email *</label>
                                                <input name="dzEmail" autoComplete="off" value={form.email}
                                                       onChange={(e) => setForm({...form, email: e.target.value})}
                                                       className="form-control"
                                                       placeholder="E-posta" type="email"/>
                                                <div className="text-danger">{errors.email &&
                                                <div>{errors.email}</div>}</div>
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-700">Telefon *</label>
                                                {/*<input autoComplete="off" name="dzPhone" value={form.phoneNumber} onChange={(e) => setForm({...form, phoneNumber: e.target.value})} className="form-control" placeholder="Telefon" type="tel"/>*/}
                                                <MaskedInput
                                                    className="form-control"
                                                    autoComplete="off"
                                                    name="dzPhone"
                                                    type="tel"
                                                    maskGenerator={maskGenerator}
                                                    value={form.phoneNumber}
                                                    onChange={(val) => setForm({...form, phoneNumber: val})}
                                                />
                                                <div className="text-danger">{errors.phoneNumber &&
                                                <div>{errors.phoneNumber}</div>}</div>
                                            </div>
                                            <div className="row form-group">
                                                <div className={'col-sm'}>
                                                    <label className="font-weight-700">Şifre *</label>
                                                    <input autoComplete="off" name="dzPassword" value={form.password}
                                                           onChange={(e) => setForm({
                                                               ...form,
                                                               password: e.target.value
                                                           })} className="form-control"
                                                           placeholder="Şifre" type="password"/>
                                                    <div className="text-danger">{errors.password &&
                                                    <div>{errors.password}</div>}</div>
                                                </div>
                                                <div className={'col-sm'}>
                                                    <label className="font-weight-700">Şifreyi Tekrarla *</label>
                                                    <input autoComplete="off" name="dzRePassword" value={rePassword}
                                                           onChange={(e) => setRePassword(e.target.value)}
                                                           className="form-control"
                                                           placeholder="Şifreyi Tekrarla" type="repassword"/>
                                                    <div className="text-danger">{errors.rePassword &&
                                                    <div>{errors.rePassword}</div>}</div>
                                                </div>
                                            </div>
                                            <div className="form-group text-left">
                                                <button type="submit" onSubmit={onSignUp}
                                                        className="site-button dz-xs-flex m-r5">Sign me up
                                                </button>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrowdRegister