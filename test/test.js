const request = require('supertest')
const app = require('../index')

describe('GET /users', function() {
  it('returns all users', function(done) {
    request(app)
    .get('/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('GET /users/:id', function() {
  it('returns a user by id', function(done) {
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

describe('POST /users', function() {
  it('creates a user by accepting name and email', function(done) {
    request(app)
    .post('/users')
    .send({name: 'john',email: 'john@test.com'})
    .set('Accept', 'application/json')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(201)
    .end(function(err, res) {
      if (err) return done(err);
      return done();
    });
  });
});

describe('PUT /users/:id', function() {
    it('updates a user by id', function(done) {
      request(app)
      .put('/users/2')
      .send({name: 'jane',email: 'jane@test.com'})
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
    })
})
