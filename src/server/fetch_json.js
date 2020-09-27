var express = require('express'),
  router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  if (req.query.exists === 'true') {
    res.send({ name: req.query.name, body: 'exists_', url: req.query.url });
  } else {
    var file = req.query.url;
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        console.log('Error: ' + err);
        res.send({ name: req.query.name, body: null, url: req.query.url });
        return;
      }
      data = JSON.parse(data);
      res.send({ name: req.query.name, body: data, url: req.query.url });
    });
  }
});

module.exports = router;
