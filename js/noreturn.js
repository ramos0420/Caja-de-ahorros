document.addEventListener("DOMContentLoaded", () => {
    // Evitar caché por HTML
    const meta1 = document.createElement("meta");
    meta1.httpEquiv = "Cache-Control";
    meta1.content = "no-store, no-cache, must-revalidate, max-age=0";

    const meta2 = document.createElement("meta");
    meta2.httpEquiv = "Pragma";
    meta2.content = "no-cache";

    const meta3 = document.createElement("meta");
    meta3.httpEquiv = "Expires";
    meta3.content = "0";

    document.head.appendChild(meta1);
    document.head.appendChild(meta2);
    document.head.appendChild(meta3);

    // Evitar caché por navegación (cuando presiona atrás)
    if (window.performance && window.performance.navigation.type === 2) {
        window.location.reload(true);
    }
});

const tipo = localStorage.getItem("usuarioTipo");
const correo = localStorage.getItem("usuarioCorreo");

// Si no hay sesión → regresar al login
if (!tipo || !correo) {
    window.location.replace("/login.html");
}

// Validar rutas según carpetas
const path = window.location.pathname;

// SUPER USUARIO
if (path.startsWith("/super/") && tipo !== "super") {
    window.location.replace("/login.html");
}

// ADMIN
if (path.startsWith("/admin/") && tipo !== "admin") {
    window.location.replace("/login.html");
}

// CLIENTE
if (path.startsWith("/cliente/") && tipo !== "cliente") {
    window.location.replace("/login.html");
}



// Bloqueo absoluto del botón atrás
history.pushState(null, null, location.href);

window.onpopstate = function(event) {
    history.go(1);
};




function cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.replace("/login.html"); // No permite volver atrás
}
