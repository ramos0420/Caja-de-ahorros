// --- SELECTORES  ---
const formLogin = document.getElementById("formLogin");
const formRegistro = document.getElementById("formRegistro");
const divLogin = document.getElementById("divLogin");
const divRegistro = document.getElementById("divRegistro");
const linkRegistro = document.getElementById("linkRegistro");
const linkLogin = document.getElementById("linkLogin");

// --- DATOS EJEMPLOS (Actualizados para usar email) ---

const usuarios = [
  { nombre: "admin@correo.com", password: "1234", rol: "Administrador" },
  { nombre: "juan@correo.com", password: "abcd", rol: "Ahorrador" }
];

// --- LÓGICA DE LOGIN  ---
if (formLogin) {
  formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value.trim(); // Ahora será un email
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (usuario === "" || password === "") {
      mostrarMensaje(mensaje, "Por favor, completa todos los campos.", "error");
      return;
    }
    simularLogin(usuario, password);
  });
}

function simularLogin(usuario, password) {
  const mensaje = document.getElementById("mensaje");
  const user = usuarios.find(u => u.nombre === usuario && u.password === password);

  if (user) {
    mostrarMensaje(mensaje, `Bienvenido, ${user.nombre} (${user.rol})`, "success");
    // Aquí puedes redirigir...
  } else {
    mostrarMensaje(mensaje, "Correo o contraseña incorrectos.", "error");
  }
}


// --- LÓGICA DE REGISTRO  ---
if (formRegistro) {
  formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();
    const mensaje = document.getElementById("mensajeRegistro");

    // Obtener valores del formulario de registro
    const nombre = document.getElementById("regNombre").value.trim();
    const curp = document.getElementById("regCurp").value.trim().toUpperCase();
    const email = document.getElementById("regEmail").value.trim();
    const telefono = document.getElementById("regTelefono").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const passwordConfirm = document.getElementById("regPasswordConfirm").value.trim();
    const terminos = document.getElementById("regTerminos").checked;

    // 1. Validar campos vacíos
    if (!nombre || !curp || !email || !telefono || !password || !passwordConfirm) {
      mostrarMensaje(mensaje, "Por favor, completa todos los campos.", "error");
      return;
    }

    // 2. Validar CURP (simple)
    if (curp.length !== 18) {
      mostrarMensaje(mensaje, "La CURP debe tener 18 caracteres.", "error");
      return;
    }
    
    // 3. Validar Teléfono (simple)
    if (telefono.length !== 10 || isNaN(telefono)) {
        mostrarMensaje(mensaje, "El teléfono debe tener 10 dígitos numéricos.", "error");
        return;
    }

    // 4. Validar contraseñas
    if (password !== passwordConfirm) {
      mostrarMensaje(mensaje, "Las contraseñas no coinciden.", "error");
      return;
    }

    // 5. Validar Términos y Condiciones
    if (!terminos) {
      mostrarMensaje(mensaje, "Debes aceptar los Términos y Condiciones.", "error");
      return;
    }

    // 6. Validar que el usuario (email) no exista
    if (usuarios.find(u => u.nombre === email)) {
      mostrarMensaje(mensaje, "Este correo electrónico ya está registrado.", "error");
      return;
    }

    // --- Si todo es válido, registrar al usuario ---
    const nuevoUsuario = {
      nombre: email,       // Usamos el email para el login
      password: password,
      rol: "Ahorrador"     // Rol por defecto para nuevos registros
      // Se puede guardar también el nombre completo, CURP, etc.
    };
    
    usuarios.push(nuevoUsuario);
    
    console.log("Usuarios actualizados:", usuarios); // Para depuración
    mostrarMensaje(mensaje, "¡Registro exitoso! Ahora puedes iniciar sesión.", "success");
    formRegistro.reset(); // Limpiar el formulario
  });
}

// --- LÓGICA PARA MOSTRAR/OCULTAR  ---
if (linkRegistro) {
  linkRegistro.addEventListener("click", function(e) {
    e.preventDefault();
    divLogin.style.display = "none";
    divRegistro.style.display = "block";
  });
}

if (linkLogin) {
  linkLogin.addEventListener("click", function(e) {
    e.preventDefault();
    divRegistro.style.display = "none";
    divLogin.style.display = "block";
  });
}

// --- FUNCIÓN UTILITARIA  ---
// Para asignar clases de error/success al mensaje
function mostrarMensaje(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = `mensaje ${tipo}`; // Asigna 'mensaje error' o 'mensaje success'
}