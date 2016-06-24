var express = require('express');
cors = require('cors');
var bodyParser = require('body-parser');

var router = express.Router();
var DelimeterService=require("./Service.js");



router.route('/localeDelimeters/:property').get(function (req, res) {
    res.header({"Access-Control-Allow-Origin": "*"});
    var delimeters=DelimeterService.filterProperty(req.params.property);
    res.json(delimeters);
});

router.route('/localeDelimeters').post(function (req, res) {
    res.header({"Access-Control-Allow-Origin": "*"});
    var delimeters=DelimeterService.addProperty(req.body.prop);
    res.send(delimeters);
});

router.route('/localeDelimeters/:property').delete(function (req, res) {
    console.log("prop: "+req.params.property);
    res.header({"Access-Control-Allow-Origin": "*"});
    res.header("Access-Control-Allow-Methods", "DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    var delimeters=DelimeterService.removeProperty(req.params.property);
    res.json(delimeters);
});


var serverApp = express();
serverApp.options('*', cors());
serverApp.set('port', process.env.PORT || 8000);

serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({extended: true}));
serverApp.use('/api', router);

var server = serverApp.listen(serverApp.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});