'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    static associate(models) {
      // associations can be defined here
    }
  }
  
  BlogPost.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    author: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    publishedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BlogPost',
  });
  
  return BlogPost;
};