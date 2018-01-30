const plant = require('../plants')
jest.mock('../request')

describe('#getPlants() using Promises', () => {
  it('should load plants data', () => {
    return plant.getPlants()
    .then(data => {
      debugger;
      expect(data).toBeDefined()
      expect(data.entity.data.first.attribute.name).toEqual('Aleo Vera')
    })
  })
})
