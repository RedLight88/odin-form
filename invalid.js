const phoneInput = document.getElementById('phone');
const errorMessage = document.getElementById('digit-error');

phoneInput.addEventListener('input', function(){
    if (this.value.length > 10) {
        this.value = this.value.slice(0,10);
        errorMessage.style.display = 'inline';
    } else {
        errorMessage.style.display = 'none';
    }
})

const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-password');
const message = document.getElementById('password-error');

confirmPass.addEventListener('input', function() {
    const passwordInput = password.value;
    const confirmPassInput = confirmPass.value;
    if (passwordInput !== confirmPassInput) {
        message.style.display = 'inline';
    } else {
        message.style.display = 'none';
    }
});