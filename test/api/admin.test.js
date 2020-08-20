const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../server.js');
const tokenHelpers = require('../../helpers/authorization/tokenHelpers.js');

chai.use(chaiHttp);

describe('Admin Test', () => {

    before((done) => {
        chai.request(server)
        .post('/api/auth/login')
        .send({ email: 'admintest@gmail.com', password: 'test123' })
        .end((err,res) => {
            token = res.body.access_token;
            console.log(token);
            done();
        })
    })

    
    it('(GET /) Toggle block status of user. ', (done) => {
        chai.request(server)
        .get('/api/admin/block/5e302931752a051907096e93')
        .set('Authorization', 'Bearer: '+token)
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(DELETE /) Delete user with its questions. ', (done) => {
        chai.request(server)
        .delete('/api/admin/user/5e302931752a051907096e93')
        .set('Authorization', 'Bearer: '+token)
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

  

})