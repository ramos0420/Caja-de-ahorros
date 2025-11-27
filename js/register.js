document.getElementById("formRegister")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("regNombre").value.trim();
    const curp = document.getElementById("regCurp").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const emailInst = document.getElementById("regEmailInstitucional").value.trim();
    const numero = document.getElementById("regNumero").value.trim();
    const rfc = document.getElementById("regRfc").value.trim();
    const tarjeta = document.getElementById("regTarjeta").value.trim();
    const pass1 = document.getElementById("regPass1").value.trim();
    const pass2 = document.getElementById("regPass2").value.trim();
    const terminos = document.getElementById("regTerminos").checked;

    if (!terminos) {
        alert("Debes aceptar los Términos y Condiciones.");
        return;
    }

    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica si ya existe el correo
    const existe = usuarios.some(u => u.correo === email);

    if (existe) {
        alert("Ya existe un usuario registrado con este correo.");
        return;
    }

    // Crear objeto del usuario
    const nuevoUsuario = {
        nombre,
        curp,
        correo: email,
        correoInst: emailInst,
        numero,
        rfc,
        tarjeta,
        password: pass1,
        tipo: "cliente"  // por defecto cliente
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

    window.location.href = "login.html";
});
