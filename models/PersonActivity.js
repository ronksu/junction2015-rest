module.exports = function(sequelize, DataTypes) {
    return sequelize.define("PersonActivity", {
        'timestamp': DataTypes.DATE,
        'value_string': DataTypes.STRING,
        'value_int': DataTypes.INT,
    })
}
