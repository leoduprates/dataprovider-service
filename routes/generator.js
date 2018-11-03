module.exports = function(app) {
  var api = app.api.dataprovider;

  app.get('/dataprovider', function(req, res) {
    if (req.query.format == 'csv') {
      res.format({
        'text/plain': function() {
          res.send(api.dataprovider(req.query));
        }
      });
    } else {
      console.log(req.query);
      res.json(api.dataprovider(req.query));
    }
  });
};
