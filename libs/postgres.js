import pg from 'pg'
const { Client } = pg

async function getConnection() {

  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })
  await client.connect()
  return client
}

export default getConnection