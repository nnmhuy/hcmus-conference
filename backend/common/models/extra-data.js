'use strict';

module.exports = function(ExtraData) {
  ExtraData.updateVisitedCount = async function () {
    let visitedCountModel = await ExtraData.findOne({ where: { name: "visited-count" } })
    visitedCountModel.value = JSON.stringify(JSON.parse(visitedCountModel.value) + 1)
    await visitedCountModel.save()

    return {
      status: true,
      value: visitedCountModel.value
    }
  }

  ExtraData.remoteMethod('updateVisitedCount', {
    http: { verb: 'get', "path": "/update-visited-count" },
    returns: { arg: 'data', type: 'object' }
  });
};
