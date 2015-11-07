var Sequelize = require('sequelize');
var sequelize = new Sequelize("sqlite://db.sqlite");

var models = [
    'Badge',
    'Person',
    'PersonBadge'
];
models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
/*
(function(m) {
    m.PhoneNumber.belongsTo(m.User);
    m.Task.belongsTo(m.User);
    m.User.hasMany(m.Task);
    m.User.hasMany(m.PhoneNumber);
})(module.exports);
*/
// export connection
module.exports.sequelize = sequelize;
