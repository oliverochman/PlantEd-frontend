import axios from 'axios'

import {apiUrl, getAuthHeaders} from './Auth'
import {getPlants} from './Plants'

const createUserPlant = (plant) => {
  //const header = storeAuthHeaders()
  const current_user = JSON.parse(sessionStorage.getItem('current_user'));
  const path = apiUrl + `/users/${current_user.id}/user_plants`;
  return new Promise((resolve, reject) => {
    axios.post(path, {plant_id: plant}, {headers: getAuthHeaders()})
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
          reject(error)
      });
  })
};

export {createUserPlant}
