document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("register-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const usuario = document.getElementById("register-usuario").value;
        const password = document.getElementById("register-password").value;

        if (localStorage.getItem(usuario)) {
            alert("El usuario ya existe");
        } else {
            localStorage.setItem(usuario, password);
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "index.html";
        }
    });
});
