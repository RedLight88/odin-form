document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let valid = true;

    // Get form elements
    const formElements = event.target.elements;
    const firstName = formElements['first-name'];
    const lastName = formElements['last-name'];
    const email = formElements['email'];
    const phone = formElements['phone'];
    const password = formElements['password'];
    const confirmPassword = formElements['confirm-password'];

    // Reset previous validation styles
    [firstName, lastName, email, phone, password, confirmPassword].forEach(el => {
        el.classList.remove('invalid');
    });

    // Check if all fields are filled
    if (!firstName.value) {
        firstName.classList.add('invalid');
        valid = false;
    }
    if (!lastName.value) {
        lastName.classList.add('invalid');
        valid = false;
    }
    if (!email.value) {
        email.classList.add('invalid');
        valid = false;
    }
    if (!phone.value) {
        phone.classList.add('invalid');
        valid = false;
    }
    if (!password.value) {
        password.classList.add('invalid');
        valid = false;
    }
    if (!confirmPassword.value) {
        confirmPassword.classList.add('invalid');
        valid = false;
    }

    // Check if passwords match
    if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
        document.getElementById('password-error').style.display = 'block';
        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        valid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
    }

    // If valid, proceed with form submission (here, you can add your form submission logic)
    if (valid) {
        alert('Form submitted successfully!');
        // You can submit the form data using AJAX or any other method here
    }
});
