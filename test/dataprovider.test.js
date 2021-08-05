const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server/express');

chai.use(chaiHttp);

describe('/GET Dataprovider', () => {
  it('should GET properties with quantity equal 1 and format JSON', async () => {
    chai
      .request(server)
      .get('/dataprovider?format=json&property=name.firstName,name.lastName&quantity=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body[0].should.be.a('object');
        res.body[0].firstName.length.should.be.not.eql(0);
        res.body[0].lastName.length.should.be.not.eql(0);
      });
  });

  it('should GET properties with quantity equal 1 and format CSV', async () => {
    chai
      .request(server)
      .get('/dataprovider?format=csv&property=name.firstName,name.lastName&quantity=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.length.should.be.not.eql(0);
        res.text.should.be.contains('lastName');
        res.text.should.be.contains('firstName');
      });
  });

  it('should GET multiple properties', async () => {
    chai
      .request(server)
      .get('/dataprovider?format=json&property=name.firstName,name.lastName&quantity=5')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.length.should.be.eql(5);
        for (let i = 0; i < res.body.length; i += 1) {
          res.body[i].firstName.length.should.be.not.eql(0);
          res.body[i].lastName.length.should.be.not.eql(0);
        }
      });
  });

  it('should GET one property if quantity is not informed', async () => {
    chai
      .request(server)
      .get('/dataprovider?format=json&property=name.firstName,name.lastName')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.length.should.be.eql(1);
        res.body[0].should.be.a('object');
        res.body[0].firstName.length.should.be.not.eql(0);
        res.body[0].lastName.length.should.be.not.eql(0);
      });
  });

  it('should GET a alert message if property is not fill', async () => {
    chai
      .request(server)
      .get('/dataprovider?format=json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.eql('Select dataprovider options.');
      });
  });
});
