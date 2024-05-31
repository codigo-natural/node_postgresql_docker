import { Sequelize } from "sequelize";

import { config } from '../config/index.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbName}`;

const sequelize = new Sequelize(URI, 
  { 
    dialect: 'postgres', 
    logging: console.log 
  }
);

export default sequelize;