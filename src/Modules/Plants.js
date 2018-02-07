import axios from 'axios'

import {apiUrl, storeAuthHeaders, getAuthHeaders} from './Auth'

const getPlants = () => {
    const path = apiUrl + '/plants';
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

const getPlant = (plant) => {
    const path = apiUrl + '/plants/';
    return new Promise((resolve, reject) => {
        axios.get(path, {data: {id: plant.id}, headers: getAuthHeaders()})
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

export {getPlants, getPlant}