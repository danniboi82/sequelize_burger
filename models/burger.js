var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    eaten : DataTypes.BOOLEAN,
  
}, {
  timestamp: true,
});
  return burger; 
};
