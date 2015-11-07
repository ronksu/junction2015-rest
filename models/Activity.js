module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Activity", {
        'name': DataTypes.STRING,
        'type': DataTypes.ENUM('Flight', 'Purchase', 'Presence', 'misc'),
        'data': DataTypes.BLOB
    });
}
