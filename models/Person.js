module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Person", {
        'memberNumber': DataTypes.STRING,
    });
}
