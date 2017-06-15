let Response = require("../helpers/api.response")

exports.get = function(req, res) {
  res.json(new Response(null, 'Hello from Ayele!'));
};

exports.post = function(req, res) {
  res.json(new Response(null, 'Hello from Ayele!'));
};