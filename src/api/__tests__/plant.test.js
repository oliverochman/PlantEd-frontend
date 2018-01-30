const plant = require('../plants')
jest.mock('../request')

describe('#getPlant() using Promises', () => {
  it('should load plants data', () => {
    return plant.getPlant('Aloe Vera')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.description).toEqual('The Aloe Vera plant (succulent type) is well known for offering possible health and beauty benefits. This succulent is a tough species that is very easy to care for and rarely presents problems for most growers.')
    })
  })
})
