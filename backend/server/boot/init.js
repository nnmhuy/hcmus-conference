"use strict";
var admin = require("./admin");
var sessionData = require("./sessionData");
var presentationData = require("./presentationData");
const { find } = require("./presentationData");

module.exports = function (app) {
  var Account = app.models.Account;
  var Session = app.models.Session;
  var Presentation = app.models.Presentation;
  console.log("running initialization");

  function createDefaultSuperAdmin() {
    console.log("Accounts");
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
      item.session = sessions.find(
        (session) =>
          session.startDate <= item.startDate && session.endDate >= item.endDate
      ).id;
    });
    Presentation.create(presentationData, function (err, presentations) {
      if (err) throw err;
      console.log("create presentations", presentations);
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
    Session.create(sessionData, {
      function(err, sessions) {
        if (err) throw err;
        console.log("create sessions", sessions);
        checkPrensentation(sessions);
      },
    });
  }

  Account.find({}, (err, accounts) => {
    if (!accounts || !accounts[0]) {
      createDefaultSuperAdmin();
    }
  });

  Session.find({}, (err, sessions) => {
    if (!sessions || !sessions[0]) {
      createDefaultSession();
    } else {
      checkPrensentation(sessions);
    }
  });
};
