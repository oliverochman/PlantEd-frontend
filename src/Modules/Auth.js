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

const storeAuthHeaders = response => {
    return new Promise((resolve) => {
        const id = response.data.data.id,
            uid = response.headers['uid'],
            client = response.headers['client'],
            accessToken = response.headers['access-token'],
            expiry = response.headers['expiry'];

        resolve(sessionStorage.setItem('credentials', JSON.stringify({
            id: id,
            uid: uid,
            client: client,
            access_token: accessToken,
            expiry: expiry,
            token_type: 'Bearer'
        })))
    })
};


const getAuthHeaders = () => {
    return JSON.parse(sessionStorage.getItem('credentials'));
};

export {apiUrl, authenticate, storeAuthHeaders, getAuthHeaders}

