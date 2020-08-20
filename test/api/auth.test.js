const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../server.js');


chai.use(chaiHttp);

describe('Auth Test', () => {

    before((done) => {
        chai.request(server)
        .post('/api/auth/login')
        .send({ email: 'admintest@gmail.com', password: 'test123' })
        .end((err,res) => {
            token = res.body.access_token;
            done();
        })
    })

    
    it('(GET /) Sends User s information on JSON. ', (done) => {
        chai.request(server)
        .get('/api/auth/profile')
        .set('Authorization', 'Bearer: '+token)
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(POST /) Create a new user ', (done) => {
        chai.request(server)
        .post('/api/auth/register')
        .send({ name: 'New Test User', email: 'newtest@gmail.com', password: 'test123' })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })


     it('(PUT /) Edit information of user with its token. ', (done) => {
        chai.request(server)
        .put('/api/auth/edit')
        .set('Authorization', 'Bearer: '+token)
        .send({ name: 'Updated Admin Test' })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

        
    it('(POST /) Log In. ', (done) => {
        chai.request(server)
        .post('/api/auth/login')
        .send({ email: 'admintest@gmail.com', password: 'test123' })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(GET /) Log Out. ', (done) => {
        chai.request(server)
        .get('/api/auth/logout')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     // its in comment because travis cl does not support smtp protocol
     /*
     it('(POST /) Sends reset link for password reset to email. ', (done) => {
        chai.request(server)
        .post('/api/auth/forgotpassword')
        .send({ email: 'usertest@gmail.com' })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })
     */

  

})