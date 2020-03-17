const chai = require('chai'),
    sequelize = require('sequelize'),
    supertest = require('supertest');

const app = require('../src/app');


describe('Testing API and database connection', function() {
    it('Should return status 200 for a given route', function(done) {
        // Using supertest to check if routes are working
        supertest(app).get('/api/categories/create')
            .expect(200, () => {
                // console.log('Route index OK!');
                done();
            })
    });
});
