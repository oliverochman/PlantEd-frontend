const fs = require('fs')

const request = (url) => new Promise((resolve, reject) => {
  // const lastSlash = url.lastIndexOf('/')
  // const plantID = url.substring(lastSlash + 1)

  fs.readFile(`./src/api/__mockData__/plantId.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ entity: JSON.parse(data) })
  })
})

export default request
