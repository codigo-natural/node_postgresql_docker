import dotenv from 'dotenv'
dotenv.config()

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbport: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
}