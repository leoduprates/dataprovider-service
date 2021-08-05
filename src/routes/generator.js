module.exports = (app) => {
  const api = app.controllers.dataprovider;

  app.get('/dataprovider', (req, res) => {
    if (req.query.format === 'csv') {
      res.format({
        'text/plain': () => {
          res.send(api.dataprovider(req.query));
        },
      });
    } else {
      res.json(api.dataprovider(req.query));
    }
  });
};
