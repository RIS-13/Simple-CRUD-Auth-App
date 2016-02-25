var express = require('express');
var router = express.Router();

// TODO: replaced on static files
router.route("/")
    .all(function (req, res) {
        var data = {'api_status': 'OK', 'time': new Date()};
        res.json(data);
    });

module.exports = router;