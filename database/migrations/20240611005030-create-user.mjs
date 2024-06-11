'use strict';

import { USER_TABLE, UserSchema } from "../models/user.model.js"

/** @type {typeof import('../migrate.mjs').migrator['_types']['migration']} */
  export const up = async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.createTable(USER_TABLE, UserSchema)
  }

/** @type {typeof import('../migrate.mjs').migrator['_types']['migration']} */
  export const down = async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.dropTable(USER_TABLE)
  }
