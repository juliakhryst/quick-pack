const express = require('express');
const path = require('path');

const app = express();
const clientPath = path.resolve(__dirname, '../dist/quick-pack');

// Serve only the static files form the dist directory
app.use(express.static(clientPath));

app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, clientPath, '/index.html'));
});

// Start the app by listening on the default Heroku port
const server = app.listen(process.env.PORT || 8080, function() {
    const port = server.address().port;
    console.log('The server is running on port: ' + port);
});
