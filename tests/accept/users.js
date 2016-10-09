var logger = require('winston');
var server = require('../../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var seed = require('../../seed/seed');
var User = require('../../models/user');
var expect = require('chai').expect;

chai.should();
chai.use(chaiHttp);

var url = 'http://127.0.0.1:8001';

function testUserHomer() {
  return {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Homer",
      "last": "Simpson"
    },
    "location": {
      "street": "742 Evergreen Terrace",
      "city": "Springfield",
      "state": "n/a",
      "zip": 12345
    },
    "email": "homer@simpson.com",
    "username": "homersimpson",
    "password": "secret",
    "salt": "pylI10wj",
    "md5": "ddbd6140e188e3bf68ae7ae67345df65",
    "sha1": "5472d25c99aa65bbf0368168f65d9770b7cacfe6",
    "sha256": "bh0705aec7393e2269d4593f248e649400d4879b2209f11bb2e012628115a4eb",
    "registered": 3986717321,
    "dob": 821761857,
    "phone": "000-111-2222",
    "cell": "333-444-555",
    "PPS": "1231234T",
    "picture": {
      "large": "http://image.noelshack.com/fichiers/2013/47/1385035162-dessin-homer.png",
      "medium": "https://s-media-cache-ak0.pinimg.com/236x/6a/b6/68/6ab668f8c2341f45c8f2d183bbcc8332.jpg",
      "thumbnail": "https://lh3.googleusercontent.com/-ZU-wVKVB6yw/AAAAAAAAAAI/AAAAAAAAABs/sc3eadR2bFE/s120-c/photo.jpg"
    }
  };
}

describe('Users', function() {

  // Before our test suite
  before(function(done) {
    // Start our app on an alternative port for acceptance tests
    server.listen(8001, function() {
      logger.info('Listening at http://localhost:8001 for acceptance tests');

      // Seed the DB with our users
      seed(function(err) {
        done(err);
      });
    });
  });

  describe('/GET users', function() {
    it('should return a list of users', function(done) {
      chai.request(url)
        .get('/users')
        .end(function(err, res) {
          res.body.should.be.a('array');
          res.should.have.status(200);
          res.body.length.should.be.eql(100);
          done();
        });
    });
  });

  describe('/GET users/:id', function() {
    it('should return a single user', function(done) {
      // Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;

        // Read this user by id
        chai.request(url)
          .get('/users/' + id)
          .end(function(err, res) {
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body.name.first).to.be.a('string');
            done();
          });
      });
    });
  });

  describe('/POST /users', function () {
    it('should create a single user', function (done) {
      // Create a user in the DB
      var homer = testUserHomer();
      chai.request(url)
        .post('/users/')
        .send(homer)
        .end(function (err, res) {
          if (err) {
            done(error);
          } else {
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body.name.first).to.be.a('string');
            expect(res.body.username).to.equal("homersimpson");
            // Delete testUserHomer
            User.remove(res.body);
            done();
          }
        });
    });
  });

  describe('/PUT /users', function () {
    it('should update a single user', function (done) {
      // Update a user in the DB
      var homer = testUserHomer();
      // Accessing database directly found to be preferred to using create operation
      User.create(homer, function (err, user) {
        var id = user._id;
        chai.request(url)
          .put('/users/' + id)
          .set('content-type', 'application/json')
          .send({
            'username': 'Duffman'
          })
          .end(function (err, res) {
            res.should.have.status(200);
            expect(res.body) === ("User updated");
            User.findOne({_id: id}, function (err, user) {
              expect(user.username).to.equal("Duffman");
              // Delete testUserHomer
              User.remove(res.body);
              done();
            });
          });
      });
    });
  });

  describe('/Delete /users', function () {
    it('should delete a single user', function (done) {
      // Delete a user in the DB
      var homer = testUserHomer();
      // Accessing database directly found to be preferred to using create operation
      User.create(homer, function (err, user) {
        var id = user._id;
        User.findOne({_id: id}, function (err, user) {
          expect(user.username).to.equal("homersimpson");
          chai.request(url)
            .delete('/users/' + id)
            .set('content-type', 'application/json')
            .end(function (err, res) {
              res.should.have.status(200);
              expect(res.body) === ('User deleted');
              // Double check deletion of user
              User.findOne({_id: id}, function (err, user) {
                expect(user).to.equal(null);
                done();
              });
            });
        });
      });
    });
  });
});
