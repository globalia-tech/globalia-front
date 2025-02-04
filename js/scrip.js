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


//observa la barra de navegacion para cambiar su estilo a fixed y no se pierda en el scroll



const header = document.getElementById("navSection");
const rect = header.getBoundingClientRect();
const ubicacionELement = rect.top
console.log(ubicacionELement)
window.addEventListener('scroll', ()=>{ 
 
  

  if(window.scrollY < ubicacionELement){
  console.log('paso el header')  
  header.classList.remove("fixed"); 
  } else{
    header.classList.add("fixed");
    
  }
  console.log(rect.top)
 
 })

 //cambia el estilo del navbar 

 const btnnavbar = document.getElementById('btnNavbar')
 const navbar = document.getElementById('navbarNav');

 btnnavbar.addEventListener('click', () => {
  console.log('nav')
   if(!navbar.classList.contains('navMobil')){
    navbar.classList.add('navMobil');
   }else{
    navbar.classList.remove('navMobil');
   }
 })