import axiosInstance from './AxiosInstance';

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
    if(!userData.data.Data){
        return null;
    }
    const createToken = await axiosInstance.post(
        '/Authentication/CreateToken',
        postData
    )
    return {
        ...createToken.data.Data,
        ...userData.data.Data
    }
}