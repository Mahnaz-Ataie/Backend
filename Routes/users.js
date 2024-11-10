const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../Models/user'); // Adjust path to your User model

// Handle Sign In form submission
router.post('/signIn', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash the password for security
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to the database
        const newUser = await User.create({ name, email, password: hashedPassword });

        // Redirect or send a success message
        res.send('User signed in successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing in');
    }
});
router.get('/signIn', (req, res) => {
    console.log("GET /signIn route accessed");
    res.render('signIn');  // This assumes signIn.ejs is in the views folder
});

// login
router.get('/login', (req, res) => {
    res.render('login');  // Renders the login.ejs page
});

// POST route to handle the login form submission
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists by email
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(400).send('User not found');
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Incorrect password');
        }

        // If everything matches, the user can be logged in
        // You can create a session or send a success message here
        res.send('Login successful');

        // Optionally, you could redirect them to a dashboard or home page:
        // res.redirect('/dashboard');  // If you have a dashboard page

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
