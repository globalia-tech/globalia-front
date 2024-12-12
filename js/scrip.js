
const navLinks = document.querySelectorAll('.nav-list-fn');

// Añadir un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Eliminar la clase activa de todos los enlaces
    navLinks.forEach(nav => nav.classList.remove('active'));
    console.log("paso")
    // Añadir la clase activa al enlace actual
    link.classList.add('active');
  });
});