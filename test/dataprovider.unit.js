var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');
let should = chai.should();

chai.use(chaiHttp);


describe('/GET Dataprovider', () => {
  it('it should GET properties with quantity equal 1 and format JSON', (done) => {
    chai.request(app)
      .get('/dataprovider?format=json&property=firstName,lastName&quantity=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.be.a('object');
        res.body[0].firstName.length.should.be.not.eql(0);
        res.body[0].lastName.length.should.be.not.eql(0);
        done();
      });
  });

  it('it should GET properties with quantity equal 1 and format CSV', (done) => {
    chai.request(app)
      .get('/dataprovider?format=csv&property=firstName,lastName&quantity=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.length.should.be.not.eql(0);
        res.text.should.be.contains("lastName");
        res.text.should.be.contains("firstName");
        done();
      });
  });

  it('it should GET multiple properties', (done) => {
    chai.request(app)
      .get('/dataprovider?format=json&property=firstName,lastName&quantity=5')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.length.should.be.eql(5);
        for (var i = 0; i < res.body.length; i++) {
          res.body[i].firstName.length.should.be.not.eql(0);
          res.body[i].lastName.length.should.be.not.eql(0);
        }
        done();
      });
  });

  it('it should GET one property if quantity is not informed', (done) => {
    chai.request(app)
      .get('/dataprovider?format=json&property=firstName,lastName')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.length.should.be.eql(1);
        res.body[0].should.be.a('object');
        res.body[0].firstName.length.should.be.not.eql(0);
        res.body[0].lastName.length.should.be.not.eql(0);
        done();
      });
  });

  it('it should GET a alert message if property is not fill', (done) => {
    chai.request(app)
      .get('/dataprovider?format=json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.eql("Select dataprovider options.");
        done();
      });
  });
});
