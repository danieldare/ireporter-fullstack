process.env.NODE_ENV = 'test';

const assert = require("chai").assert;
const server = require('../server');
const users = require('../routes/api/users')
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;


// GET - List all colors
it('should return all users', function() {
    return chai.request(users)
      .get('/api/v1/users/')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array');
      });
  });


  // In this test it's expected a task list of two tasks
  describe('GET /users', function() {
    it('returns a list of users', function(done) {
        request.get('/')
            .expect(200)
            .end(function(err, res) {
                // expect(res.body).to.have.lengthOf(2);
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body.results).to.be.an('array');
                done(err);
            });
    });
});


describe('/GET Register', () => {
    it('it should return a list of users', (done) => {
      chai.request(users)
        .get('/api/v1/users')
        .end((err, res) => { // when we get a response from the endpoint
          // in other words,
          // the res object should have a status of 201
          res.should.have.status(200);
          // the property, res.body.state, we expect it to be true.
              
           
 
                  done(); // Don't forget the done callback to indicate we're done!
                })
            })
 
        })
    
