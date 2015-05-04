'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

require('../server');

describe('our server', function() {
  it('should respond to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/hello')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.body.msg).to.eql('hello world'); 
        done();
      });
  });

  it('should greet by name for post requests', function(done) {
    chai.request('localhost:3000')
      .post('/hello')
      .send({name: 'test'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('hello test');
        done();
      });
  });

  it('should have a 404 page', function(done) {
    chai.request('localhost:3000')
      .get('/somepagethatdoesnotexist')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(404);
        expect(res.body.msg).to.eql('could not find page');
        done();
      });
  });
});
