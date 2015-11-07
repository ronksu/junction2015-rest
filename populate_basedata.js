var models = require('./models');

// Clean the database


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

// Create activities
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
activities.forEach(function (activity) {
    Activity.create(activity);
});

// Create Badges
var Badge = models.Badge;
var badges = [
    {
        'name': 'Fleet Explorer',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Continent Hopper',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Airport Hog',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Cool Commuter',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Foodie',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Mile Champion',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Transfer Guru',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Socialite',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Movie Marathoner',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Tough Traveller',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Light Packer',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
    {
        'name': 'Sauna Lover',
        'icon': null,
        'description': '',
        'unique_string': null,
        'count_int': null,
        'threshold_int': null,
        'threshold_direction': null,
    },
];
badges.forEach(function (badge) {
    Badge.create(badge);
});
