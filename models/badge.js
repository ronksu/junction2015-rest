module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Badge", {
        'name': DataTypes.STRING,
        'icon': DataTypes.STRING,
        'description': DataTypes.TEXT,
        'unique_string': DataTypes.INTEGER,
        'count_int': DataTypes.INTEGER,
        'threshold_int': DataTypes.INTEGER,
        'threshold_direction': DataTypes.ENUM('above', 'below'),
    })
}
