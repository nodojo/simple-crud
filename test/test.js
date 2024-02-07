const request = require('supertest')
const app = require('../index')

describe('GET /users', function() {
  it('responds with json', function(done) {
    request(app)
    .get('/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});