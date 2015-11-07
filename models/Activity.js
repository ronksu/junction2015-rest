module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Activity", {
        'name': DataTypes.STRING,
    });
}
