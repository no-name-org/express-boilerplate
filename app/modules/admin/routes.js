var router = require('express').Router();

//Security and session
// var authMiddleware = require('../auth/middlewares/auth');

router.use('/users', require('./users/api'));

exports.admin = router;
