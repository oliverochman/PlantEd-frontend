import axios from 'axios'

import {apiUrl, storeAuthHeaders, getAuthHeaders} from './Auth'

const getUser = () => {
    const path = apiUrl + '/users/2';
    return new Promise((resolve, reject) => {
        axios.get(path, {headers: getAuthHeaders()})
            .then(response => {
                storeAuthHeaders(response).then(() => {
                    resolve(response.data)
                });
            })
            .catch(error => {
                reject(error)
            });
    })
};

export {getUser}