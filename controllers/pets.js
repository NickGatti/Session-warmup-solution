const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    if(!req.session.pets){
      req.session.pets = [];
      req.session.save(()=>{
        res.render("index", {pets: req.session.pets});
      })
    }else{
      res.render("index", {pets: req.session.pets});
    }

  },
  add: (req, res)=>{
    req.session.pets.push(req.body.name);
    req.session.save(()=>{
      res.redirect('/')
    })
  }
}
