import boom from '@hapi/boom';
// import pool from '../libs/postgres.js';
// import { models } from '../database/models/index.js';
import { models } from '../libs/sequelize.js'

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const result = await models.User.findAll();
    return result;
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
