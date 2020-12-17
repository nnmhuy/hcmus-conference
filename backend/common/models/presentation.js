'use strict';
var initFunction = require('../../server/init-data/init')
var cacheAllData = null

function updateAuthor(numberOfAuthor, authorDict, authorString) {
  let authorList = []
  let authorList1 = authorString.split('and')
  authorList1.forEach(element => {
    let subList = element.trim().split(',')
    authorList = authorList.concat(subList)
  })
  authorList.forEach(element => {
    let oneAuthor = element.trim()
    if (!authorDict[oneAuthor]) {
      numberOfAuthor ++
      authorDict[oneAuthor] = true
    } 
  })
  return numberOfAuthor
}

module.exports = function(Presentation) {

  Presentation.initData = function(cb) {
    initFunction(Presentation.app)
    cb(null, 'init running');
  }

  Presentation.getAllData = async function() {
    let currentTime = new Date()
    if (cacheAllData && cacheAllData.expiredTime > currentTime) {
      return cacheAllData.data
    }
    else {
      let [sessionData, presentationData, sponsorData, visitedCountModel, majorData] = await Promise.all([
        Presentation.app.models.Session.find({order: 'startDate ASC'}),
        Presentation.find({order: 'startDate ASC'}),
        Presentation.app.models.Sponsor.find(),
        Presentation.app.models.ExtraData.findOne({ where: { name: "visited-count" } }),
        Presentation.app.models.Major.find({order: 'majorId ASC'})
      ])
      let numberOfPresentation = presentationData.length
      let numberOfAuthor = 0
      let authorDict = {} 

      // cluster presentation to session
      let presentationDict = {}
      presentationData.forEach(element => {
        numberOfAuthor = updateAuthor(numberOfAuthor, authorDict, element.author)

        if (!presentationDict[element.sessionId])
          presentationDict[element.sessionId] = []
        presentationDict[element.sessionId].push(element)
      });

      // stat
      let statisData = {
        numberOfMajor: majorData.length,
        numberOfPresentation,
        numberOfAuthor,
        numberOfVisitors: JSON.parse(visitedCountModel.value)
      }

      let result = {
        'major': majorData,
        'session': sessionData,
        'presentation': presentationDict,
        'sponsor': sponsorData,
        'statis': statisData
      }

      // update cache
      let newExpiredTime = new Date()
      newExpiredTime.setSeconds(newExpiredTime.getSeconds() + 30);
      cacheAllData = {
        'data': result,
        'expiredTime': newExpiredTime
      }
      return result
    }
  }

  Presentation.remoteMethod('initData', {
    returns: {arg: 'message', type: 'string'}
  });
  Presentation.remoteMethod('getAllData', {
    http: {verb: 'get'},
    returns: {arg: 'data', type: 'object'}
  });
};
