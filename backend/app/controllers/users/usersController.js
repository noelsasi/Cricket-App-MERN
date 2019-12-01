const mongoose = require("mongoose");
const users = mongoose.model("users");

module.exports = {
  view: function(req, res, next) {
    // eslint-disable-next-line array-callback-return
    users.find((err, list) => {
      if (err) return next(err);
      res.send({
        list: list
      });
    });
  },

  userDetail: function(req, res, next) {
    // console.log(req.session.passport.user, "Session stored User");
    let id = req.session.passport.user.id;
    users.findById(id, (err, todo) => {
      if (err) return next(err);
      res.json(todo);
    });
  },

  addTeam: function(req, res) {
    let id = req.session.passport.user.id;
    users.findById(id, function(err, User) {
      console.log(req.body.favTeam, "lllll");
      if (!User) {
        res.send("data is not found");
      } else {
        User.favTeam = req.body.favTeam;
      }
      User.save()
        .then(todo => {
          res.json("User Team updated");
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  }
};
