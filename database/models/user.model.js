import { Model, DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';

const USER_TABLE = 'users';
const UserSchema = {
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
  recoveryToken: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'recovery_token',
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate(models) {
    // associate
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
      /*
        ? Docs
        los hooks con sequelize para que realice el hash de la contraseña antes de guardar los datos
        De esta forma puedes evitar realizar el hash en los servicios user y customer y dejarlos como estaban anteriormente.

      */
      // hooks: {
      //   beforeCreate: async (user, options) => {
      //     const password = await bcrypt.hash(user.password, 10);
      //     user.password = password;
      //   },
      // },
    };
  }
}

export { USER_TABLE, UserSchema, User };
