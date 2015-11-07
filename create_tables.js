require('./models')

var model_names = [
    'Badge',
    'Person',
    'PersonBadge',
    'Activity',
    'PersonActivity'
];


var models = require('./models');

model_names.forEach(function(model_name) {
    var Model = models[model_name];
    Model.sync();
});
