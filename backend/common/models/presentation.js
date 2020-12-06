'use strict';
var initFunction = require('../../server/init-data/init')
var cacheAllData = null

module.exports = function(Presentation) {

  Presentation.initData = function(cb) {
    initFunction(Presentation.app)
    cb(null, 'init running');
  }

  Presentation.getAllData = async function() {
    let currentTime = Date.now()
    if (cacheAllData && cacheAllData.expiredTime > currentTime) {
      return cacheAllData.data
    }
    else {
      let [sessionData, presentationData, sponsorData] = await Promise.all([
        Presentation.app.models.Session.find({order: 'startDate ASC'}),
        Presentation.find({order: 'startDate ASC'}),
        Presentation.app.models.Sponsor.find()
      ])

      // cluster presentation to major
      let presentationDict = {}
      presentationData.forEach(element => {
        if (!presentationDict[element.major])
          presentationDict[element.major] = []
        presentationDict[element.major].push(element)
      });
      let result = {
        'session': sessionData,
        'presentation': presentationDict,
        'sponsor': sponsorData
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
