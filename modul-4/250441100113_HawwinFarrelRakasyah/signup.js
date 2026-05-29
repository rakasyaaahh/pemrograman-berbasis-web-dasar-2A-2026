document.getElementById('signupForm').addEventListener('submit', function(e) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailErr = document.getElementById('emailError');
    const passErr = document.getElementById('passError');

    let valid = true;
    [email, password].forEach(el => el.classList.remove('error'));
    [emailErr, passErr].forEach(el => el.style.display = 'none');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        emailErr.style.display = 'block';
        valid = false;
    }

    if (password.value.length < 8) {
        password.classList.add('error');
        passErr.style.display = 'block';
        valid = false;
    }

    if (!valid) e.preventDefault();
});