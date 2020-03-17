// const { Category } = require('../models/');
const Category = require('../models/Category');


module.exports = {
    /**
     * Returns all categories stored on database. Listing all categories
     * doesn't require further authorization.
     * @param {*} request 
     * @param {*} response 
     */
    async index(request, response) {
        // return response.status(200).json({
        //     message: 'OK'
        // })
        // return response.status(200).json(await Category.findAll());
        const categories = await Category.findAll({
            include: [
                {
                    association: 'products'
                }
            ]
        });

        return response.json(categories);
    },

    /**
     * Returns information about a category given it's ID. This method doesn't
     * require authentication.
     * @param {*} request 
     * @param {*} response 
     */
    async details(request, response) {
        const { id } = request.params;

        const category = await Category.findByPk(id, {
            include: [
                {
                    association: 'products'
                }
            ]
        });

        if (!category)
            return response.status(404)
                .json({
                    message: 'Category not found!'
                });

        return response.json(category);
    },

    /**
     * Store a new category on database. If successfuly created, this
     * function will return the category itself. To create a new category a
     * user must be authenticated.
     * @param {*} request 
     * @param {*} response 
     */
    async create(request, response) {
        // return response.status(200).json({message: 'OK'});
        // POST method's parameters come from the body
        const { description } = request.body;

        if (!description)
            return response.status(400).json({
                message: '"description" field is required!'
            });

        const category = await Category.create({ description });

        // Return a status for created resource
        return response.status(201).json({
            id: category.id,
            description: category.description
        });
    },

    /**
     * Update a category description given it's ID
     * @param {*} request 
     * @param {*} response 
     */
    async update(request, response) {
        const { id } = request.params;
        const { description } = request.body;

        const category = await Category.findByPk(id);

        if (!category)
            return response.status(404).json({
                message: 'Category not found'
            });

        await Category.update({ description }, {
            where: {
                id
            }
        });

        return response.status(200).json({
            message: 'Updated'
        }); 
    },

    /**
     * Delete a category inside database. To delete a categirt a user must be
     * previously authenticated.
     * @param {*} request 
     * @param {*} response 
     */
    async delete(request, response) {
        const { id } = request.params;

        const category = await Category.findByPk(id);

        if (!category)
            return response.status(404).json({
                message: 'Category not found'
            });

        await Category.destroy({
            where: {
                id
            }
        });

        return response.status(200).json({
            message: 'Category removed'
        });
    }
};
