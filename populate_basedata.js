var models = require('./models');

// Create some persons
var Person = models.Person;
var persons = [
    {
        'memberNumber': '680297272',
    },
    {
        'memberNumber': '680297686',
    },
];
persons.forEach(function (person) {
    Person.create(person);
});

var Activity = models.Activity;
var activities = [
    { 'name': 'Flew Airplane model' },
    { 'name': 'Visited Continent' },
    { 'name': 'Visited Airport' },
    { 'name': 'Flew Route' },
    { 'name': 'Pre-ordered Food' },
    { 'name': 'Flew Miles' },
    { 'name': 'Transferred' },
    { 'name': 'Social Media Tags' },
    { 'name': 'Watched a Movie' },
    { 'name': 'Flew minutes' },
    { 'name': 'Went to Sauna' },
];