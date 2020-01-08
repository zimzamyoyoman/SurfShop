const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* GET posts new /posts/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /posts/new');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* POST posts create /posts */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
    // res.render('index', { title: 'Surf Shope - Home' });
});

module.exports = router;

