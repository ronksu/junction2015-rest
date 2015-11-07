var Sequelize = require('sequelize');
var sequelize = new Sequelize("sqlite://db.sqlite");

var Badge = sequelize.import(__dirname + "/models/badge");
Badge.sync();

