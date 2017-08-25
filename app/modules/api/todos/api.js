var router = require('express').Router();
var db = require('../../../lib/database')();

// /api/todos
router.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, results, fields) => {
        if (err) return res.status(400).send({ error: err });
        res.status(200).send(results);
    });
});

// /api/todos/:id
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM todos WHERE id=?', [req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send(results);
    });
});

// /api/todos/userTasks/:id
router.get('/userTasks/:id', (req, res) => {
    db.query('SELECT * FROM todos WHERE assigned_to=?', [req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send(results);
    });
});

// /api/todos/createdTasks/:id
router.get('/createdTasks/:id', (req, res) => {
    db.query('SELECT * FROM todos WHERE created_by=?', [req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send(results);
    });
});

// /api/todos/done
router.post('/done', (req, res) => {
    db.query('UPDATE todos SET done=? WHERE id=?', [req.body.done, req.body.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send("Successfully updated task status.");
    });
});

// /api/todos
router.post('/', (req, res) => {
    db.query('INSERT INTO todos (`title`, `description`, `created_by`, `assigned_to`, `done`) VALUES (?, ?, ?, ?, false)', [req.body.title, req.body.description, req.body.created_by, req.body.assigned_to], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send({ message: 'Successfully added todo!' });
    });
});

// /api/todos/:id
router.put('/:id', (req, res) => {
    db.query('UPDATE todos SET title=?, description=? WHERE id=?', [req.body.title, req.body.description, req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send({ message: 'Successfully updated item.' });
    });
});

router.delete('/:id', (req, res) => {
    db.query('DELETE from todos WHERE id=?', [req.params.id], (err, results, fields) => {
        if (err) return res.status(400).send({ error: err.toString() });
        res.status(200).send({ message: 'Successfully deleted item.' });
    })
});

module.exports = router;
