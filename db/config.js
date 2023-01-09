const env = require('../env.config');

module.exports = {
  mongodb: {
    connectTo: (database) => `mongodb+srv://coderhouse:coder123house456@cluster0.zhv02a9.mongodb.net/desafio11?retryWrites=true&w=majority`,
 
  }
  // Change here for your mongo atlas account's URI
}