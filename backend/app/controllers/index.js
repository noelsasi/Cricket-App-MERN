var homeController = require("./homeController");
var loginController = require("./users/loginController");
var signupController = require("./users/signupController");
var usersController = require("./users/usersController");

module.exports = {
  home: homeController,
  login: loginController,
  signup: signupController,
  users: usersController
};
