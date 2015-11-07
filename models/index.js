var Sequelize = require('sequelize');
var sequelize = new Sequelize("sqlite://db.sqlite");

var models = [
    'Badge',
    'Person',
    'PersonBadge',
    'Activity'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// Describe relationships
(function(m) {
    m.Badge.belongsToMany(m.Person, { through: m.PersonBadge });
    m.Person.belongsToMany(m.Badge, { through: m.PersonBadge });
    m.Activity.belongsTo(m.Person);
})(module.exports);

// Export connection
module.exports.sequelize = sequelize;
