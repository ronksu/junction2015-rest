module.exports = function(sequelize, DataTypes) {
    return sequelize.define("PersonBadge", {
        'status': DataTypes.STRING,
        'achieved_location': DataTypes.STRING,
        'achieved_timestamp': DataTypes.DATE
    });
}
