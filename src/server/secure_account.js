var express = require('express'),
    router = express.Router();
var Request = require('request');

router.get('/', function(req, res) {
	Request({
        url: 'https://www.gotapnow.com/buireg/V1.2/api/Password/FreezeBusinessAccount?reset_password_request_id='+req.query.reset_password_request_id,
        method: 'GET',
        // json: req.query
        },
		(error, response) => {
			if (error) {
                console.log(error);
            }
            res.send(response);
		}
	);
});

module.exports = router;