const { Sequelize } = require('sequelize');

// Loading configurations from file
const dbConfig = require('../config/database');

// Loading models
const Category = require('../models/Category');
const Product = require('../models/Product');


const connection = new Sequelize(dbConfig);

// Initializing models
Category.init(connection);
Product.init(connection);

// Creating associations between entities of database
Category.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;
