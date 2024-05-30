import boom from '@hapi/boom';
import getConnection from '../libs/postgres.js';

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const result = await client.query('SELECT * FROM tasks');
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

// module.exports = UserService;
