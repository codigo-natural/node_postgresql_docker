'use strict';

import { ORDER_TABLE, OrderSchema } from '../models/order.model';

/** @type {import('sequelize-cli').Migration} */
  export const up = async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  }

  export const down = async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(ORDER_TABLE);
  }
