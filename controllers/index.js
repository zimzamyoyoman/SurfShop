const User = require('../models/user');

module.exports = {
    async postRegister(req, res, next) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        });
        console.log('Registering User...');
        await User.register(new User(newUser), req.body.password);
        res.redirect('/');
    }
}