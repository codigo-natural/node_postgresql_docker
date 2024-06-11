import dotenv from "dotenv";
dotenv.config();

const config = {
  // config app
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST,
  // config database for postgres
  dbportPostgres: process.env.DB_PORT_POSTGRES,
  dbUserPostgres: process.env.POSTGRES_USER,
  dbNamePostgres: process.env.POSTGRES_DB_NAME,
  dbPasswordPostgres: process.env.POSTGRES_PASSWORD,
  //  config database for mysql
  dbUserMysql: process.env.MYSQL_USER,
  dbPasswordMysql: process.env.MYSQL_PASSWORD,
  dbPortMysql: process.env.MYSQL_PORT,
  dbNameMysql: process.env.MYSQL_DB_NAME,
};

export default config