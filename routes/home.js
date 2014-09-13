var express = require('express');
var router = express.Router();

module.exports = function(app) {
	var home = app.controllers.home;
	app.get('/', home.index);
}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
