import pg from 'pg';
import { config } from '../config/index.js';
const { Pool } = pg;
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbport}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

export default pool;
