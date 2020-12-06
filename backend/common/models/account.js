"use strict";

module.exports = function (Account) {
  Account.disableRemoteMethod("create", true);
};
