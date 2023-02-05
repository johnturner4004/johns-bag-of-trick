import csv from 'csvtojson'

const filePath = './words.csv'

const wordJson = await csv()
  .fromFile(filePath)
  .then(jsonObj => {
    return jsonObj
  })
  .catch(err => {
    console.error(err)
  })

  console.log(wordJson);