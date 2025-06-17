'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HomeworkRequest extends Model {
    static associate(models) {
      HomeworkRequest.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  
  HomeworkRequest.init({
    subject: DataTypes.STRING,
    urgency: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
      defaultValue: 'pending'
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HomeworkRequest',
  });
  
  return HomeworkRequest;
};