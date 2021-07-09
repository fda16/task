/*export function checkAuth() {
    if (JSON.parse(localStorage.getItem('user'))) return 1;
    else return 0;
}*/
import axios from 'axios'

function saveTokens(accessToken, refreshToken, expires) {
    localStorage.setItem('user', JSON.stringify({
        'accessToken': accessToken, 
        'refreshToken': refreshToken,
        'expires': expires
    }));
}

export async function register(userData) {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://api.bo.aa44.ru/api/Auth/register',
            data: {
                lastName: userData.lastName,
                firstName: userData.firstName,
                patronymic: userData.patronymic,
                userName: userData.userName,
                password: userData.password,
                confirmPassword: userData.confirmPassword,
                phoneNumber: userData.phoneNumber,
                email: userData.email,
            }
        });

        saveTokens(response.data.accessToken, response.data.refreshToken, response.data.expires);

        return response;
    }
    catch(error) {
        console.log(error);

        return 0;
    }
}

export async function login(userName, password) {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://api.bo.aa44.ru/api/Auth/login',
            data: {
                userName: userName,
                password: password
            }
        });

        saveTokens(response.data.accessToken, response.data.refreshToken, response.data.expires);

        return response;
    }
    catch(error) {
        console.log(error);

        return 0;
    }
}

export function logout() {
    //const user = JSON.parse(localStorage.getItem('user'));

    localStorage.removeItem('user');

    /*const url = 'https://api.bo.aa44.ru/api/Auth/tokens/' + user.refreshToken + '/revoke';

    try {
        const response = await axios({
            method: 'post',
            url: url,
            headers: {'Authorization': 'Bearer ' + user.accessToken}
        });

        return response;
    }
    catch(error) {
        console.log(error);

        return 0;
    }*/
}

export async function refreshToken() {
    const token = JSON.parse(localStorage.getItem('user')).refreshToken;
    const url = 'https://api.bo.aa44.ru/api/Auth/tokens/' + token + '/refresh';

    try {
        const response = await axios({
            method: 'post',
            url: url,
        });

        saveTokens(response.data.accessToken, response.data.refreshToken, response.data.expires);

        console.log('token refreshed');
        return response;
    }
    catch(error) {
        console.log(error);

        return 0;
    }
}