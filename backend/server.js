const express = require("express");
const config = require("./config");
const glob = require("glob");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(config.db);
const db = mongoose.connection;
db.on("error", () => {
  throw new Error("unable to connect to database at " + config.db);
});

const models = glob.sync(config.root + "/app/models/*.js");
models.forEach(function(model) {
  require(model);
});
const app = express();
var passport = require("passport");
var session = require("express-session");
const flash = require("connect-flash");

require("./passport")(passport);
app.use(bodyParser.json());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

require("./routes")(app);

app.listen(config.port, () => {
  console.log("Express server listening on port " + config.port);
});
