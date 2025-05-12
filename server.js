const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory user store
const users = {};

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (username && password.length >= 6) {
        users[username] = password;
        console.log(`Signup received: ${username}`);
        res.redirect('/login');
    } else {
        res.send('Invalid signup details. Password must be at least 6 characters.');
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        // Redirect with username query parameter
        res.redirect(`/welcome?user=${encodeURIComponent(username)}`);
    } else {
        res.send(`<script>alert("Invalid credentials"); window.location.href='/login';</script>`);
    }
});

app.get('/welcome', (req, res) => {
    const username = req.query.user;
    res.sendFile(path.join(__dirname, 'views', 'welcome.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
