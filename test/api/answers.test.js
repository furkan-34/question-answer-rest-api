const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../server.js');


chai.use(chaiHttp);

describe('Answer Test', () => {

    before((done) => {
        chai.request(server)
        .post('/api/auth/login')
        .send({ email: 'admintest@gmail.com', password: 'test123' })
        .end((err,res) => {
            token = res.body.access_token;
            done();
        })
    })

    
    it('(GET /) Lists all answers on JSON format ', (done) => {
        chai.request(server)
        .get('/api/questions/5e302a8075ac8d9e9bd199b2/answers')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(POST /) Create a new answer. ', (done) => {
        chai.request(server)
        .post('/api/questions/5e302a8075ac8d9e9bd199b2/answers')
        .set('Authorization', 'Bearer: '+token)
        .send({ content: 'NEW ANSWER NEW ANSWER  NEW ANSWER' })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

 
    
  

})