var router = require('express').Router();
var db = require('../../../lib/database')();

router.get('/:id', (req, res) => {
    db.query('SELECT from users WHERE id=?', [req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send(results[0]);
    });)
})
