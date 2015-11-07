var Sequelize = require('sequelize');
var sequelize = new Sequelize("sqlite://db.sqlite");

var models = [
    'Badge',
    'Person',
    'PersonBadge',
    'Activity',
    'PersonActivity'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// Describe relationships
(function(m) {
    m.Badge.belongsToMany(m.Person, { through: m.PersonBadge });
    m.Person.belongsToMany(m.Badge, { through: m.PersonBadge });

    m.Activity.belongsToMany(m.Person, { through: m.PersonActivity });
    m.Person.belongsToMany(m.Activity, { through: m.PersonActivity });

    m.Activity.hasMany(m.Badge);

})(module.exports);

// Export connection
module.exports.sequelize = sequelize;
