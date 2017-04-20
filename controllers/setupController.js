var mongoose = require('mongoose');

mongoose.connect('mongodb://cn_user:Jkht123!$@ds111441.mlab.com:11441/cookingnode');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //Connected!
});
