const request = require('supertest');
const app = require('./src/router');

test('GET / should respond with status 200', done => {
  request(app)
    .get('/')
    .expect(200, done);
});

test('GET /non-existent-route should respond with status 404', done => {
  request(app)
    .get('/non-existent-route')
    .expect(404, done);
});

test('GET /styles.css should respond with status 200 and the CSS file', done => {
  request(app)
    .get('/styles.css')
    .expect(200)
    .expect('Content-Type', 'text/css; charset=UTF-8', done);
});

test('GET /app.js should respond with status 200 and the JavaScript file', done => {
  request(app)
    .get('/app.js')
    .expect(200)
    .expect('Content-Type', 'application/javascript; charset=UTF-8', done);
});
