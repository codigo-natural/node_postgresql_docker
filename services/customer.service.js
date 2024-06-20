import boom from '@hapi/boom';
import { models } from '../libs/sequelize.js';
import bcrypt from 'bcrypt';

class CustomerService {
  constructor() {}

  async find() {
    const result = await models.Customer.findAll({
      include: ['user'],
    });
    return result;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash,
      },
    };
    const newCustomer = await models.Customer.create(newData, {
      include: ['user'],
    });

    delete newCustomer.user.dataValues.password;
    return newCustomer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const r = await customer.update(changes);
    return r;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id, rta: true };
  }
}

export default CustomerService;
