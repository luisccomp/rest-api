/*
 * const sequelize = require('sequelize');
 * 
 * const app = require('./app');
 * const config = require('./config/config.json');
 * 
 * 
 * // Testing database connection when start the server
 * const connection = new sequelize.Sequelize(config.development);
 * 
 * connection.authenticate()
 *     .then(() => console.log('Database connected...'))
 *     .catch(err => console.log('Error:', err));
 * 
 * const port = process.env.PORT || 3000;
 * 
 * app.listen(port, () => {
 *     console.log(`Server running at port ${port}!`);
 * });
 */
const app = require('./app');
const database = require('./database');
// const swagger = require('swagger-node-express');


const port = process.env.PORT || 3000;

// Testing database connection
database.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error:', err));


// Start listening for requests at a given port...
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
