// const { Product } = require('../models');
const Product = require('../models/Product');


module.exports = {
    /**
     * List all products stored on database. This method doesn't need further
     * authentication.
     * @param {*} request 
     * @param {*} response 
     */
    async index(request, response) {
        return response.json(await Product.findAll());
    },

    /**
     * Return detailed information about one product. This method doesn't need
     * further authentication.
     * @param {*} request 
     * @param {*} response 
     */
    async details(request, response) {
        const { id } = request.params;

        const product = await Product.findByPk(id);

        if (!product)
            return response.status(404)
                .json({
                    message: 'Product not found'
                });

        return response.json(product);
    },

    /**
     * Create a new product and store it on database. This method requires
     * authentication.
     * @param {*} request 
     * @param {*} response 
     */
    async create(request, response) {
        const { name, description, price, category_id } = request.body;

        if (!(name || description || price || category_id))
            return response.status(400)
                .json({
                    message:('Field name, description, price or category_id' +
                        ' are required')
                });

        await Product.create({
            name,
            description,
            price,
            category_id
        });

        return response.status(201)
            .send({
                message: 'Product created'
            });
    },

    /**
     * Update product's info. This method requires authentication.
     * @param {*} request 
     * @param {*} response 
     */
    async update(request, response) {
        const { id } = request.params;
        const { description, price, category_id } = request.body;

        const product = await Product.findByPk(id);

        // console.log(product);
        // Nunca esquecer a palavra reservada "await"

        if (!product)
            return response.status(404)
                .json({
                    message: 'Product not found'
                });

        await Product.update({
            description,
            price,
            category_id
        }, {
            where: {
                id
            }
        });

        return response.json({
            message: 'Product updated'
        });
    },

    /**
     * Delete a product from database. This method requires further user
     * authentication.
     * @param {*} request 
     * @param {*} response 
     */
    async delete(request, response) {
        const { id } = request.params;

        const product = await Product.findByPk(id);

        if (!product)
            return response.send(404)
                .json({
                    message: 'Product not found'
                });

        await Product.destroy({
            where: {
                id
            }
        });

        return response.json({
            message: 'Product removed'
        });
    }
};
