var User = require('../models/user');
var express = require('express');
var router = express.Router();


// GET /users
// Get a list of users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).json({
        error: "Error listing users: " + err
      });
    }

    res.json(users);
  });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error reading user: " + err
      });
    }

    if (!user) {
      return res.status(404).end();
    }

    res.json(user);
  });
});

// POST /users
// Create a user
router.post('/', function(req, res) {
  User.create(req.body, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error creating user: " + err
      });
    }
    
    return res.status(200).json(user);
  });
});

// PUT /users/:id
// Update a user
router.put('/:id', function(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error reading user: " + err
      });
    }

    if (!user) {
      return res.status(404).end();
    }

    User.update({_id: user._id}, req.body, function(err, user) {
      if (err) {
        return res.status(500).json({
          error: "Error updating user: " + err
        });
      }
      return res.status(200).send("User updated");
    });
  });
});

module.exports = router;
