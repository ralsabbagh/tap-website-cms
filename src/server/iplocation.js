var express = require('express'),
  router = express.Router();
var iplocation = require('iplocation').default;

router.get('/', function (req, res) {
  iplocation(req.query.ip).then((result) => {
    res.send({ countryCode: result.countryCode.toLowerCase() });
  });
});

module.exports = router;
