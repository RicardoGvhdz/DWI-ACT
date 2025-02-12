document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let usuario = document.getElementById("register-usuario");
    let password = document.getElementById("register-password");
    let confirmPassword = document.getElementById("register-confirm-password");
    let usuarioError = usuario.nextElementSibling;
    let passwordError = password.parentElement.nextElementSibling;
    let confirmPasswordError = confirmPassword.parentElement.nextElementSibling;
    
    let isValid = true;

    if (!usuario.value.includes("@")) {
        usuarioError.textContent = "El usuario debe contener '@'";
        usuario.style.borderColor = "red";
        isValid = false;
    } else {
        usuarioError.textContent = "";
        usuario.style.borderColor = "#ccc";
    }

    // Validar que las contraseñas coincidan
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden";
        confirmPassword.style.borderColor = "red";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
        confirmPassword.style.borderColor = "#ccc";
    }

    // Si todo es válido, guardar datos y redirigir
    if (isValid) {
        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("password", password.value);

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "login.html";
    }
});

// Funcionalidad para alternar la visibilidad de la contraseña
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
