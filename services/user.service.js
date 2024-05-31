import boom from '@hapi/boom';
// import pool from '../libs/postgres.js';
import sequelize from '../libs/sequelize.js';

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const result = await sequelize.query(query);
    return result.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

export default UserService;
