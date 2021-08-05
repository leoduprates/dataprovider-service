const server = require('./src/server/server')();

const PORT = process.env.PORT || 3000;

server.listen(PORT);

module.exports = server;
