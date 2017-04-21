var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./routes/index');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiCtlr');

var app = express();
var port = process.env.PORT || 3000;
// view engine setup
//app.set('views', path(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/assets', express.static(__dirname + '/public'));

//connect to MongoDB
mongoose.connect(config.getDbConnectionString());
//Seed the data
setupController(app);
apiController(app);

app.get('/', function(req, res, next) {
  res.render('login');
});

app.listen(port);
