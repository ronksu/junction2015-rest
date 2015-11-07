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

// Describe relationships
(function(m) {
    m.Badge.belongsToMany(m.Person, { through: m.PersonBadge });
    m.Person.belongsToMany(m.Badge, { through: m.PersonBadge });
})(module.exports);

// Export connection
module.exports.sequelize = sequelize;
