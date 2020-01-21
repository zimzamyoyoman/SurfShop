const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const {
    getPosts,
    newPost,
    createPost,
    showPost,
    editPost
} = require('../controllers/posts');

/* GET posts index /posts */
router.get('/', asyncErrorHandler(getPosts));

/* GET posts new /posts/new */
router.get('/new', newPost);

/* POST posts create /posts */
router.post('/', asyncErrorHandler(createPost));

/* GET posts show /posts/:id */
router.get('/:id', asyncErrorHandler(showPost));

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', asyncErrorHandler(editPost));

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
});

/* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
});

module.exports = router;

