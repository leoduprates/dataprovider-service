const consign = require('consign');
const express = require('express');

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  consign({ cwd: 'src' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
