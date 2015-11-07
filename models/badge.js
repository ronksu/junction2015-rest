module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Badge", {
        'name': DataTypes.STRING,
        'icon': DataTypes.STRING,
        'description': DataTypes.TEXT,
    })
}