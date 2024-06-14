'use strict';

import { ORDER_PRODUCT_TABLE, OrderProductSchema } from '../models/order-product.model.js';

/** @type {import('sequelize-cli').Migration} */
  export const up = async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  }

  export const down = async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
