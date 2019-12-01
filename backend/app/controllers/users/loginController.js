module.exports = {
  view: function(req, res, next) {
    res.send({
      title: "dfghjkl;'"
    });
  },

  logout: function(req, res, next) {
    console.log("Ia m loggin our");
    req.session.destroy(function(err) {
      if (err) console.log(err);
      res.clearCookie("connect.sid");
      req.logout();
      res.redirect("/");
    });
  }
};
