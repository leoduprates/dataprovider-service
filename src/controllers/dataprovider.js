const Json2csv = require('json2csv').Parser;

module.exports = (app) => {
  const api = {};
  const models = app.models.dataprovider;

  api.dataprovider = (query) => {
    const data = [];
    let { quantity, property } = query;

    if (quantity === '' || typeof quantity === 'undefined') {
      quantity = 1;
    }

    if (property === '' || typeof property === 'undefined') return models.helper;

    property = query.property.split(',');

    for (let i = 0; i < quantity; i += 1) {
      const object = {};

      property.forEach((name) => {
        object[name] = models.generator(name);
      });

      data.push(object);
    }

    if (query.format === 'csv') {
      const jsonParser = new Json2csv({
        property,
      });

      return jsonParser.parse(data);
    }

    return data;
  };

  return api;
};
