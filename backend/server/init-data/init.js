"use strict";
var admin = require("./admin");
var sessionData = require("./sessionData");
var presentationData = require("./presentationData");
const sponsorData = require("./sponsorData");

module.exports = function (app) {
  var Account = app.models.Account;
  var Session = app.models.Session;
  var Presentation = app.models.Presentation;
  var Sponsor = app.models.Sponsor;
  console.log("running initialization");

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

  function createDefaultPresentation(sessions) {
    presentationData.forEach((item) => {
      item.sessionId = sessions.find(
        (session) =>
          session.startDate <= item.startDate && session.endDate >= item.endDate
      ).id;
    });
    Presentation.create(presentationData, function (err, presentations) {
      if (err) throw err;
      console.log("create presentations", presentations.length);
    });
  }

  function checkPrensentation(sessions) {
    Presentation.find({}, (err, presentations) => {
      if (!presentations || !presentations[0]) {
        createDefaultPresentation(sessions);
      }
    });
  }

  function createDefaultSession() {
    Session.create(sessionData, 
      function(err, sessions) {
        if (err) throw err;
        console.log("create sessions", sessions.length);
        checkPrensentation(sessions);
      },
    );
  }

  function createDefaultSponsor() {
    Sponsor.create(sponsorData, 
      function(err, sponsors) {
        if (err) throw err;
        console.log("create sponsors", sponsors.length);
      },
    );
  }

  Account.find({}, (err, accounts) => {
    if (!accounts || !accounts[0]) {
      createDefaultAdmin();
    }
  });

  Session.find({}, (err, sessions) => {
    if (!sessions || !sessions[0]) {
      createDefaultSession();
    } else {
      checkPrensentation(sessions);
    }
  });

  Sponsor.find({}, (err, sponsors) => {
    if (!sponsors || !sponsors[0]) {
      createDefaultSponsor();
    }
  })
};
