import { Sequelize } from "sequelize";
import { config } from '../config/index.js';
import { setupModels } from "../database/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbName}`;

const sequelize = new Sequelize(URI, 
  { 
    dialect: 'postgres', 
    logging: console.log 
  }
);

setupModels(sequelize);

sequelize.sync();
const models = sequelize.models;

export {sequelize, models};