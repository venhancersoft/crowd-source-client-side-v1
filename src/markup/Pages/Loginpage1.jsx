import React, {useLayoutEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {loadingToggleAction, loginAction} from '../../store/actions/AuthActions';

function Loginpage1(props) {
    const [email, setEmail] = useState('');
    let errorsObj = {email: '', password: ''};
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');
    useLayoutEffect(() => {
        if (props.isUserLogIn) {
            props.history.push('/home');
        }
    }, [props.isUserLogIn, props.history])

    const dispatch = useDispatch();

    function onLogin(e) {
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
        dispatch(loadingToggleAction(true));
        dispatch(loginAction(email, password, props.history));
    }

    return (
        <>
            <div className="page-content">
                <div className="section-full content-inner-2 shop-account">
                    <div className="container">
                        <div className="max-w500 m-auto bg-white m-b30">
                            <div className="p-a30 job-bx browse-job radius-sm seth">
                                <div className="tab-content nav">
                                    <form onSubmit={onLogin} className="col-12 p-a0 ">
                                        <p className="font-weight-600">If you have an account with us, please log
                                            in.</p>
                                        {props.errorMessage && (
                                            <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                                {props.errorMessage}
                                            </div>
                                        )}
                                        {props.successMessage && (
                                            <div
                                                className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                                {props.successMessage}
                                            </div>
                                        )}
                                        <div className="form-group ">
                                            <label>E-Mail Address*</label>
                                            <div className="input-group">
                                                <input type="email" className="form-control"
                                                       placeholder="Type Your Email Address"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {errors.email &&
                                                <div className="text-danger fs-12">{errors.email}</div>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password *</label>
                                            <div className="input-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    placeholder="Type Your Password"
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
                                                className="fa fa-unlock-alt"></i> Sign up</Link>
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

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
        isUserLogIn: state.auth.isUserLogIn,
    };
};
export default connect(mapStateToProps)(Loginpage1);