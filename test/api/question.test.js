const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../server.js');


chai.use(chaiHttp);

describe('Question Test', () => {

    before((done) => {
        chai.request(server)
        .post('/api/auth/login')
        .send({ email: 'admintest@gmail.com', password: 'test123' })
        .end((err,res) => {
            token = res.body.access_token;
            done();
        })
    })

    
    it('(GET /) Lists all questions on JSON format ', (done) => {
        chai.request(server)
        .get('/api/questions')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(GET /) Lists all questions up to 10 pieces on JSON format. ', (done) => {
        chai.request(server)
        .get('/api/questions?limit=10')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     
     it('(GET /) Lists all questions with page format on JSON data format. ', (done) => {
        chai.request(server)
        .get('/api/questions?page=2')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(GET /) Search a question with query and response on JSON data format. ', (done) => {
        chai.request(server)
        .get('/api/questions?search=TEST')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(GET /) Lists most answered questions on JSON format. ', (done) => {
        chai.request(server)
        .get('/api/questions?sortBy=most-answered')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     
     it('(GET /) Lists most liked questions on JSON format. ', (done) => {
        chai.request(server)
        .get('/api/questions?sortBy=most-liked')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(POST /) Create a new question. ', (done) => {
        chai.request(server)
        .post('/api/questions/ask')
        .set('Authorization', 'Bearer: '+token)
        .send({ title: 'New Question Title New Question Title', content: 'Content Text Content TextContent Text' })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(GET /) List question and answers of question with its id. ', (done) => {
        chai.request(server)
        .get('/api/questions/5e302a8075ac8d9e9bd199b2')
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

    
     it('(PUT /) Update question if user is owner it. ', (done) => {
        chai.request(server)
        .put('/api/questions/5e302a8075ac8d9e9bd199b2/edit')
        .set('Authorization', 'Bearer: '+token)
        .send({ title: 'UPDATED Question Title', content: 'Content Text Content TextContent Text' })
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

      
   

     it('(GET /) Add user s id at likes of question. ', (done) => {
        chai.request(server)
        .get('/api/questions/5e302a8075ac8d9e9bd199b2/like')
        .set('Authorization', 'Bearer: '+token)
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     it('(GET /) Remove user s id from likes of question. ', (done) => {
        chai.request(server)
        .get('/api/questions/5e302a8075ac8d9e9bd199b2/undo_like')
        .set('Authorization', 'Bearer: '+token)
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })

     /*
     it('(DELETE /) Delete question if user is owner it. ', (done) => {
        chai.request(server)
        .delete('/api/questions/5e302a8075ac8d9e9bd199b2/delete')
        .set('Authorization', 'Bearer: '+token)
        .end((err,res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            done();
            
        })
     })
     */

})