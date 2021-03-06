const express = require('express');
const path = require('path');
const request = require('request');
const cors = require('cors')

const app = express();
const clientPath = path.resolve(__dirname, '../dist/quick-pack');

// Serve only the static files form the dist directory
app.use(express.static(clientPath));
app.use(cors());

const weatherDomain = 'https://api.darksky.net/';
// 32f7fdff550c517eb93e9ccdc62bbca2  new key for demo
app.get('/weather', function(req, res) {
    request.get(`${weatherDomain}forecast/32f7fdff550c517eb93e9ccdc62bbca2/${req.query.lat},${req.query.lng},${req.query.t}T12:00:00+02:00?units=si&lang=${req.query.l}`, function (error, response, body) {
        if (error) {
            res.status(error.status).send(error);
        }

        res.send(body);
      })
});

app.all('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, clientPath, '/index.html'));
});



// Start the app by listening on the default Heroku port
const server = app.listen(process.env.PORT || 8080, function() {
    const port = server.address().port;
    console.log('The server is running on port: ' + port);
});
