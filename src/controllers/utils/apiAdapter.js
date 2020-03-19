const axios = require('axios');


module.exports = (url) => axios.create({
    baseUrl: 'http://localhost:3300/api/auth/check'
});