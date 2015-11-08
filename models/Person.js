module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Person", {
        'memberNumber': {'type': DataTypes.STRING, 'primaryKey': true }
    });
}
