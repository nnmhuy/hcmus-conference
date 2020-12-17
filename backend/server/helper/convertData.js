const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')

async function getListCSV(fileNameList) {
  let result = []
  for (fileName of fileNameList) {
    let csvData = await csvToJson(path.join('server', 'init-data', fileName))
    result = result.concat(csvData)
  }

  return result
}

function csvToJson(fileName) {
  return new Promise(function(resolve, reject) {
    let results = [];
    fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      resolve(results)
    });
  })
  
}

// input: day (1-4, four session of event), timeString HH:MM
function convertToJsTime(day, timeString) {
  let hour = timeString.split(':')[0]
  let minute = timeString.split(':')[1]
  let date = 18
  if (day == 3 || day == 4)
    date = 19

  return new Date(`December ${date}, 2020 ${hour}:${minute}:00+07:00`)
}

module.exports = { csvToJson, convertToJsTime, getListCSV }