const convict = require('convict');

const schema = {
  env: {
    doc: 'The application environment',
    format: ['development', 'test', 'production'],
    default: 'development',
    env: 'NODE_ENV',
  },
  server: {
    ip: {
      doc: 'The IP address to bind',
      format: 'ipaddress',
      default: null,
      env: 'IP_ADDRESS'
    },
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: null,
      env: 'PORT'
    },
    startWorkers: {
      doc: 'Number of workers to start',
      format: 'integer',
      default: 1,
      env: 'WORKERS'
    }
  }
};

const config = convict(schema);
const env = config.get('env');

config.set('server.startWorkers', require("os").cpus().length);

config.loadFile([
  `${__dirname}/common.json`,
  `${__dirname}/${env}.json`
]);

config.validate({strict: true});

module.exports = config;