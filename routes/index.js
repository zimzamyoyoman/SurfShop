const express = require('express');
const router = express.Router();
const passport = require('passport');
const { postRegister } = require('../controllers/index');
const { errorHandler } = require('../middleware/index');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shope - Home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
  // res.render('index', { title: 'Surf Shope - Home' });
});

/* POST /register */
router.post('/register', errorHandler(postRegister));
// res.render('index', { title: 'Surf Shope - Home' });
// });

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
  // res.render('index', { title: 'Surf Shope - Home' });
});

/* POST /login */
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

/* GET /logout */
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
  // res.render('index', { title: 'Surf Shope - Home' });
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile');
  // res.render('index', { title: 'Surf Shope - Home' });
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
  // res.render('index', { title: 'Surf Shope - Home' });
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
  // res.render('index', { title: 'Surf Shope - Home' });
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
  // res.render('index', { title: 'Surf Shope - Home' });
});

/* PUT /reset/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
  // res.render('index', { title: 'Surf Shope - Home' });
});


module.exports = router;
