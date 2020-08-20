const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../server.js');

chai.use(chaiHttp);

describe('User Test', () => {
    it('(GET /) List all users.', (done) => {
       chai.request(server)
       .get('/api/users/')
       .end((err,res) => {
           res.should.have.status(200)
           done();
           
       })
    })

    it('(GET /) List user s information with its id.', (done) => {
        chai.request(server)
        .get('/api/users/5e302931752a051907096e96')
        .end((err,res) => {
            res.should.have.status(200)
            done();
            
        })
     })

     it('(GET /) Lists all users up to 10 pieces ', (done) => {
        chai.request(server)
        .get('/api/users?limit=10')
        .end((err,res) => {
            res.should.have.status(200)
            done();
            
        })
     })

     it('(GET /) Lists all users with page format on JSON data format. ', (done) => {
        chai.request(server)
        .get('/api/users?page=2')
        .end((err,res) => {
            res.should.have.status(200)
            done();
            
        })
     })

     it('(GET /) Search a user with query and response on JSON data format. ', (done) => {
        chai.request(server)
        .get('/api/users?search=Furkan')
        .end((err,res) => {
            res.should.have.status(200)
            done();
            
        })
     })
})