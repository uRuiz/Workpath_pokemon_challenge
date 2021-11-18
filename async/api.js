"use strict";
/*
 * Just an example library that you could use for testing purposes. Your task is to write
 * the implementation as described in the README.md
 */

function dbFakeUserRequest(userId, callback) {
  const user = { name: "Somebody", roles: [1, 2] };
  const error = new Error(`User with id ${userId} does not exist`);
  const isValidRequest = userId === 1;

  if (typeof callback === "function") {
    return setImmediate(() =>
      callback.apply(null, isValidRequest ? [null, user] : [error])
    );
  }
  return new Promise((resolve, reject) =>
    setImmediate(() => (isValidRequest ? resolve(user) : reject(error)))
  );
}

function dbFakeRoleRequest(roleId, callback) {
  let role = {};
  let isValidRequest = true;
  const error = new Error("No such Role");
  switch (roleId) {
    case 1:
      role.name = "editor";
      break;
    case 2:
      role.name = "master";
      break;
    default:
      isValidRequest = false;
  }
  if (typeof callback === "function") {
    return setImmediate(() =>
      callback.apply(null, isValidRequest ? [null, role] : [error])
    );
  }
  return new Promise((resolve, reject) =>
    setImmediate(() => (isValidRequest ? resolve(role) : reject(error)))
  );
}

module.exports = { dbFakeUserRequest, dbFakeRoleRequest };
