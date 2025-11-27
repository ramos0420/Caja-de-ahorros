document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Usuarios predefinidos
    const superUsers = [
        { email: "super@caja.com", password: "12345", tipo: "super" },
        { email: "root@caja.com", password: "admin123", tipo: "super" }
    ];

    const admins = [
        { email: "admin1@caja.com", password: "adminpass", tipo: "admin" },
        { email: "admin2@caja.com", password: "adminpass2", tipo: "admin" }
    ];

    const clientesBase = [
        { email: "cliente@correo.com", password: "cliente123", tipo: "cliente" },
        { email: "ahorrador@gmail.com", password: "ahorro456", tipo: "cliente" }
    ];

    // Los de LocalStorage
    const usuariosLS = JSON.parse(localStorage.getItem("usuarios")) || [];

    const todosLosUsuarios = [
        ...superUsers,
        ...admins,
        ...clientesBase,
        ...usuariosLS.map(u => ({ email: u.correo, password: u.password, tipo: u.tipo }))
    ];

    const user = todosLosUsuarios.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Credenciales incorrectas");
        return;
    }

    // Guardar sesión
    localStorage.setItem("usuarioTipo", user.tipo);
    localStorage.setItem("usuarioCorreo", email);

    // Redirecciones
    switch (user.tipo) {
        case "super":
            window.location.href = "/superusuario/super-inicio.html";
            break;
        case "admin":
            window.location.href = "/admin/admin-inicio.html";
            break;
        case "cliente":
            window.location.href = "/usuario/usuario-inicio.html";
            break;
    }
});
