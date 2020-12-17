"use strict";

const admin = require("./admin");
const majorData = require('./majorData.json')
const sponsorData = require("./sponsorData");

const { convertToJsTime, csvToJson, getListCSV } = require('../helper/convertData')


async function getPresentation(fileNameList, sessionData) {
  let dayDict = {}
  sessionData.forEach(element => {
    dayDict[element.sessionId] = element.day
  })
  let presentationData = await getListCSV(fileNameList)
  presentationData.forEach(element => {
    let timeList = element.date.split(/[-–]/)
    element.startDate = convertToJsTime(dayDict[element.sessionId], timeList[0])
    element.endDate = convertToJsTime(dayDict[element.sessionId], timeList[1])
    delete element.date
  })
  return presentationData
}

async function getSession(fileNameList) {
  let sessionData = await getListCSV(fileNameList)
  sessionData.forEach(element => {
    element.startDate = convertToJsTime(element.day, element.startDate)
    element.endDate = convertToJsTime(element.day, element.endDate)
  })
  return sessionData
}

module.exports = async function (app) {
  var Account = app.models.Account;
  var Session = app.models.Session;
  var Presentation = app.models.Presentation;
  var Sponsor = app.models.Sponsor;
  var ExtraData = app.models.ExtraData;
  var Major = app.models.Major;
  console.log("running initialization");

  // place file in init-data folder
  let sessionFileName = [], presentFileName = []
  for (let i=0; i<=9; i++) {
    sessionFileName.push(`${i}_session.csv`)
    presentFileName.push(`${i}_present.csv`)
  }
  let sessionData = await getSession(sessionFileName)
  let presentationData = await getPresentation(presentFileName, sessionData)

  function createDefaultAdmin() {
    Account.create(
      {
        username: admin.username,
        email: admin.email,
        password: admin.password,
      },
      function (err, account) {
        if (err) throw err;
        console.log("create account", account);
      }
    );
  }

  function createDefaultPresentation() {
    Presentation.create(presentationData, function (err, presentations) {
      if (err) throw err;
      console.log("create presentations", presentations.length);
    });
  }

  function createDefaultMajor() {
    Major.create(majorData, function (err, majors) {
      if (err) throw err;
      console.log("create majors", majors.length);
    });
  }

  function createDefaultSession() {
    Session.create(sessionData, function(err, sessions) {
      if (err) throw err;
      console.log("create sessions", sessions.length);
    });
  }

  function createDefaultSponsor() {
    Sponsor.create(sponsorData, function(err, sponsors) {
      if (err) throw err;
      console.log("create sponsors", sponsors.length);
    });
  }

  Account.find({}, (err, accounts) => {
    if (!accounts || !accounts[0]) {
      createDefaultAdmin();
    }
  });

  Session.find({}, (err, sessions) => {
    if (!sessions || !sessions[0]) {
      createDefaultSession();
    }
  });

  Sponsor.find({}, (err, sponsors) => {
    if (!sponsors || !sponsors[0]) {
      createDefaultSponsor();
    }
  })

  ExtraData.find({}, (err, sessions) => {
    if (!sessions || !sessions[0]) {
      ExtraData.create({
        name: "visited-count",
        value: JSON.stringify(1)
      })
    }
  });

  Presentation.find({}, (err, presentations) => {
    if (!presentations || !presentations[0]) {
      createDefaultPresentation();
    }
  });

  Major.find({}, (err, majors) => {
    if (!majors || !majors[0]) {
      createDefaultMajor();
    }
  });
};
