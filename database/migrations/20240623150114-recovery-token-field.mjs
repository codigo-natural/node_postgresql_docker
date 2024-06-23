'use strict';

import { USER_TABLE } from '../models/user.model';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */
  await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
    allowNull: true,
    type: Sequelize.DataTypes.STRING,
    field: 'recovery_token',
  });
};

export const down = async (queryInterface, Sequelize) => {
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
  await queryInterface.removeColumn(USER_TABLE, 'recovery_token');
};
