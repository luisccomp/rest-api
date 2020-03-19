const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
// const swagger = require('swagger-node-express');
// const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const swaggerDocument = require('./swagger.json');


class App {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
        this.express.use(cors());
        // this.express.use('/api-docs/', swaggerUi.serve, swaggerUi.setup);
        // this.express.use('/api/v1', routes);
    }

    routes() {
        this.express.use(routes);
    }
}

module.exports = new App().express;
