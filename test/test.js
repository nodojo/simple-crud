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

describe('GET /users/:id', function() {
  it('returns a user', function(done) {
    request(app)
    .get('/users/1')
    .set('Accept', 'application/json')
    .expect(200, [{
      id: 1,
      name: 'Calvin',
      email: 'calvin@example.com'
    }], done)
  })
})
