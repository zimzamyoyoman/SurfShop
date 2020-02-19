const express = require('express');
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* POST reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /reviews/:review_id/edit');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /reviews/:review_id');
    // res.render('index', { title: 'Surf Shope - Home' });
});

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /reviews/:review_id');
    // res.render('index', { title: 'Surf Shope - Home' });
});

module.exports = router;
