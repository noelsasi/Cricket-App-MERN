const path = require("path");
const rootPath = path.normalize(__dirname + "/.");
const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    root: rootPath,
    app: {
      name: "MERN-Cricket-app"
    },
    port: process.env.PORT || 5000,
    db: "mongodb://localhost:27017/cricket"
  },

  test: {
    root: rootPath,
    app: {
      name: "MERN-Cricket-app"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/cricket"
  },

  production: {
    root: rootPath,
    app: {
      name: "MERN-Cricket-app"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/cricket"
  }
};

module.exports = config[env];
