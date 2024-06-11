// 20240611145811-add-role.mjs
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
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role)
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
