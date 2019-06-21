var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', (req, res) => {
    db.TodoItem.findAll({}).then(items => res.json(items))
});

router.get('/:id', (req, res) => {
    db.TodoItem.findById(req.params.id).then(item => res.json(item))
});

router.post('/', (req, res) => {
    db.TodoItem.create({
        text: req.body.text,
        done: req.body.done
    }).then((result) => res.json(result))
});

router.post('/:id', (req, res) => {
    db.TodoItem.update({
        text: req.body.text,
        done: req.body.done
    },
        {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
});

router.delete('/:id', (req, res) => {
    db.TodoItem.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
});


module.exports = router;