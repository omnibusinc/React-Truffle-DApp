const Hapi = require('hapi');
const debug = require('debug')('server');
const routes = require('./routes/routes');

const port = 3000;
const profile = process.env.NODE_ENV || 'development';
const runtime = {
  profile,
  config: require('../config/server.config.' + profile + '.js'),
};

const server = new Hapi.Server();
server.connection({ port: port });

server.register(require('inert'), function (err) {
  if (err) {
      throw err;
  }

  server.route(routes.routes);

  server.ext('onPreResponse', function (request, reply) {
    if (request.response.isBoom) {
        return reply.redirect('/');
    }
    return reply.continue();
  });

  server.start(err => {
    if (err) {
      debug('unable to start server', err)
      throw err
    }

    console.log(`SERVER STARTED ON PORT ${port}`);
  });
});
