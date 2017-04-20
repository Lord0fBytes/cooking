var configValues = require('../config');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds111441.mlab.com:11441/cookingnode';
  }
}
