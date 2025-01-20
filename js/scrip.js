const navLinks = document.querySelectorAll('.nav-list-fn');

// Verifica que hay enlaces antes de continuar
if (navLinks.length > 0) {
  // Añadir un evento de clic a cada enlace
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Previene el comportamiento predeterminado
      // Eliminar la clase activa de todos los enlaces
      navLinks.forEach(nav => nav.classList.remove('active'));
      // Añadir la clase activa al enlace actual
      link.classList.add('active');
    });
  });

  // Selecciona el primer enlace como activo por defecto
  navLinks[0].classList.add('active');
}
