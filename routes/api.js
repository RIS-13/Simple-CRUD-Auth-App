var express = require('express');
var router = express.Router();

// TODO: add real API methods
router.route("methodName/:id")
    .get(function (req, res) {
        res.json({'method': 'get', 'id': req.params.id});
    })
    .put(function (req, res) {
        res.json({'method': 'put', 'id': req.params.id});
    })
    .delete(function (req, res) {
        res.json({'method': 'delete', 'id': req.params.id});
    });

router.route("*")
    .all(function (req, res) {
        res.json({'error': 'method not founded'});
    });
module.exports = router;