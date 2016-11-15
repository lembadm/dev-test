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
    }
  },
  db: {
    database: {
      doc: 'The name of the database',
      format: String,
      default: 'wyze_route',
      env: 'DB_NAME'
    },
    username: {
      doc: 'The username which is used to authenticate against the database.',
      format: String,
      default: 'root',
      env: 'DB_USERNAME'
    },
    password: {
      doc: 'The password which is used to authenticate against the database.',
      format: String,
      default: '',
      env: 'DB_PASSWORD'
    },
    options: {
      dialect: {
        doc: 'The dialect of the database you are connecting to. One of mysql, postgres, sqlite and mssql.',
        format: ['mysql', 'postgres', 'sqlite', 'mssql'],
        default: 'mysql',
        env: 'DB_DIALECT'
      },
      dialectModulePath: {
        doc: 'If specified, load the dialect library from this path.',
        format: String,
        default: 'mysql2',
        env: 'DB_DIALECT_PATH'
      },
      host: {
        doc: 'The host of the relational database.',
        format: String,
        default: 'localhost',
        env: 'DB_HOST'
      },
      port: {
        doc: 'The port of the relational database.',
        format: 'port',
        default: 3306,
        env: 'DB_PORT'
      },
      protocol: {
        doc: 'The protocol of the relational database.',
        format: String,
        default: 'tcp',
        env: 'DB_PROTOCOL'
      }
    }
  }
};

const config = convict(schema);
const env = config.get('env');

config.loadFile([
  `${__dirname}/common.json`,
  `${__dirname}/${env}.json`
]);

config.validate({strict: true});

module.exports = config;