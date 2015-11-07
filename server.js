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

var server = app.listen(8080, '0.0.0.0', function() {
    console.log("Hit me, I am listening at localhost:8080.");
})