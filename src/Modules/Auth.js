import axios from 'axios'

const apiUrl = 'http://localhost:3001/api/v1';

const authenticate = (email, password) => {
    const path = apiUrl + '/auth/sign_in';
    return new Promise((resolve, reject) => {
        axios.post(path, {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response);
                storeAuthHeaders(response).then(() => {
                    resolve({
                        authenticated: true
                    })
                });
            })
            .catch(error => {
                reject(error)
            });
    })


}

const storeAuthHeaders = (response) => {
    return new Promise((resolve) => {
        const uid = response.headers['uid'];
        const client = response.headers['client'];
        const accessToken = response.headers['access-token'];
        const expiry = response.headers['expiry'];
        resolve(sessionStorage.setItem('credentials', JSON.stringify({
            uid: uid,
            client: client,
            accessToken: accessToken,
            expiry: expiry
        })))
    })
};


const getAuthHeaders = () => {
    debugger;
    const headers = JSON.parse(sessionStorage.getItem('credentials'));
    return headers;
}

export {apiUrl, authenticate, storeAuthHeaders, getAuthHeaders}

