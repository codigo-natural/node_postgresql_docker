import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import { models } from '../libs/sequelize.js';

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash,
    });

    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const result = await models.User.findAll({
      include: ['customer'],
    });
    return result;
  }

  async findByEmail(email) {
    const result = await models.User.findOne({
      where: { email },
    });
    return result;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

export default UserService;
