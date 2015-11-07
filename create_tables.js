require('./models')

var model_names = [
    'Badge',
    'Person',
    'PersonBadge'
];


var models = require('./models');
var User = models.User;

model_names.forEach(function(model_name) {
    var Model = models[model_name];
    Model.sync();
});
