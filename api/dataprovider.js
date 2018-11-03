module.exports = function(app) {
  var api = {};
  var model = app.models.dataprovider;
  const json2csv = require('json2csv').Parser;

  api.dataprovider = function(query) {
    var data = [];
    var quantity = query.quantity;
    var property = query.property;

    if (quantity === "" || typeof quantity === "undefined") {
      quantity = 1
    }

    if (property == "" || typeof property === "undefined") {
      return model.helper;
    } else {
      property = query.property.split(",");
    }

    for (var i = 0; i < quantity; i++) {
      var object = {}
      for (var j = 0; j < property.length; j++) {
        object[property[j]] = model.generator(property[j]);
      }

      data.push(object)
    }

    if (query.format == 'csv') {
      const jsonParser = new json2csv({
        property
      });
      return jsonParser.parse(data);
    } else {
      return data;
    }
  };

  return api;
}
