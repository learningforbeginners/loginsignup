// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('form[action="/signup"]');
    const loginForm = document.querySelector('form[action="/login"]');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            const username = signupForm.querySelector('input[name="username"]').value.trim();
            const password = signupForm.querySelector('input[name="password"]').value;

            if (username.length < 3) {
                alert('Username must be at least 3 characters long.');
                e.preventDefault();
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                e.preventDefault();
                return;
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const username = loginForm.querySelector('input[name="username"]').value.trim();
            const password = loginForm.querySelector('input[name="password"]').value;

            if (!username || !password) {
                alert('Please fill in both fields.');
                e.preventDefault();
            }
        });
    }
});
