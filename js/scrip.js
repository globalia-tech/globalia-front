if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);


const navLinks = document.querySelectorAll('.nav-list-fn');

// Verifica que hay enlaces antes de continuar
if (navLinks.length > 0) {
  // Añadir un evento de clic a cada enlace
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Previene el comportamiento predeterminado
      // Eliminar la clase activa de todos los enlaces
      navLinks.forEach(nav => nav.classList.remove('active'));
       const href = link.getAttribute('href')
       document.querySelector(href).scrollIntoView({behavior: 'smooth'})
      // Añadir la clase activa al enlace actual
      link.classList.add('active');
    });
  });

  // Selecciona el primer enlace como activo por defecto
  
}


//observa la barra de navegacion para cambiar su estilo a fixed y no se pierda en el scroll



const header = document.getElementById("navSection");
const rect = header.getBoundingClientRect();
const ubicacionELement = rect.top
console.log(ubicacionELement)

const observer = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          if(entry.target.id === 'Categorias'){
           navLinks[0].classList.add('active')
           navLinks[1].classList.remove('active')
           navLinks[2].classList.remove('active')
          }
          
          if(entry.target.id === 'porqueElegirnos'){
            navLinks[1].classList.add('active')
            navLinks[0].classList.remove('active')
            navLinks[2].classList.remove('active')
           }

           if(entry.target.id === 'preguntasFrecuentes'){
            navLinks[2].classList.add('active')
            navLinks[1].classList.remove('active')
            navLinks[0].classList.remove('active')
           }
      }
     
  });
}, { threshold: 0.3}); 

window.addEventListener('scroll', ()=>{ 
 
 const section1 = document.getElementById("Categorias")
 const section2 = document.getElementById("porqueElegirnos")
 const section3 = document.getElementById("preguntasFrecuentes")
  observer.observe(section1)
  observer.observe(section2)
  observer.observe(section3)

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