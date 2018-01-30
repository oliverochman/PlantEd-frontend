import request from './request'

const getPlant = plant => request(`https://planted-api.herokuapp.com/api/v1/plants/${plant}`)

export { getPlant }
