var redis = require("redis");

var redis_client = redis.createClient(6379, '127.0.0.1');

//so ugly... refactor later.
exports.stats = function (req, res) {
  redis_client.multi()
    .smembers('ok')
    .smembers('nok')
    .smembers('rfailed')
    .smembers('failed')
    .smembers('inexistent')
    .hlen('times')
    .smembers('running')
    .exec(function (err, replies) {
      res.json({
        ok: replies[0].length,
        nok: replies[1].length,
        rfailed: replies[2].length,
        failed: replies[3].length,
        inexistent: replies[4].length,
        total: replies[5],
        running: replies[6]
      });
    });
};

exports.timedout = function (req, res) {
  redis_client.smembers('failed', function(err, members) {
    res.json(members);
  });
};

exports.tarball = function (req, res) {
  redis_client.smembers('rfailed', function(err, members) {
    res.json(members);
  });
};

exports.ok = function (req, res) {
  redis_client.smembers('ok', function(err, members) {
    res.json(members);
  });
};

exports.nok = function (req, res) {
  redis_client.smembers('nok', function(err, members) {
    res.json(members);
  });
};

exports.withouttests = function (req, res) {
  redis_client.smembers('inexistent', function(err, members) {
    res.json(members);
  });
};
