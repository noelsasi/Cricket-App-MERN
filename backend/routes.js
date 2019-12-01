var controllers = require("./app/controllers/");
var passport = require("passport");

module.exports = function(app) {
  // Login Route
  // app.get("/", controllers.login.view);
  app.post(
    "/login",
    passport.authenticate("local-signin", {
      failureRedirect: "/login",
      failureFlash: true,
      successRedirect: "/user"
    })
  );

  // app.get("/register", controllers.signup.view);
  app.post(
    "/register",
    passport.authenticate("local-signup", {
      failureRedirect: "/register",
      failureFlash: true,
      successRedirect: "/matches"
    })
  );

  app.get("/logout", controllers.login.logout);

  app.get("/users", controllers.users.view);
  app.get("/user", controllers.users.userDetail);
  app.post("/user/updateTeam", controllers.users.addTeam);

  // matches Route
  app.get("/matches", controllers.home.view);
  app.get("/matches/:id", controllers.home.one);
  app.post("/result", controllers.home.prediction);
};
