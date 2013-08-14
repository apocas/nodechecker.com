var request = require('request');


exports.stats = function (req, res) {
  request('http://api.nodechecker.com/stats', function (error, response, body) {
    res.end(body);
  });
};


exports.info = function (req, res) {
  var module = req.params.module;
  request('http://api.nodechecker.com/info/' + module, function (error, response, body) {
    res.end(body);
  });
};

