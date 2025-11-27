document.getElementById("recuperarForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => u.correo === correo);

    if (!usuario) {
        alert("No existe una cuenta con ese correo.");
        return;
    }

    alert("Tu contraseña es: " + usuario.password);
});
