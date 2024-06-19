"use strict";

import { DataTypes, Sequelize } from "sequelize";
import { USER_TABLE } from "../models/user.model.js";

/** @type {typeof import('../migrate.mjs').migrator['_types']['migration']} */
export const up = async (queryInterface) => {
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */
  await queryInterface.createTable(USER_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "create_at",
      defaultValue: Sequelize.NOW,
    },
  });
};

/** @type {typeof import('../migrate.mjs').migrator['_types']['migration']} */
export const down = async (queryInterface) => {
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
  await queryInterface.dropTable(USER_TABLE);
};
