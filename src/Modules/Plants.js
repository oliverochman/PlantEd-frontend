import axios from 'axios'

import {apiUrl, authenticate, storeAuthHeaders, getAuthHeaders} from './Auth'

const getPlants = () => {
    const path = apiUrl + '/plants';
    return new Promise((resolve, reject) => {
        axios.get(path, {headers: Object.assign(getAuthHeaders(), {token_type: 'Bearer'})})
            .then(response => {
                console.log(response);
                storeAuthHeaders(response).then(() => {
                    resolve(response.data)
                });
            })
            .catch(error => {
                reject(error)
            });
    })


}

export {getPlants}