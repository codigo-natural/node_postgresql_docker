'use strict';

import { CUSTOMER_TABLE } from '../models/customer.model.js';
import { DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
  export const up = async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  }

  export const down = async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
