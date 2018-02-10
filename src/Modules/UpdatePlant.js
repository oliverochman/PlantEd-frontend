import axios from 'axios'

import {apiUrl, getAuthHeaders} from './Auth'
import {getPlants} from './Plants'


const updatePlant = (plant) => {
  const current_user = JSON.parse(sessionStorage.getItem('current_user'));
  const path = apiUrl + `users/${user.id}/user_plants/${plant.id}`;
  return new Promise((resolve, reject) => {
    axios.put(path, {headers: getAuthHeaders()}, {frequency: plant.frequency})
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
          reject(error)
      });
  })
};

export {updatePlant}
