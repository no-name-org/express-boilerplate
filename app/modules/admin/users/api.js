var router = require('express').Router();
var db = require('../../../lib/database')();

router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results, fields) => {
        if (err) return res.status(504).send({ error: err });
        res.status(200).json(results);
    });
});

router.get('/:username', (req, res) => {
    db.query('SELECT * FROM users WHERE username=?', [req.params.username], (err, results, fields) => {
        if (err) return res.status(504).send({ error: err });
        res.status(200).json(results);
    });
});

router.post('/', (req, res) => {
    db.query('SELECT * FROM users WHERE username=?', [req.body.username], (err, results, fields) => {
        if (err) return res.status(504).send({ error: err });
        res.status(200).json(results);
    });
});

module.exports = router;
