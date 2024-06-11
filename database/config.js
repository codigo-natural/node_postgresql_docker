import config from '../config/index.js';

const USER = encodeURIComponent(config.dbUserPostgres);
const PASSWORD = encodeURIComponent(config.dbPasswordPostgres);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbportPostgres}/${config.dbNamePostgres}`;

export default {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
