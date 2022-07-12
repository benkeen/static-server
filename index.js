/**
 * Super-basic server that handles routing API requests and all requests to the main index.html file. It assumes
 * `grunt build` has been ran beforehand to generate the build artifacts in /dist.
 */
const express = require('express');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

// serve static assets normally
app.use(express.static(__dirname + '/public'));

// redirect everything else to index.html
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('server started on port ' + port);