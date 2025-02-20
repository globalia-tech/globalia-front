
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