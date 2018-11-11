// NPM Stuff!
var path = require("path");
var friendObj = require(__dirname + '/../data/friends-table.js')

console.log("FILE: api-routes.js ACTIVE");
console.log(friendObj);

// var htmlRoutes = {};
// htmlRoutes.home = function(app) {

module.exports = function(app) {
  app.get('/api/friendlist', function(req, res) {
    console.log("app.get in api-routes.js got hit!");
    console.log(friendObj);
    res.json(friendObj);
  })
}


// module.exports = htmlRoutes