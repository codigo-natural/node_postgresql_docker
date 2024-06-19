'use strict';

import { DataTypes } from "sequelize";
import { USER_TABLE } from "../models/user.model.js"

/** @type {typeof import('../migrate.mjs').migrator['_types']['migration']} */
  export const up = async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(USER_TABLE, 'role', {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer',
    })
  }

/** @type {typeof import('../migrate.mjs').migrator['_types']['migration']} */
  export const down = async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(USER_TABLE, 'role')
  }
