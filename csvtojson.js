import csv from 'csvtojson'
import fs from 'fs'

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

  fs.writeFileSync('word.json', JSON.stringify(wordJson))