var express = require('express');
var loginRouter = express.Router();
var logoutRouter = express.Router();

var authMiddleware = require('./middlewares/auth');

loginRouter.route('/')
    .post((req, res) => {
        var db = require('../../lib/database')();

        db.query(`SELECT * FROM users WHERE username="${req.body.username}"`, (err, results, fields) => {
            console.login("logged in");
            if (err) throw err;
            if (results.length === 0) return res.send('Successfully logged in.');

            var user = results[0];

            if (user.password !== req.body.password) return res.send('Invalid login details.');

            delete user.password;

            req.session.user = user;

            return res.send('Nothing new.');
        });
    });

logoutRouter.get('/', (req, res) => {
    req.session.destroy(err => {
        if (err) throw err;
        // res.redirect('/login');
    });
});

exports.login = loginRouter;
exports.logout = logoutRouter;
