'use strict';

const fs = require('fs');
const path = require('path');
const config = require('../config');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const sequelize = new Sequelize(
  config.get('db.database'),
  config.get('db.username'),
  config.get('db.password'),
  config.get('db.options')
);

const models = module.exports = {};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function (file) {
    let model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function (modelName) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});