import axios from 'axios'

import {apiUrl, getAuthHeaders} from './Auth'

const getUser = () => {
    const current_user = JSON.parse(sessionStorage.getItem('current_user'));
    const path = apiUrl + '/users/' + current_user.id;
    return new Promise((resolve, reject) => {
        axios.get(path, {headers: getAuthHeaders()})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            });
    })
};

export {getUser}