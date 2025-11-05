// Escucha el evento 'submit' del formulario
document.getElementById("formLogin").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recargar la página

  // Obtener valores de los campos
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const mensaje = document.getElementById("mensaje");

  // Validar campos vacíos
  if (usuario === "" || password === "") {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  // Si todo está lleno, simular el login
  simularLogin(usuario, password);
});

// Datos simulados de usuarios
const usuarios = [
  { nombre: "admin", password: "1234", rol: "Administrador" },
  { nombre: "juan", password: "abcd", rol: "Ahorrador" }
];

// Función de simulación de login
function simularLogin(usuario, password) {
  const mensaje = document.getElementById("mensaje");

  // Buscar usuario en los datos simulados
  const user = usuarios.find(u => u.nombre === usuario && u.password === password);

  if (user) {
    mensaje.textContent = `Bienvenido, ${user.nombre} (${user.rol})`;
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos o no registrados.";
    mensaje.style.color = "red";
  }
}
