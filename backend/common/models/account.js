"use strict";

module.exports = function (Account) {
  Account.disableRemoteMethodByName("create", true);
};
