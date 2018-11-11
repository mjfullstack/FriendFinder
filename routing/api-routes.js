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
  });

  app.post('/survey', function(req, res) {
    console.log("app.post in api-routes.js got hit!");
    console.log("Echo back request...");
    console.log(req.body);
    res.json(req.body);

    // Do the Compairison
    var maxDifference = 1000;
    var match = {
      name : "",
      photo : "",
      total : 0
    };
    
    // Find minimum difference between new friend total and each friend's total in database
    friendObj.map(function(item, idx) {
      console.log("NEW Friend - req.body.total: " + req.body.total);
      console.log(item.name + "'s item.total: " + item.total);
      currDiff = Math.abs(req.body.total - item.total);
      console.log("currDiff: " + currDiff);
      console.log("maxDifference: " + maxDifference);
      if ( currDiff < maxDifference ) {
        match.name = item.name;
        match.photo = item.photo;
        match.total = item.total;
        maxDifference = currDiff;
        console.log("Best Match so far: " + match.name)
      }
      console.log("Best Match Found: " + match.name)
    })
    friendObj.push(req.body)
  });
}


// module.exports = htmlRoutes