import { Sequelize } from 'sequelize';
import { config } from '../config/index.js';
import { setupModels } from '../database/models/index.js';

// const USER = encodeURIComponent(config.dbUserPostgres);
// const PASSWORD = encodeURIComponent(config.dbPasswordPostgres);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbportPostgres}/${config.dbNamePostgres}`;

// const sequelize = new Sequelize(URI,
//   {
//     dialect: 'postgres',
//     logging: console.log
//   }
// );

const USER = encodeURIComponent(config.dbUserMysql);
const PASSWORD = encodeURIComponent(config.dbPasswordMysql);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPortMysql}/${config.dbNameMysql}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,
});

setupModels(sequelize);

sequelize.sync();
const models = sequelize.models;

export { sequelize, models };
