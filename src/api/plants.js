import request from './request'

const getPlants = () => request(`https://planted-api.herokuapp.com/api/v1/plants`);
const getPlant = plant => request(`https://planted-api.herokuapp.com/api/v1/plants/${plant}`);

export { getPlants, getPlant }