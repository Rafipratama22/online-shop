'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Product)
      Order.belongsTo(models.User)
    }
  };
  Order.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    transaction: DataTypes.TEXT,
    totalProduct: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};