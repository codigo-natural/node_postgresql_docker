'use strict';

import { CATEGORY_TABLE, CategorySchema } from '../models/category.model';
import { PRODUCT_TABLE, ProductSchema } from '../models/product.model';

/** @type {import('sequelize-cli').Migration} */
  export const up = async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    return await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  }

  export const down = async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.dropTable(CATEGORY_TABLE);
    return await queryInterface.dropTable(PRODUCT_TABLE);
  }
