var app = require('./config/express')();

app.listen(3000, function() {
  console.log('Server runnint in port 3000.');
});

module.exports = app;
