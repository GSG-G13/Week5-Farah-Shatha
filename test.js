/*const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

chai.use(chaiHttp);
chai.should();

describe('Countries API', () => {
  describe('GET /countries/:value', () => {
    it('should return an array of matching countries', (done) => {
      chai.request(app)
        .get('/countries/ger')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.should.include('Germany');
          done();
        });
    });
    it('should return an empty array if no matches are found', (done) => {
      chai.request(app)
        .get('/countries/xyz')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array').that.is.empty;
          done();
        });
    });
  });
});*/
