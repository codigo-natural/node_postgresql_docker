import pkg from 'umzug'
const { Umzug, SequelizeStorage } = pkg
import { sequelize } from '../libs/sequelize.js'

const umzug = new Umzug({
  migrations: {
    glob: 'migrations/*.{js,cjs,mjs}',
    resolve: ({ name, path, context }) => {
      const migration = import(path);
      return {
        name,
        up: async (params) => (await migration).up(params),
        down: async (params) => (await migration).down(params),
      };
    },
  },
  context: sequelize,
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

export default umzug;
