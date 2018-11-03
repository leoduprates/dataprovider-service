module.exports = function(app) {
  var api = {};
  var model = app.models.dataprovider;
  const json2csv = require('json2csv').Parser;

  api.dataprovider = function(query) {
    var data = [];
    var property = query.property.split(",");
    var quantity = query.quantity;

    console.log(property);
    console.log(quantity);

    if (query.property == "") {
      return model.helper;
    }

    if (quantity === "" || typeof quantity === "undefined") {
      quantity = 1
    }

    for (var i = 0; i < quantity; i++) {
      var object = {}
      console.log('a');
      for (var j = 0; j < property.length; j++) {
        object[property[j]] = model.generator(property[j]);
        console.log(property[j]);
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
