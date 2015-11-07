var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Badge Hunt API v0.1");
});

app.get('/badges', function(req, res) {
    res.send([
        {
            'name':'SuperAwesomeBadge1',
            'icon':"a.bad.url"
        },
        {
            'name':'SuperAwesomeBadge2',
            'icon':"a.bad.url2"
        },
    ]);

});

app.get('/badges/:id', function(req, res) {
    res.send({
        'id': req.params.id,
        'name': 'SuperAwesomeBadge1',
        'icon': 'a.bad.url',
        'description': 'This is a very cool badge you can show off to your friends',
        'status': {
            'earned': true,
            'earnLocation': 'iHaveNoClueWhatTypeIShouldBe',
            'earnTs': '2015-04-01T00:34:01+0200'
        }
    });
});

var server = app.listen(8080, '0.0.0.0', function() {
    console.log("Hit me, I am listening at localhost:8080.");
})