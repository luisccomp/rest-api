const { Router } = require('express');

// const CategoryController = require('./controllers/CategoryController'),
//     ProductController = require('./controllers/ProductController');
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');


const routes = Router();

// Routes handled by category controller
routes.get('/api/categories', CategoryController.index);
routes.get('/api/categories/:id/details', CategoryController.details);
routes.post('/api/categories/create', CategoryController.create);
routes.put('/api/categories/:id/update', CategoryController.update);
routes.delete('/api/categories/:id/delete', CategoryController.delete);

// Routes handled by Procut controller
routes.get('/api/products', ProductController.index);
routes.get('/api/products/:id/details', ProductController.details);
routes.post('/api/products/create', ProductController.create);
routes.put('/api/products/:id/update', ProductController.update);
routes.delete('/api/products/:id/delete', ProductController.delete);

module.exports = routes;
