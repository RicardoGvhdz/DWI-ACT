document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let usuario = document.getElementById("login-usuario").value;
    let password = document.getElementById("login-password").value;
    let captchaInput = document.getElementById("captcha-input").value;
    let captchaText = document.getElementById("captcha-text").textContent;
    let errorMessages = document.querySelectorAll(".error-message");

    errorMessages.forEach(error => error.textContent = "");
    
    let isValid = true;
    
    if (!usuario.includes("@") || !usuario.includes(".com")) {
        document.getElementById("login-usuario").nextElementSibling.textContent = "El usuario debe contener '@' y '.com'";
        isValid = false;
    }

    if (captchaInput !== captchaText) {
        document.getElementById("captcha-input").nextElementSibling.textContent = "Captcha incorrecto";
        isValid = false;
    }
    
    if (isValid) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "index.html";
    }
});

function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-text").textContent = captcha;
}

document.addEventListener("DOMContentLoaded", generateCaptcha);

document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", function() {
        let passwordField = this.previousElementSibling;
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.classList.replace("bi-eye", "bi-eye-slash");
        } else {
            passwordField.type = "password";
            this.classList.replace("bi-eye-slash", "bi-eye");
        }
    });
});
