'use strict';
var initFunction = require('../../server/init-data/init')
var majorData = require('../../constant/major.json')
var cacheAllData = null

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
      let [sessionData, presentationData, sponsorData] = await Promise.all([
        Presentation.app.models.Session.find({order: 'startDate ASC'}),
        Presentation.find({order: 'startDate ASC'}),
        Presentation.app.models.Sponsor.find()
      ])
      let numberOfPresentation = presentationData.length
      let numberOfAuthor = 0
      let authorDict = {}

      // cluster presentation to major
      let presentationDict = {}
      presentationData.forEach(element => {
        if (!authorDict[element.author]) {
          numberOfAuthor ++
          authorDict[element.author] = true
        }

        if (!presentationDict[element.majorId])
          presentationDict[element.majorId] = []
        presentationDict[element.majorId].push(element)
      });

      // stat
      let statisData = {
        numberOfMajor: majorData.length,
        numberOfPresentation,
        numberOfAuthor,
      }
      statisData.major

      let result = {
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
