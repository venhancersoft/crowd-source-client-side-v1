import swal from 'sweetalert';
import axiosInstance from './AxiosInstance';
import {loginConfirmedAction, logout} from '@/store/actions/AuthActions';

export function signUp(obj) {
    //axios call
    const postData = {
        ...obj
    };
    return axiosInstance.post(
        'User/CreateUser',
        postData,
    );
}

export async function login(email, password) {
    const postData = {
        Email: email,
        Password: password
    };
    const userData = await axiosInstance.post(
        'User/LoginUser',
        postData,
    );
    if(!userData.data){
        return null;
    }
    return await axiosInstance.post(
        '/Authentication/CreateToken',
        postData
    )
}

export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal('Oops', 'Email already exists', 'error');
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
           swal('Oops', 'Email not found', 'error',{ button: 'Try Again!',});
           break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal('Oops', 'Invalid Password', 'error',{ button: 'Try Again!',});
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, history);
}
