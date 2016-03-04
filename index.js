var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

var apiRouter = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/", apiRouter);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});
