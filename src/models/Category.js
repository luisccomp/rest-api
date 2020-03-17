/*
 * module.exports = (sequelize, DataTypes) => {
 *     // Defining our model
 *     // sequelize.define('Category', {
 *     //     description: DataTypes.STRING
 *     // });
 *     const Category = sequelize.define('Category', {
 *         description: DataTypes.STRING
 *     });
 * 
 *     console.log(sequelize.models);
 * 
 *     // Creating 1-n association using sequelize
 *     Category.hasMany(sequelize.models.Product, {
 *         foreign_key: 'product_id',
 *         as: 'products'
 *     });
 * 
 *     return Category;
 * }
 */
const { Model, DataTypes } = require('sequelize');

class Category extends Model {

    static init(sequelize) {
        super.init({
            description: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        // Creating a 1-n relationship
        // this.hasMany(models.Product, {
        //     foreignKey: 'product_id',
        //     as: 'products'
        // });
        this.hasMany(models.Product, {
            foreignKey: 'category_id',
            as: 'products'
        })
    }
}

module.exports = Category;
