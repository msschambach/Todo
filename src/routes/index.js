var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'My App' });
});

router.get('/react-todo', (req, res, next) => {
  res.render('react-todo', { title: 'Todo' })
});

module.exports = router;
