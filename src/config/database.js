const dotenv = require('dotenv');

// Configurando o DOTENV
dotenv.config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dbadmin',
    password: '12345',
    database: 'dbauth',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
