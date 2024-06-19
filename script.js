document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (validateForm(username, email, password)) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields correctly.');
    }
});

function validateForm(username, email, password) {
    if (username === '' || email === '' || password === '') {
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        return false;
    }

    if (password.length < 6) {
        return false;
    }

    return true;
}
