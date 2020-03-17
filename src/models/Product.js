/*
 * module.exports = (sequelize, DataTypes) => {
 *     const Product = sequelize.define('Product', {
 *         name: DataTypes.STRING,
 *         description: DataTypes.STRING,
 *         price: DataTypes.DECIMAL(10, 2)
 *     });
 * 
 *     Product.belongsTo(sequelize.models.Category, {
 *         foreignKey: 'category_id',
 *         as: 'product_category'
 *     });
 * 
 *     return Product;
 * };
 */
const { Model, DataTypes } = require('sequelize');

class Product extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.DECIMAL(10,2 )
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'belongs_to'
        });
    }
}

module.exports = Product;
