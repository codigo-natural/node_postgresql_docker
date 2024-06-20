import cors from 'cors';
import express from 'express';
import routerApi from './routes/index.js';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
  ormErrorHandler,
} from './middlewares/error.handler.js';
import config from './config/index.js';
import { sequelize } from './libs/sequelize.js';
import { checkApiKey } from './middlewares/auth.handler.js';

const app = express();
const port = config.port || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");

    app.listen(port, () => {
      console.log("===================================");
      console.log(`Server is running on port ${port}`);
      console.log("===================================");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main()
