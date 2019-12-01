const mongoose = require("mongoose");
const matches = mongoose.model("matches");

module.exports = {
  view: function(req, res, next) {
    // eslint-disable-next-line array-callback-return
    matches.find((err, list) => {
      if (err) return next(err);
      res.send({
        list: list
      });
    });
  },

  one: function(req, res, next) {
    let id = req.params.id;
    matches.findById(id, (err, todo) => {
      if (err) return next(err);
      res.json(todo);
    });
  },

  prediction: function(req, res) {
    const bodyTeam1 = req.body.team1;
    const bodyTeam2 = req.body.team2;
    Promise.all([
      matches.find({
        team1: bodyTeam1,
        team2: bodyTeam2
      }),
      matches.find({
        team1: bodyTeam2,
        team2: bodyTeam1
      })
    ]).then(data => {
      let result1 = "",
        result2 = "",
        check = [],
        check1 = "",
        check2 = "";
      if (data) {
        result1 = data[0].map(x => {
          return {
            value: x.winner
          };
        });
        result2 = data[1].map(x => {
          return {
            value: x.winner
          };
        });
        check1 = result1.map(x => x.value);
        check2 = result2.map(x => x.value);
        check = check1.concat(check2);
      }
      var counts = {};
      check.forEach(x => {
        counts[x] = (counts[x] || 0) + 1;
      });
      let winner = "";
      if (bodyTeam1.count > bodyTeam2) {
        winner = bodyTeam1;
      } else {
        winner = bodyTeam2;
      }
      console.log(counts);
      console.log(winner);
      // res.json(check);
      res.send({
        counts: counts,
        winner: winner
      });
    });
  }
};
