import { useEffect, useRef } from 'react';
import imagen from '../assets/fondo-portada.webp';
import imagen2 from '../assets/fondo2.webp';
import './style/style.css';
export default function Home() {
  const seccionRef = useRef(null)
    useEffect(() => {
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
          

        const header = document.getElementById("navSection");
        if(!seccionRef.current) return
          
        
        const rect = seccionRef.current.getBoundingClientRect();
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
        
    },[])
  return (
    <>
    
     <div id="carouselExample" className="carousel slide position-relative" data-bs-ride="carousel" style={{height: "100vh"}}>
     
      <div className="carousel-inner" style={{height: "100%"}}>
            <div className="carousel-item active" style={{height: "100%"}}>
                <img src={imagen} className="d-block w-100" 
                style={{height: "100%" ,objectFit: "cover", objectPosition: "center"}} alt="Imagen 1"/>
            </div>

        {/*!-- Texto destacado en el carrusel -->*/}
        <div className="hero-text">
            <h1>Todo lo que necesitas<br/> para tu presencia digital</h1>
            <p>Diseño web, desarrollo y soluciones innovadoras.<br/> ¡Empieza hoy con Globalia Tech!</p>
            <a href="#" className="btn-primario efecto-direction">Empieza ahora <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#FCFCFC"/>
              </svg>
              </a>
        </div>
    </div>
  </div>
   

    {/*<!-- Menú de navegación Categoria de Proyecto (Está fijado a la parte superior, corregir)-->*/}
    
    <div style={{margin: "0 auto", marginTop: "100px",  width: "100%", maxWidth:"1158px", height: "50px"}}>
      <div className="  headersearch " id="navSection" ref={seccionRef}>
        {/*<!--- <div className="search">
            <i className="bi bi-search"></i>
            <input type="search"/>
        </div> -->*/}
   
        <nav  aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li ><a className=" nav-list-fn" href="#Categorias">Categorías de<br/> proyectos</a></li>
              <li  aria-current="page"><a className="nav-list-fn" href="#porqueElegirnos">Por qué<br/>
                elegirnos</a></li>
              <li  aria-current="page"><a className="nav-list-fn" href="#preguntasFrecuentes">Preguntas<br/> frecuentes</a></li>
            </ol>
          </nav>
        
    </div>
    </div>
      
  
  
  
  
    




    <section id="categorias" className="categoriasProyect">
      
        <div id="Categorias" style={{margin: "80px auto" ,padding: "80px 0"}}>
          <h4  className="">Categorías de proyectos</h4>
          <p></p>
        <p>Explora cómo podemos trabajar juntos en proyectos tecnológicos, desde desarrollo web hasta soluciones personalizadas, para hacer realidad tus ideas.</p>
        <div className="ctn-cards" >
            <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Desarrollo Web</h5>
                 <ul>
                    <li>Sitios web desde cero</li>
                    <li>Renovación y modificación de sitios web</li>
                    <li>Servicios de UX/UI</li>
                 </ul>
                 {/*<a className="btn btn-primary" href="#" role="button">Ver mas</a>*/}
                </div>
               
              </div>

              {/*<div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Soporte</h5>
                 <ul>
                    <li>Resolvemos tus dudas con el proyecto</li>
                    <li>Cuenta con nosotros ya que eres una persona muy valiosa para nuestro equipo</li>
                 </ul>
                 {/*<a className="btn btn-primary" href="#" role="button">Ver mas</a>
                </div>
              
              </div>*/}

              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Social Media</h5>
                 <ul>
                    <li>
                        Creación de imágenes y videos publicitarios para redes sociales</li>
                        <li>Servicios de Community Manager</li>
                        <li>Manual de estilo en redes sociales</li>
                 </ul>

                {/*<a className="btn btn-primary" href="#" role="button">Ver mas</a>*/}
                </div>
              </div>

             
            
        </div>
        </div>
        
      {/*  <!--<div className="linkmore">
          <a className=" icon-link  link-success link-underline-success link-underline-opacity-25" href="#">
            Ver mas
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
            </svg>
          </a>
        </div>
      --> */}
    
      
      <div id="porqueElegirnos" style={{marginTop: "100px"}}>

        <h4 className="text-center mb-4" >
          ¿Por qué elegir <span className="highlight">Globalia Tech</span> para su Empresa o Proyecto Personal?
        </h4> 
    
        <div className="container ctn-cards-modo" >
          
            <div style={{display: "flex" ,gap: "8px"}}>
             
                <svg width="63" height="50" viewBox="0 0 63 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0705 11.9875V4.69334C20.0705 2.67912 21.7762 1.04626 23.8804 1.04626H37.215C39.3192 1.04626 41.0249 2.67912 41.0249 4.69334V11.9875M8.64079 48.4583H54.3595C58.5678 48.4583 61.9793 45.1926 61.9793 41.1641V19.2817C61.9793 15.2532 58.5678 11.9875 54.3595 11.9875H8.64079C4.43249 11.9875 1.021 15.2532 1.021 19.2817V41.1641C1.021 45.1926 4.43249 48.4583 8.64079 48.4583Z" stroke="#1A1E29" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  
             
              <div className="">
                
                  <h5 className="card-title">Experiencia y Profesionalismo</h5>
                  <p className="card-text">Contamos con un equipo experto en diseño web, desarrollo y soluciones digitales adaptadas a tus necesidades</p>
                
              </div>
            </div>
          
    
         
            <div className=" " style={{display: "flex", gap: "8px"}}>
              
                <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.146 33.375L26.5835 30.1875V16.8591M52.0835 27C52.0835 12.9167 40.6668 1.5 26.5835 1.5C12.5002 1.5 1.0835 12.9167 1.0835 27C1.0835 41.0833 12.5002 52.5 26.5835 52.5C28.2177 52.5 29.816 52.3463 31.3648 52.0525M37.7398 44.5312L42.521 49.3125L55.271 36.5625" stroke="#1A1E29" strokeOpacity="0.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  
             
              <div className="">
                
                  <h5 className="card-title">Entrega Puntual</h5>
                  <p className="card-text">Cumplimos con los plazos acordados sin comprometer la calidad</p>
                
              </div>
                      </div>
        
        
            <div className="" style={{display: "flex" ,gap: "8px"}}>
             
                <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.8429 33.7868C59.8429 33.2345 59.3952 32.7868 58.8429 32.7868C58.2906 32.7868 57.8429 33.2345 57.8429 33.7868H59.8429ZM29.984 6.19853C30.5362 6.19853 30.984 5.75081 30.984 5.19853C30.984 4.64624 30.5362 4.19853 29.984 4.19853V6.19853ZM45.4134 33.7868C45.4134 33.2345 44.9657 32.7868 44.4134 32.7868C43.8612 32.7868 43.4134 33.2345 43.4134 33.7868H45.4134ZM29.984 20.4926C30.5362 20.4926 30.984 20.0449 30.984 19.4926C30.984 18.9404 30.5362 18.4926 29.984 18.4926V20.4926ZM43.4417 21.2867C43.8341 20.898 43.8371 20.2648 43.4484 19.8725C43.0597 19.4801 42.4265 19.4771 42.0342 19.8658L43.4417 21.2867ZM29.2802 32.5001C28.8878 32.8888 28.8848 33.522 29.2735 33.9143C29.6622 34.3067 30.2954 34.3097 30.6877 33.921L29.2802 32.5001ZM61.875 11.7325L62.5788 12.4429C62.8486 12.1756 62.9437 11.7784 62.8242 11.4179C62.7047 11.0573 62.3912 10.7956 62.0151 10.7423L61.875 11.7325ZM50.3964 23.1034L50.0829 24.0529C50.44 24.1709 50.833 24.0785 51.1002 23.8138L50.3964 23.1034ZM40.1932 12.9959L39.4895 12.2855C39.2184 12.554 39.1238 12.9532 39.2455 13.3148L40.1932 12.9959ZM51.6718 1.625L52.6616 1.48227C52.6077 1.10845 52.3478 0.796895 51.9897 0.676854C51.6315 0.556813 51.2364 0.648767 50.9681 0.914569L51.6718 1.625ZM42.744 20.5765L41.7962 20.8954C41.8966 21.1937 42.1316 21.4274 42.4305 21.5261L42.744 20.5765ZM52.9472 10.469L51.9575 10.6118C52.0209 11.0517 52.367 11.3969 52.8071 11.4592L52.9472 10.469ZM57.8429 33.7868C57.8429 49.0145 45.3789 61.375 29.984 61.375V63.375C46.4657 63.375 59.8429 50.1368 59.8429 33.7868H57.8429ZM29.984 61.375C14.589 61.375 2.125 49.0145 2.125 33.7868H0.125C0.125 50.1368 13.5022 63.375 29.984 63.375V61.375ZM2.125 33.7868C2.125 18.5591 14.589 6.19853 29.984 6.19853V4.19853C13.5022 4.19853 0.125 17.4368 0.125 33.7868H2.125ZM43.4134 33.7868C43.4134 41.12 37.4098 47.0809 29.984 47.0809V49.0809C38.4965 49.0809 45.4134 42.2423 45.4134 33.7868H43.4134ZM29.984 47.0809C22.5582 47.0809 16.5545 41.12 16.5545 33.7868H14.5545C14.5545 42.2423 21.4714 49.0809 29.984 49.0809V47.0809ZM16.5545 33.7868C16.5545 26.4535 22.5582 20.4926 29.984 20.4926V18.4926C21.4714 18.4926 14.5545 25.3312 14.5545 33.7868H16.5545ZM42.0342 19.8658L29.2802 32.5001L30.6877 33.921L43.4417 21.2867L42.0342 19.8658ZM61.1712 11.022L49.6927 22.3929L51.1002 23.8138L62.5788 12.4429L61.1712 11.022ZM40.897 13.7063L52.3756 2.33543L50.9681 0.914569L39.4895 12.2855L40.897 13.7063ZM50.71 22.1538L43.0576 19.6269L42.4305 21.5261L50.0829 24.0529L50.71 22.1538ZM43.6918 20.2576L41.141 12.677L39.2455 13.3148L41.7962 20.8954L43.6918 20.2576ZM50.6821 1.76773L51.9575 10.6118L53.937 10.3263L52.6616 1.48227L50.6821 1.76773ZM52.8071 11.4592L61.7349 12.7226L62.0151 10.7423L53.0873 9.4789L52.8071 11.4592Z" fill="#1A1E29" fillOpacity="0.87"/>
                  </svg>
                  
                  
            
              <div className="">
                
                  <h5 className="card-title">Soluciones Personalizadas</h5>
                  <p className="card-text">Cada proyecto es único; creamos estrategias hechas a medida para alcanzar tus objetivos</p>
              
              </div>
            </div>
          
    
        
         
            <div className="" style={{display: "flex",gap: "8px"}}>
              
                <svg width="66" height="54" viewBox="0 0 66 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.9596 40.3744C27.3501 40.7649 27.9832 40.7649 28.3738 40.3744C28.7643 39.9839 28.7643 39.3507 28.3738 38.9602L26.9596 40.3744ZM21 33.0006L20.2929 32.2935C19.9024 32.6841 19.9024 33.3172 20.2929 33.7078L21 33.0006ZM28.3738 27.0411C28.7643 26.6506 28.7643 26.0174 28.3738 25.6269C27.9832 25.2363 27.3501 25.2363 26.9596 25.6269L28.3738 27.0411ZM39.0404 25.6269C38.6499 25.2363 38.0168 25.2363 37.6262 25.6269C37.2357 26.0174 37.2357 26.6506 37.6262 27.0411L39.0404 25.6269ZM45 33.0006L45.7071 33.7078C46.0976 33.3172 46.0976 32.6841 45.7071 32.2935L45 33.0006ZM37.6262 38.9602C37.2357 39.3507 37.2357 39.9839 37.6262 40.3744C38.0168 40.7649 38.6499 40.7649 39.0404 40.3744L37.6262 38.9602ZM5.57143 2H23.8571V0H5.57143V2ZM27.4286 5.66667V13.6667H29.4286V5.66667H27.4286ZM27.4286 13.6667V14.3333H29.4286V13.6667H27.4286ZM23.8571 2C25.8102 2 27.4286 3.62208 27.4286 5.66667H29.4286C29.4286 2.55659 26.9535 0 23.8571 0V2ZM5.57143 0C2.47508 0 0 2.55659 0 5.66667H2C2 3.62208 3.61832 2 5.57143 2V0ZM1 14.6667H28.4286V12.6667H1V14.6667ZM28.4286 14.6667H60.4286V12.6667H28.4286V14.6667ZM64 18.3333V48.3333H66V18.3333H64ZM60.4286 52H5.57143V54H60.4286V52ZM2 48.3333V13.6667H0V48.3333H2ZM5.57143 52C3.61832 52 2 50.3779 2 48.3333H0C0 51.4434 2.47508 54 5.57143 54V52ZM64 48.3333C64 50.3779 62.3817 52 60.4286 52V54C63.5249 54 66 51.4434 66 48.3333H64ZM60.4286 14.6667C62.3817 14.6667 64 16.2887 64 18.3333H66C66 15.2233 63.5249 12.6667 60.4286 12.6667V14.6667ZM28.3738 38.9602L21.7071 32.2935L20.2929 33.7078L26.9596 40.3744L28.3738 38.9602ZM21.7071 33.7078L28.3738 27.0411L26.9596 25.6269L20.2929 32.2935L21.7071 33.7078ZM37.6262 27.0411L44.2929 33.7078L45.7071 32.2935L39.0404 25.6269L37.6262 27.0411ZM44.2929 32.2935L37.6262 38.9602L39.0404 40.3744L45.7071 33.7078L44.2929 32.2935ZM2 13.6667V5.66667H0V13.6667H2Z" fill="#1A1E29" fillOpacity="0.87"/>
                  </svg>
                  
              
              <div className="">
                
                  <h5 className="card-title">Soporte Continuo:</h5>
                  <p className="card-text">Te acompañamos en cada etapa del proceso con asesoramiento y soporte personalizado</p>
              
              </div>
            </div>
          </div>
      </div>
      
        
      
      </section>
    
    {/*<!--Imagen de descanso-->*/}
    <div className="img-descanso">
      <img src={imagen2}
      alt="imagen de descanso" style={{width: "100%" ,height: "100%"}}/>
    </div>

    {/*<!--Sección de preguntas-->*/}
    <section className="seccion-preguntas" >
      
      <div className="preguntas" id="preguntasFrecuentes">
        
        <div className="ctn-preguntas">
          <div className="pregunta-title">
            <svg width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0234 29.5715C14.0234 17.9736 23.7231 8.57153 35.6882 8.57153C47.6534 8.57153 57.3531 17.9736 57.3531 29.5715C57.3531 32.5903 56.6959 35.4604 55.5127 38.0546L57.3572 50.5695L46.2925 47.8883C43.158 49.5969 39.5405 50.5715 35.6882 50.5715M8.60974 42.6965C8.60974 44.5833 9.02042 46.3771 9.75986 47.9984L8.60718 55.8203L15.522 54.1445C17.4808 55.2124 19.7415 55.8215 22.149 55.8215C29.6265 55.8215 35.6882 49.9453 35.6882 42.6965C35.6882 35.4478 29.6265 29.5715 22.149 29.5715C14.6715 29.5715 8.60974 35.4478 8.60974 42.6965Z" stroke="cornflowerblue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
            <h4>Preguntas Frecuentes</h4>
          </div>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" 
                style={{fontWeight: "600" ,fontSize: "26px", lineHeight: "32px"}}>
                  1. ¿Qué servicios ofrece Globalia Tech?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <strong>Ofrecemos una amplia gama de servicios, que incluyen:</strong> 
                  <ul>
                      <li>Diseño y desarrollo de sitios web</li>
                      <li>Diseño adaptable a distintos dispositivos</li>
                      <li>Soporte técnico</li>
                      <li>Administración de redes sociales</li>
                      <li>Creación de identidad de marca (branding)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
                style={{fontWeight: "600" ,fontSize: "26px", lineHeight: "32px"}}>
                  2. ¿Cómo pueden ayudarme en mi proyecto?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Trabajamos de cerca con cada cliente para entender sus necesidades y objetivos. A través de un proceso colaborativo y ágil, creamos soluciones personalizadas que impulsan la presencia online y mejoran la experiencia del usuario 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" 
                style={{fontWeight: "600" ,fontSize: "26px", lineHeight: "32px"}}>
                  3. ¿Ofrecen paquetes de servicios?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Sí, tenemos paquetes flexibles que incluyen servicios de branding, diseño de sitios web y desarrollo a medida. Podemos ajustarlos a las necesidades específicas de tu negocio
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"
                style={{fontWeight: "600" ,fontSize: "26px", lineHeight: "32px"}}>
                  4. ¿Puedo recibir un presupuesto?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Claro, ofrecemos una consulta inicial gratuita para discutir tu proyecto y proporcionarte un presupuesto personalizado sin compromiso de compra
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive" 
                style={{fontWeight: "600" ,fontSize: "26px", lineHeight: "32px"}}>
                  5. ¿Quiénes forman Globalia Tech?
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Somos un equipo multidisciplinario que incluye expertos en UX/UI, Desarrollo Front End y Back End, Control de calidad (QA) y Scrum Master. Cada miembro del equipo está comprometido en ofrecer soluciones de alta calidad y una experiencia de usuario excepcional
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix" style={{fontWeight: "600" ,fontSize: "26px" ,lineHeight: "32px"}}>
                  6. ¿Ofrecen soporte técnico?
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Sí, ofrecemos soporte post-lanzamiento para asegurarnos de que tu sitio web funcione correctamente y se mantenga actualizado. También ofrecemos servicios de mantenimiento continuo para solucionar cualquier inconveniente
                </div>
              </div>
            </div>
          </div>
        </div>
   {/**
        <div className="ctn-form-preguntas">
          <svg style={{margin:" 0 auto"}} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.5104 44.5798C59.0404 44.7098 56.0704 48.3098 57.4104 51.5798C58.6204 54.4798 62.5304 54.1998 64.9204 53.1498C69.6004 51.1498 67.6104 44.3998 62.5104 44.5798ZM65.2604 52.1998C63.1704 53.5298 58.9704 53.7698 57.9204 51.4398C56.8704 49.1097 58.9204 45.8797 61.8704 45.4398C66.4004 44.6198 68.5204 50.1298 65.2604 52.1998ZM83.5404 48.0998C84.3204 47.0998 85.8304 46.2498 86.9604 46.7598C87.6204 47.0698 88.0104 46.1998 87.2604 46.0598C86.48 45.923 85.6766 46.021 84.952 46.3415C84.2274 46.6619 83.6143 47.1904 83.1904 47.8598C83.1747 47.8827 83.1636 47.9086 83.1578 47.9359C83.1521 47.9631 83.1517 47.9912 83.1568 48.0186C83.162 48.046 83.1724 48.0722 83.1876 48.0955C83.2028 48.1189 83.2225 48.139 83.2454 48.1548C83.2684 48.1705 83.2943 48.1816 83.3216 48.1874C83.3488 48.1931 83.3769 48.1935 83.4043 48.1883C83.4317 48.1832 83.4579 48.1728 83.4812 48.1576C83.5046 48.1424 83.5247 48.1227 83.5404 48.0998ZM40.6304 17.7598C42.4757 18.5514 44.4047 19.1318 46.3804 19.4898C46.6204 19.4898 46.7504 19.1998 46.8104 19.0198C47.6072 16.5498 49.232 14.4304 51.4104 13.0198C59.7404 8.11975 67.7604 16.4898 64.2704 24.4098C62.3304 28.7998 57.2704 30.0698 53.1404 31.2298C52.4004 31.4398 52.5704 31.7598 53.2904 33.4798C54.5038 36.3998 55.7004 39.3231 56.8804 42.2498C57.1204 42.8198 58.1404 42.4498 58.5504 42.3698C59.1904 42.2598 62.6904 41.8498 62.8004 40.9798C62.9104 40.1098 60.6604 35.4698 60.2304 34.4898C68.1704 32.3098 73.5405 23.8898 71.7304 15.7398C69.4604 5.62975 58.3904 3.23975 49.6204 6.14975C45.0004 7.68975 40.4004 11.8198 40.3304 17.0598C40.3304 17.5898 40.2304 17.5898 40.6304 17.7598ZM48.4704 7.26975C57.1604 3.90975 68.6304 5.51975 71.0004 15.9298C72.7804 23.6598 67.4504 31.7098 59.9204 33.7598C59.6204 33.8398 59.3004 33.9798 59.8304 35.0298C60.6704 36.7397 62.0004 40.1298 62.3004 40.7998C60.7296 41.3134 59.1168 41.6881 57.4804 41.9198L53.3004 31.9998C57.2404 31.7398 63.3004 28.6098 64.9804 24.7698C68.3605 16.9998 61.0004 7.75975 52.0004 11.9998C50.6097 12.6583 49.384 13.6198 48.4133 14.8138C47.4425 16.0078 46.7513 17.4039 46.3904 18.8998L40.7904 17.2598C40.8604 12.9998 44.6404 8.74975 48.4704 7.26975ZM85.1704 50.8398C84.5704 50.2898 83.0005 52.6298 83.8004 53.1098C84.2505 53.3698 85.7804 51.3998 85.1704 50.8398ZM98.2604 50.3498C98.834 50.6737 99.314 51.1404 99.654 51.7046C99.9939 52.2688 100.182 52.9113 100.2 53.5698C100.201 53.618 100.217 53.6649 100.246 53.7031C100.276 53.7413 100.317 53.7688 100.363 53.7813C100.41 53.7938 100.459 53.7907 100.504 53.7723C100.549 53.754 100.586 53.7214 100.61 53.6798C101.23 52.0498 99.9904 50.4398 98.6804 49.5798C98.1504 49.2198 97.7204 50.1898 98.2604 50.3498ZM91.0804 66.7397C92.4904 65.5998 94.7904 65.3998 95.9304 67.0498C96.7904 68.2998 96.0604 69.8298 94.5204 69.4498C94.0862 69.2735 93.6651 69.0663 93.2604 68.8298C93.2229 68.8158 93.1822 68.8123 93.1428 68.8198C93.1034 68.8273 93.0668 68.8454 93.0369 68.8722C93.007 68.8989 92.9851 68.9333 92.9734 68.9717C92.9616 69.01 92.9606 69.0509 92.9704 69.0898C93.5204 70.7398 96.7804 70.6598 97.0304 68.4897C97.3304 65.8997 93.4804 63.8397 90.8604 66.4897C90.8273 66.5189 90.8071 66.5601 90.8043 66.6041C90.8015 66.6482 90.8163 66.6916 90.8454 66.7248C90.8746 66.7579 90.9158 66.7781 90.9598 66.7809C91.0039 66.7837 91.0473 66.7689 91.0804 66.7397ZM94.6204 56.9998C95.6204 57.4598 96.6204 54.9498 95.8104 54.6098C95.0004 54.2698 94.0005 56.7398 94.6204 56.9998ZM88.0504 60.6698C89.4604 61.2397 89.2404 60.5098 89.0504 60.3398C87.9119 59.7618 86.7359 59.2607 85.5304 58.8398C87.0004 56.5098 88.3904 54.1498 90.0004 51.9098C90.1404 51.7198 89.8404 51.4798 89.7004 51.6798C88.1804 53.8098 86.6404 55.9298 85.1704 58.0898C84.2304 59.4598 84.5304 59.2498 88.0504 60.6698ZM124 143.66C124.693 143.309 125.244 142.73 125.56 142.021C125.877 141.312 125.939 140.516 125.738 139.766C125.536 139.016 125.082 138.358 124.452 137.904C123.823 137.449 123.056 137.225 122.28 137.27C117.05 137.27 117.48 147.24 124 143.66ZM145.62 120.73C147.8 122.83 152.78 121.93 151.24 117.53C149.41 112.28 141.66 116.92 145.62 120.73ZM139.81 158.32C132.95 158.88 136.56 168.39 141.42 165.51C144.73 163.54 143.25 158 139.81 158.32ZM122.09 109.55C121.3 106.22 115.74 105.39 114.5 109.25C112.56 115.34 123.36 114.92 122.09 109.55ZM164.56 143.45C157.61 145.97 168.1 156.18 169.89 147.05C170.56 143.69 167.37 142.43 164.56 143.45ZM99.1604 128.1C98.3811 128.212 97.6628 128.586 97.1231 129.159C96.5834 129.732 96.2542 130.472 96.1892 131.257C96.1241 132.042 96.3272 132.825 96.7652 133.48C97.2032 134.134 97.8502 134.621 98.6004 134.86C103.75 136.4 104.62 127.3 99.1604 128.1Z" fill="cornflowerblue"/>
            <path d="M181.16 156.7C180.81 141.06 171.26 124.79 161.55 112.86C163.89 109.654 165.21 105.818 165.338 101.851C165.467 97.8839 164.398 93.9703 162.27 90.6197C159.54 86.3197 155.86 84.8297 154.7 81.6197C153.3 77.7997 155.05 73.6197 154.81 69.7597C154.53 65.1197 151.81 60.0097 147.02 58.7597C143.84 57.9297 139.14 59.4097 137.43 53.6097C136.09 49.0597 138.43 42.3297 134.43 35.9797C132.29 32.5697 128.52 30.6797 124.85 29.3897C120.21 27.7597 114.72 27.1197 110.25 29.5397C107.578 28.5099 104.694 28.1495 101.85 28.4897C105 25.2097 106.35 18.3897 104.85 14.0697C104.39 12.7297 96.6204 18.2597 96.0604 25.1797C92.9104 21.4897 89.8004 20.2597 85.2204 19.6697C83.4604 19.4397 87.1304 28.5797 90.2804 29.7897C87.8804 30.0097 84.5604 30.7897 82.8304 32.5597C82.2879 33.2136 81.8825 33.97 81.6385 34.7839C81.3945 35.5977 81.3169 36.4524 81.4102 37.2969C81.5035 38.1414 81.7659 38.9585 82.1817 39.6994C82.5975 40.4404 83.1582 41.0901 83.8304 41.6097C80.2604 47.2897 77.1204 53.5397 76.5304 60.3197C73.6887 61.0262 71.239 62.8222 69.7104 65.3197C65.4604 71.5197 70.4004 74.3197 68.8204 79.2197C66.9504 85.1097 61.3004 82.9197 58.6204 86.8297C56.6204 89.6597 57.0904 93.6497 59.0304 96.3997C56.1004 98.0797 52.4104 100.17 50.0904 102.58C50.6204 87.1697 48.6204 72.9197 47.8404 69.7397C47.7304 69.3197 46.1604 69.6497 45.7404 69.6797C46.5965 67.8289 47.1857 65.866 47.4904 63.8497C47.6604 61.9697 47.4904 59.2797 45.0804 59.1297C44.8704 58.5397 45.0804 52.4697 41.2304 49.1297C40.3904 48.3997 39.5004 48.2597 39.5204 49.5897C39.5204 51.5897 40.9104 53.3397 41.1004 56.5897C40.1869 56.6425 39.3082 56.9585 38.5704 57.4997C35.1804 56.6197 31.5104 64.3197 34.5704 64.8897C34.1675 66.3186 34.2627 67.8421 34.8404 69.2097C34.5704 69.2097 33.9904 68.9897 33.8404 69.2997C26.6104 83.3997 16.4204 108.63 19.2104 124.15C22.4604 142.22 41.9104 147.24 57.8004 145.44C58.7354 154.43 61.3759 163.159 65.5804 171.16C66.7604 173.38 71.5804 182.88 74.2504 185.1C73.488 188.29 73.1021 191.559 73.1004 194.84C73.1004 195.16 73.5804 195.11 73.5904 194.84C73.7001 191.77 74.1121 188.719 74.8204 185.73C77.0279 186.656 79.2808 187.471 81.5704 188.17C99.5618 193.554 118.714 193.71 136.79 188.62C139.44 187.87 142.29 187.17 144.6 185.62C145.51 188.62 146.51 191.49 147.48 194.42C147.488 194.444 147.5 194.467 147.516 194.486C147.532 194.506 147.551 194.522 147.573 194.534C147.596 194.547 147.62 194.554 147.645 194.557C147.671 194.559 147.696 194.557 147.72 194.55C147.745 194.543 147.767 194.531 147.787 194.515C147.807 194.499 147.823 194.479 147.835 194.457C147.847 194.434 147.855 194.41 147.857 194.385C147.86 194.36 147.858 194.334 147.85 194.31C146.95 191.09 146.08 187.87 145.11 184.68C145.752 181.82 146.087 178.9 146.11 175.97C152.23 176.85 160.89 177.57 166.91 176.36C172.93 175.15 177.96 171.88 179.91 165.85C180.849 162.894 181.272 159.799 181.16 156.7ZM116.61 35.9397C118.45 39.4197 118.95 44.5097 118.37 48.3397C117.993 51.2353 116.827 53.9715 115 56.2497L114 55.9697C116.47 47.9697 114.21 38.8197 107.18 33.8997C104.389 32.1204 101.266 30.9231 98.0004 30.3797C103.87 26.9997 113.43 29.8997 116.61 35.9397ZM104.54 14.7197C105.12 22.6397 103.94 25.3397 100.54 28.7197C99.896 28.8589 99.2712 29.0772 98.6804 29.3697C98.1785 28.0369 97.4587 26.7967 96.5504 25.6997C97.4004 21.1197 100 16.4997 104.54 14.7197ZM85.4904 20.2097C85.4904 20.0697 85.4904 20.0997 85.6104 20.1297C92.4004 21.6797 94.9404 23.5397 98.0704 29.7097C97.8304 29.8604 97.606 30.0346 97.4004 30.2297C95.4694 29.8369 93.5004 29.6624 91.5304 29.7097C88.3904 29.1597 86.0004 23.0597 85.4904 20.2097ZM84.5904 41.9997C91.0904 45.5497 101.45 48.5897 109.13 47.5897C107.043 50.1105 105.973 53.3205 106.13 56.5897C106.25 59.1297 107.82 60.7897 110.03 58.9097C111.18 57.9097 112.65 56.1597 114.37 56.7297C116.09 57.2997 115.86 59.2697 115.15 60.7297C112.52 66.1197 107.47 65.2197 109.43 77.6597C109.765 79.7763 110.29 81.8581 111 83.8797C110.667 85.505 109.775 86.9625 108.48 87.9997C102.55 93.3797 91.1504 92.0897 91.3404 84.6997C91.3967 82.6618 91.3466 80.6224 91.1904 78.5897C87.2604 77.7897 82.2704 75.9697 79.8204 72.5297C78.9834 71.2774 78.3678 69.8905 78.0004 68.4297C76.3104 62.5497 77.4704 56.2697 79.8404 50.7397C81.1536 47.6875 82.7436 44.762 84.5904 41.9997ZM111.65 84.2697C112.75 84.3697 113.8 84.5197 114.84 84.6897C114.84 85.4897 115.84 88.6897 115.07 92.5497C114.32 96.6397 111.42 100.89 106.98 101.25C100.28 101.78 98.7304 95.1697 98.7604 91.9497C107.33 92.5597 112 85.6497 111.65 84.2697ZM97.4504 91.7897C96.9804 91.7897 95.8304 96.3897 91.6704 97.3297C87.7304 98.2297 85.3304 95.0797 86.0604 91.3297C86.6304 88.3297 88.8204 86.2597 89.2504 85.3297L90.6404 85.0197C90.3404 88.8397 93.6104 91.1397 97.4504 91.7897ZM46.0004 59.9997C47.5604 60.9997 46.7904 64.7797 46.3204 66.1997C45.9404 67.3697 45.4904 68.5297 45.0704 69.6897C41.883 69.8318 38.6893 69.6778 35.5304 69.2297C35.0999 67.7952 34.9505 66.291 35.0904 64.7997C35.5466 64.674 35.9435 64.3905 36.2104 63.9997C37.1404 65.0897 38.5104 63.5297 39.2104 62.8597L40.9604 63.1397C39.7647 63.9999 38.8972 65.2412 38.5004 66.6597C38.5039 66.7036 38.5218 66.7451 38.5513 66.7778C38.5808 66.8105 38.6202 66.8326 38.6635 66.8406C38.7069 66.8485 38.7516 66.842 38.7908 66.822C38.83 66.8019 38.8615 66.7695 38.8804 66.7297C39.1672 65.952 39.6121 65.2421 40.187 64.6449C40.7618 64.0477 41.4542 63.576 42.2204 63.2597C43.5004 62.8897 43.2204 62.3797 42.2204 62.5797C41.9104 62.6397 38.7704 62.4797 38.7104 61.9697C38.6504 61.4597 44.2104 58.8597 46.0004 59.9997ZM41.2404 57.1397V58.3397C41.2404 58.5297 41.5804 58.5397 41.6204 58.3397C42.4104 53.9697 40.3104 52.0497 40.3104 49.4197C40.3104 48.9297 40.6404 49.2797 40.8704 49.4197C44.1504 52.0497 44.4304 56.8797 44.5004 59.0797C42.538 59.2619 40.6498 59.921 39.0004 60.9997C38.1604 61.4597 37.4704 62.2197 38.6304 62.7197C38.1504 63.0697 36.9304 64.4497 36.4904 63.4097C36.0504 62.3697 37.6604 57.2197 41.2104 57.1197L41.2404 57.1397ZM34.1904 63.6297C34.0004 61.3697 35.6504 58.2797 38.0004 57.9997C36.6604 59.3097 35.4604 62.3197 35.9104 63.6397C35.5004 64.1897 34.2404 64.9297 34.1604 63.6097L34.1904 63.6297ZM34.3204 69.5197C38.3704 70.6997 43.1204 70.2997 47.3204 70.1697L48.1304 75.8297C42.7437 76.2662 37.3218 75.817 32.0804 74.4997C32.8004 72.8197 33.5604 71.1797 34.2904 69.4997L34.3204 69.5197ZM178.32 167.92C173.72 162.61 168.79 170.92 172.99 173.36C169.42 175.43 165.25 176.07 161.18 176.18C146.46 176.58 130.99 172.91 117.7 166.66C118.38 158.66 116.51 152.44 113.8 148.35C125.03 145.48 133.68 144.76 144.5 144.12C144.68 144.12 144.72 143.8 144.5 143.79C142.404 143.691 140.303 143.728 138.21 143.9C138.02 143.01 131.49 136.38 125.21 122.9C125.11 122.69 124.78 122.79 124.87 123.01C128.037 130.151 132.046 136.889 136.81 143.08C137.02 143.36 137.24 143.64 137.48 143.91C126.471 144.53 115.593 146.609 105.13 150.09C104.65 150.26 104.98 150.75 105.26 150.97C103.764 151.047 102.282 151.292 100.84 151.7C100.18 151.33 97.9904 151.18 96.3704 149.61C94.3704 147.61 94.2104 152.29 96.7604 153.39C89.9404 157.12 88.4004 162.7 90.3804 162.49C90.8604 162.44 91.2404 161.97 91.5804 161.64C92.1704 161.09 92.7804 160.55 93.3604 159.97C90.5104 165.97 93.4904 167.81 94.3004 164.97C94.8432 163.068 95.878 161.343 97.3004 159.97C95.6004 163.29 97.1004 167.4 98.5604 166.29C99.3804 165.65 99.0804 162.29 101.93 160.7C102.25 160.53 102.59 160.42 102.93 160.26C103.84 161.4 106.82 162.95 110.19 162.94C110.29 163.17 110.3 163.28 110.44 163.37C121.208 169.684 133.091 173.864 145.44 175.68C145.415 178.706 145.08 181.722 144.44 184.68C141.59 186.6 135 188.21 131.53 188.99C118.181 191.961 104.361 192.138 90.9404 189.51C87.8504 188.9 76.4904 186.37 74.6804 184.27C71.2904 180.34 69.7704 176.8 67.2204 172.27C62.1304 163.22 58.5504 151.42 58.4104 141.03C58.2051 132.94 60.3145 124.961 64.4904 118.03C66.4518 115.116 68.5751 112.315 70.8504 109.64C71.0104 109.46 70.7304 109.21 70.5804 109.39C66.7504 113.74 63.4404 117.68 61.1404 123.06C58.3179 129.84 57.1788 137.203 57.8204 144.52C45.4104 146.09 31.3804 143.73 23.7004 132.86C26.9904 131.52 25.9404 124.35 20.3504 125.55C17.8004 115.55 21.8104 100.84 25.0704 91.5497C27.0704 85.8397 29.4304 80.2797 31.9304 74.7597C34.4804 76.0297 42.8604 76.9397 48.2604 76.4197C49.7123 88.2829 50.0137 100.259 49.1604 112.18C49.1604 112.4 49.4904 112.4 49.5304 112.18C49.9637 109.249 50.1909 106.292 50.2104 103.33C54.5204 99.2397 61.9604 95.3297 67.3404 92.7997C66.5904 94.7497 68.5504 97.0497 70.5904 97.0397C74.7904 97.0397 74.8304 91.3097 71.9004 90.7897C77.2081 88.5976 82.6821 86.832 88.2704 85.5097C86.2704 88.1997 84.2704 91.6197 85.7204 95.0197C87.4204 99.0997 93.4404 99.5097 96.9304 93.8397C92.3319 103.495 89.3618 113.845 88.1404 124.47C88.1404 124.71 88.4704 124.79 88.5104 124.55C90.04 113.592 93.29 102.944 98.1404 92.9997C98.1826 95.2184 98.9168 97.3686 100.24 99.1497C105.35 105.87 118.74 100.48 115.59 84.7997C123.057 86.1265 130.239 88.7313 136.82 92.4997C136.102 93.1314 135.641 94.0042 135.523 94.9532C135.405 95.9022 135.639 96.8616 136.18 97.6497C136.456 98.0711 136.813 98.4338 137.229 98.7172C137.646 99.0006 138.114 99.1991 138.607 99.3013C139.1 99.4035 139.609 99.4073 140.104 99.3127C140.598 99.218 141.07 99.0267 141.49 98.7497C141.883 98.4586 142.201 98.0783 142.419 97.6402C142.636 97.2021 142.746 96.7187 142.74 96.2297C153.64 103.83 162.43 114.11 169.43 125.32C174.8 133.92 179.51 144.09 180.29 154.44C180.63 159 180.36 163.79 178.32 167.9V167.92ZM98.9104 158L97.9804 159C93.5704 162 93.9804 166.63 92.9804 165.68C91.7504 164.48 93.8104 159.22 95.6604 157.58C97.2404 156.18 95.4104 156.38 93.9704 158.81L93.8904 158.89C92.7714 159.797 91.7 160.762 90.6804 161.78C88.4404 163.84 91.4004 152.57 105.77 151.5C108.77 154.25 109.55 158.42 110.08 162.33C106 162.33 103.19 159.78 102.82 159.82C100.59 160.08 99.1504 162.6 98.6004 164.54C98.5304 164.78 98.3704 165.84 98.1304 165.92C97.3804 166.18 95.9504 161.4 99.1304 158.31C99.3704 158.07 99.1004 157.81 98.9104 158ZM97.2504 153.12C95.4604 152.58 94.9404 149.54 95.6004 149.68C96.8174 150.762 98.2635 151.555 99.8304 152C98.94 152.287 98.0767 152.651 97.2504 153.09V153.12ZM105.53 150.7C105.25 150.7 111.53 148.91 113.32 148.45C117.16 155.32 117.45 160.45 116.99 166.34L110.91 163.19C110.25 157.49 108.47 152.57 105.53 150.67V150.7Z" fill="purple"/>
            <path d="M43.9403 132.32C45.1803 134.79 50.9403 133.94 50.7503 130.13C50.4903 124.67 41.0503 126.59 43.9403 132.32ZM39.3803 86.2098C39.5303 80.8998 33.1303 81.7198 32.4603 86.9498C32.1103 89.6298 39.2203 91.9298 39.3803 86.2098ZM38.4503 100.49C37.1103 101.78 37.2103 106.09 40.9603 105.99C47.4303 105.83 42.6703 96.4398 38.4503 100.49ZM71.9103 157C73.9103 159.79 78.6003 157.76 77.8103 154.13C76.6903 149 68.6103 152.44 71.9103 157ZM76.3203 113.37C72.2503 113.37 71.7103 118.98 74.6503 120.28C81.6203 123.36 81.9303 113.37 76.3203 113.37ZM102.33 180.79C106.25 183.47 111.33 177 106.93 174.45C102.3 171.74 98.2103 178 102.33 180.79Z" fill="red"/>
            </svg>
            
            <h4>¡Tu opinión importa!</h4>
            <h3 style={{padding:"10px"}}>Queremos saber qué piensas, así que comparte con nosotros tus comentarios y te responderemos pronto.</h3>
2
            <form  id="formSubmit">
              <div className="ctn-input">
              
              <input type="email" name="Email" placeholder="Ingresa tu correo electronico" required/>
              </div>

              <div className="ctn-input">
               
              <textarea type="text" name="Cuestione" placeholder="Ingrese tu pregunta aquí" required></textarea>
              </div>

              <button type="submit" className="btn-primario btn-transition-scale" style={{width: "100%", maxWidth:"256px" , marginTop: "20px"}} >Enviar</button>
            </form>
        </div>
         */}
      </div>

      {/*<!--
      <div className="tecnologias-manejadas">
        <h6>Tecnologías Manejadas</h6>
        <div>
          <!--React icono
          <svg data-testid="geist-icon" height="50" stroke-linejoin="round" viewBox="0 0 16 16" width="50" style="color: currentcolor;"><g clip-path="url(#clip0_872_3183)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 1.93782C4.70129 1.82161 4.99472 1.7858 5.41315 1.91053C5.83298 2.03567 6.33139 2.31073 6.87627 2.73948C7.01136 2.84578 7.14803 2.96052 7.28573 3.08331C6.86217 3.53446 6.44239 4.04358 6.03752 4.60092C5.35243 4.67288 4.70164 4.78186 4.09916 4.92309C4.06167 4.74244 4.03064 4.56671 4.00612 4.39656C3.90725 3.71031 3.91825 3.14114 4.01979 2.71499C4.12099 2.29025 4.29871 2.05404 4.5 1.93782ZM7.49466 1.95361C7.66225 2.08548 7.83092 2.22804 7.99999 2.38067C8.16906 2.22804 8.33773 2.08548 8.50532 1.95361C9.10921 1.47842 9.71982 1.12549 10.3012 0.952202C10.8839 0.778496 11.4838 0.7738 12 1.0718C12.5161 1.3698 12.812 1.89169 12.953 2.48322C13.0936 3.07333 13.0932 3.77858 12.9836 4.53917C12.9532 4.75024 12.9141 4.9676 12.8665 5.19034C13.0832 5.26044 13.291 5.33524 13.489 5.41444C14.2025 5.69983 14.8134 6.05217 15.2542 6.46899C15.696 6.8868 16 7.404 16 8C16 8.596 15.696 9.11319 15.2542 9.53101C14.8134 9.94783 14.2025 10.3002 13.489 10.5856C13.291 10.6648 13.0832 10.7396 12.8665 10.8097C12.9141 11.0324 12.9532 11.2498 12.9837 11.4608C13.0932 12.2214 13.0936 12.9267 12.953 13.5168C12.812 14.1083 12.5161 14.6302 12 14.9282C11.4839 15.2262 10.8839 15.2215 10.3012 15.0478C9.71984 14.8745 9.10923 14.5216 8.50534 14.0464C8.33775 13.9145 8.16906 13.7719 7.99999 13.6193C7.83091 13.7719 7.66223 13.9145 7.49464 14.0464C6.89075 14.5216 6.28014 14.8745 5.69879 15.0478C5.11605 15.2215 4.51613 15.2262 3.99998 14.9282C3.48383 14.6302 3.18794 14.1083 3.047 13.5168C2.9064 12.9267 2.90674 12.2214 3.01632 11.4608C3.04673 11.2498 3.08586 11.0324 3.13351 10.8097C2.91679 10.7395 2.709 10.6648 2.511 10.5856C1.79752 10.3002 1.18658 9.94783 0.745833 9.53101C0.304028 9.11319 0 8.596 0 8C0 7.404 0.304028 6.8868 0.745833 6.46899C1.18658 6.05217 1.79752 5.69983 2.511 5.41444C2.709 5.33524 2.9168 5.26044 3.13352 5.19034C3.08587 4.9676 3.04675 4.75024 3.01634 4.53917C2.90676 3.77858 2.90642 3.07332 3.04702 2.48321C3.18796 1.89169 3.48385 1.3698 4 1.0718C4.51615 0.773798 5.11607 0.778495 5.69881 0.952201C6.28016 1.12549 6.89077 1.47841 7.49466 1.95361ZM7.36747 4.51025C7.57735 4.25194 7.78881 4.00927 7.99999 3.78356C8.21117 4.00927 8.42263 4.25194 8.63251 4.51025C8.42369 4.50346 8.21274 4.5 8 4.5C7.78725 4.5 7.5763 4.50345 7.36747 4.51025ZM8.71425 3.08331C9.13781 3.53447 9.55759 4.04358 9.96246 4.60092C10.6475 4.67288 11.2983 4.78186 11.9008 4.92309C11.9383 4.74244 11.9693 4.56671 11.9939 4.39657C12.0927 3.71031 12.0817 3.14114 11.9802 2.71499C11.879 2.29025 11.7013 2.05404 11.5 1.93782C11.2987 1.82161 11.0053 1.7858 10.5868 1.91053C10.167 2.03568 9.66859 2.31073 9.12371 2.73948C8.98862 2.84578 8.85196 2.96052 8.71425 3.08331ZM8 5.5C8.48433 5.5 8.95638 5.51885 9.41188 5.55456C9.67056 5.93118 9.9229 6.33056 10.1651 6.75C10.4072 7.16944 10.6269 7.58766 10.8237 7.99998C10.6269 8.41232 10.4072 8.83055 10.165 9.25C9.92288 9.66944 9.67053 10.0688 9.41185 10.4454C8.95636 10.4812 8.48432 10.5 8 10.5C7.51567 10.5 7.04363 10.4812 6.58813 10.4454C6.32945 10.0688 6.0771 9.66944 5.83494 9.25C5.59277 8.83055 5.37306 8.41232 5.17624 7.99998C5.37306 7.58765 5.59275 7.16944 5.83492 6.75C6.07708 6.33056 6.32942 5.93118 6.5881 5.55456C7.04361 5.51884 7.51566 5.5 8 5.5ZM11.0311 6.25C11.1375 6.43423 11.2399 6.61864 11.3385 6.80287C11.4572 6.49197 11.5616 6.18752 11.6515 5.89178C11.3505 5.82175 11.0346 5.75996 10.706 5.70736C10.8163 5.8848 10.9247 6.06576 11.0311 6.25ZM11.0311 9.75C11.1374 9.56576 11.2399 9.38133 11.3385 9.19709C11.4572 9.50801 11.5617 9.81246 11.6515 10.1082C11.3505 10.1782 11.0346 10.24 10.7059 10.2926C10.8162 10.1152 10.9247 9.93424 11.0311 9.75ZM11.9249 7.99998C12.2051 8.62927 12.4362 9.24738 12.6151 9.83977C12.7903 9.78191 12.958 9.72092 13.1176 9.65708C13.7614 9.39958 14.2488 9.10547 14.5671 8.80446C14.8843 8.50445 15 8.23243 15 8C15 7.76757 14.8843 7.49555 14.5671 7.19554C14.2488 6.89453 13.7614 6.60042 13.1176 6.34292C12.958 6.27907 12.7903 6.21808 12.6151 6.16022C12.4362 6.7526 12.2051 7.37069 11.9249 7.99998ZM9.96244 11.3991C10.6475 11.3271 11.2983 11.2181 11.9008 11.0769C11.9383 11.2576 11.9694 11.4333 11.9939 11.6034C12.0928 12.2897 12.0817 12.8589 11.9802 13.285C11.879 13.7098 11.7013 13.946 11.5 14.0622C11.2987 14.1784 11.0053 14.2142 10.5868 14.0895C10.167 13.9643 9.66861 13.6893 9.12373 13.2605C8.98863 13.1542 8.85196 13.0395 8.71424 12.9167C9.1378 12.4655 9.55758 11.9564 9.96244 11.3991ZM8.63249 11.4898C8.42262 11.7481 8.21116 11.9907 7.99999 12.2164C7.78881 11.9907 7.57737 11.7481 7.36749 11.4897C7.57631 11.4965 7.78726 11.5 8 11.5C8.21273 11.5 8.42367 11.4965 8.63249 11.4898ZM4.96891 9.75C5.07528 9.93424 5.18375 10.1152 5.29404 10.2926C4.9654 10.24 4.64951 10.1782 4.34844 10.1082C4.43833 9.81246 4.54276 9.508 4.66152 9.19708C4.76005 9.38133 4.86254 9.56575 4.96891 9.75ZM6.03754 11.3991C5.35244 11.3271 4.70163 11.2181 4.09914 11.0769C4.06165 11.2576 4.03062 11.4333 4.0061 11.6034C3.90723 12.2897 3.91823 12.8589 4.01977 13.285C4.12097 13.7098 4.29869 13.946 4.49998 14.0622C4.70127 14.1784 4.9947 14.2142 5.41313 14.0895C5.83296 13.9643 6.33137 13.6893 6.87625 13.2605C7.01135 13.1542 7.14802 13.0395 7.28573 12.9167C6.86217 12.4655 6.4424 11.9564 6.03754 11.3991ZM4.07507 7.99998C3.79484 8.62927 3.56381 9.24737 3.38489 9.83977C3.20969 9.78191 3.042 9.72092 2.88239 9.65708C2.23864 9.39958 1.75123 9.10547 1.43294 8.80446C1.11571 8.50445 1 8.23243 1 8C1 7.76757 1.11571 7.49555 1.43294 7.19554C1.75123 6.89453 2.23864 6.60042 2.88239 6.34292C3.042 6.27907 3.2097 6.21808 3.3849 6.16022C3.56383 6.75261 3.79484 7.37069 4.07507 7.99998ZM4.66152 6.80287C4.54277 6.49197 4.43835 6.18752 4.34846 5.89178C4.64952 5.82175 4.96539 5.75996 5.29402 5.70736C5.18373 5.8848 5.07526 6.06576 4.96889 6.25C4.86253 6.43423 4.76005 6.61864 4.66152 6.80287ZM9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30965 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30965 9.25 8Z" fill="#149ECA"></path>
            </g>
            <defs>
            <clipPath id="clip0_872_3183">
            <rect width="16" height="16" fill="white"></rect>
            </clipPath>
            </defs></svg>
            <!--Angular icono
            <svg data-testid="geist-icon" height="50" stroke-linejoin="round" viewBox="0 0 16 16" width="50" style="color: currentcolor;"><path d="M8 0L0.5 2.656L1.64393 12.504L8 16L14.3561 12.504L15.5 2.656L8 0Z" fill="#DD0031"></path>
              <path d="M8 0V1.776V1.768V9.872V16L14.3561 12.504L15.5 2.656L8 0Z" fill="#C3002F"></path>
              <path d="M8.00003 1.768L3.31152 12.208H5.05964L6.00218 9.872H9.98177L10.9243 12.208H12.6724L8.00003 1.768ZM9.36952 8.432H6.63053L8.00003 5.16L9.36952 8.432Z" fill="white"></path></svg>
        
              <!--Google Clound
              <svg data-testid="geist-icon" height="50" stroke-linejoin="round" viewBox="0 0 16 16" width="50" style="color: currentcolor;"><path d="M10.1529 5.07982H10.6408L12.0316 3.67566L12.0999 3.07951C11.3032 2.36953 10.3404 1.87633 9.30236 1.6465C8.26434 1.41667 7.18543 1.45781 6.16754 1.76601C5.14965 2.07422 4.22638 2.63932 3.48496 3.40794C2.74353 4.17656 2.20842 5.12333 1.93018 6.1588C2.08511 6.09468 2.25675 6.08428 2.41817 6.12924L5.19973 5.66611C5.19973 5.66611 5.34125 5.42962 5.41444 5.4444C6.01044 4.78355 6.8341 4.37769 7.7168 4.30991C8.5995 4.24213 9.47448 4.51756 10.1626 5.07982H10.1529Z" fill="#EA4335" style="fill:#EA4335;fill:color(display-p3 0.9176 0.2627 0.2078);fill-opacity:1;"></path>
                <path d="M14.0128 6.15871C13.6931 4.97017 13.0368 3.90169 12.1243 3.08435L10.1723 5.05509C10.5791 5.39069 10.9052 5.81518 11.1258 6.29653C11.3464 6.77789 11.4559 7.30354 11.446 7.83384V8.18365C11.6741 8.18365 11.9 8.22901 12.1108 8.31716C12.3216 8.4053 12.5131 8.5345 12.6744 8.69737C12.8357 8.86024 12.9637 9.0536 13.051 9.2664C13.1383 9.4792 13.1832 9.70727 13.1832 9.93761C13.1832 10.1679 13.1383 10.396 13.051 10.6088C12.9637 10.8216 12.8357 11.015 12.6744 11.1778C12.5131 11.3407 12.3216 11.4699 12.1108 11.5581C11.9 11.6462 11.6741 11.6916 11.446 11.6916H7.97147L7.625 12.0463V14.1501L7.97147 14.4999H11.446C12.4162 14.5075 13.3631 14.1996 14.1466 13.6218C14.9301 13.044 15.5086 12.2269 15.7965 11.2914C16.0844 10.3559 16.0664 9.35168 15.7451 8.42732C15.4239 7.50296 14.8165 6.70753 14.0128 6.15871Z" fill="#4285F4"></path>
                <path d="M4.49204 14.4798H7.96655V11.6715H4.49204C4.2445 11.6715 3.99986 11.6177 3.77469 11.5139L3.2867 11.6666L1.88616 13.0707L1.76416 13.5634C2.54955 14.1622 3.50789 14.4841 4.49204 14.4798Z" fill="#34A853"></path>
                <path d="M4.49182 5.37027C3.5504 5.37595 2.63423 5.67834 1.8713 6.23523C1.10836 6.79211 0.536746 7.57567 0.236297 8.47646C-0.0641533 9.37726 -0.0784364 10.3503 0.195442 11.2597C0.469321 12.1691 1.01768 12.9694 1.76394 13.5489L3.77935 11.5141C3.52323 11.3972 3.29901 11.2194 3.12593 10.9959C2.95284 10.7723 2.83606 10.5097 2.7856 10.2306C2.73514 9.95144 2.75251 9.66412 2.83622 9.39325C2.91992 9.12238 3.06747 8.87606 3.2662 8.67542C3.46493 8.47478 3.7089 8.32582 3.97719 8.24131C4.24548 8.15679 4.53007 8.13926 4.80654 8.1902C5.08302 8.24115 5.34312 8.35905 5.56454 8.5338C5.78596 8.70855 5.96208 8.93493 6.0778 9.19351L8.09321 7.15872C7.67019 6.60039 7.12498 6.14842 6.50022 5.83816C5.87545 5.5279 5.18807 5.36776 4.49182 5.37027Z" fill="#FBBC05"></path></svg>
           
                <svg data-testid="geist-icon" height="50" stroke-linejoin="round" viewBox="0 0 16 16" width="50" style="color: currentcolor;"><g clip-path="url(#clip0_53_108)">
                  <circle cx="8" cy="8" r="7.375" fill="black" stroke="var(--ds-gray-1000)" strokewidth="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                  <path d="M10.63 11V5" stroke="url(#paint0_linear_53_108r3tj)" strokewidth="1.25" stroke-miterlimit="1.41421"></path>
                  <path fill-rule="evenodd" cliprule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_53_108r3tj)"></path>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_53_108r3tj" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"></stop>
                  <stop offset="0.609375" stop-color="white" stop-opacity="0.57"></stop>
                  <stop offset="0.796875" stop-color="white" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_53_108r3tj" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <clipPath id="clip0_53_108">
                  <rect width="16" height="16" fill="red"></rect>
                  </clipPath>
                  </defs></svg>
    
                  <svg data-testid="geist-icon" height="50" stroke-linejoin="round" viewBox="0 0 16 16" width="50" style="color: currentcolor;"><path d="M7.402 13.8777C9.45763 13.4674 11.1555 13.128 11.175 13.1233L11.2104 13.1148L9.2697 10.507C8.2023 9.07276 7.32898 7.8937 7.32898 7.88691C7.32898 7.87404 9.33293 1.63997 9.3442 1.61779C9.34797 1.61037 10.7117 4.27017 12.65 8.06532C14.4647 11.6184 15.9608 14.5479 15.9747 14.5754L16 14.6253L9.83224 14.6244L3.66449 14.6235L7.402 13.8777ZM0 13.0824C0 13.0787 0.914457 11.2855 2.03212 9.09735L4.06425 5.11896L6.43245 2.87384C7.73497 1.63902 8.80417 0.627201 8.80845 0.625356C8.81274 0.623511 8.79561 0.672228 8.77038 0.733617C8.74515 0.795006 7.58796 3.59893 6.19884 6.96455L3.67317 13.0839L1.83659 13.0865C0.826464 13.0879 0 13.0861 0 13.0824Z" fill="#0089D6"></path></svg>
        
              </div>

            </div>-->*/}
    </section>  



  {/*<!-- Sección Pasos a Seguir 
  <section className="container py-5 mt-5">
    <div className="row">
        <!-- Sección Izquierda 
        <div className="col-md-6 text-center d-flex flex-column align-items-center">
            <h2>Pasos para contratar</h2>
            <h2 className="mb-4">nuestros servicios</h2>
            <img src="./assets/Filling Survey.png" alt="Imagen Contratar" className="img-fluid mb-4">
            <button className="btn btn-primary">
                Empieza ahora
                <span className="ms-2">&rarr;</span>
            </button>
        </div>
      -->
        <!-- Sección Derecha 
        <div className="col-md-6 pt-5">
            <article className="d-flex mb-4 ">
                <img src="./assets/1.png" alt="Contacto" className="me-3">
                <div>
                    <h5>Contáctenos</h5>
                    <p className="m-0">Llene nuestro formulario en línea o escríbenos directamente. Cuéntanos sobre tu proyecto, necesidades y objetivo.</p>
                </div>
            </article>
            <article className="d-flex mb-4">
                <img src="./assets/2.png" alt="Reunión Inicial" className="me-3">
                <div>
                    <h5>Reunión Inicial</h5>
                    <p className="m-0">Agenda una reunión gratuita para discutir los detalles del proyecto. Analizamos tus ideas y te ofrecemos recomendaciones personalizadas.</p>
                </div>
            </article>
            <article className="d-flex mb-4">
                <img src="./assets/3.png" alt="Propuesta y Cotización" className="me-3">
                <div>
                    <h5>Propuesta y Cotización</h5>
                    <p className="m-0">Te enviamos una propuesta detallada con los servicios y costos adaptados a tu proyecto. Incluye tiempos estimados, entregables y condiciones.</p>
                </div>
            </article>
            <article className="d-flex mb-4">
                <img src="./assets/4.png" alt="Firma del contrato" className="me-3">
                <div>
                    <h5>Firma del contrato</h5>
                    <p className="m-0">Formalizamos el acuerdo con un contrato claro y transparente. Comienza el desarrollo de tu proyecto con total confianza.</p>
                </div>
            </article>
            <article className="d-flex mb-4">
                <img src="./assets/5.png" alt="Desarrollo del Proyecto" className="me-3">
                <div>
                    <h5>Desarrollo del Proyecto</h5>
                    <p className="m-0">Diseñamos y desarrollamos siguiendo tus requerimientos. Mantenemos comunicación constante para asegurar que cumplimos con tus expectativas.</p>
                </div>
            </article>
            <article className="d-flex">
                <img src="./assets/6.png" alt="Revisión y entrega final" className="me-3">
                <div>
                    <h5>Revisión y entrega final</h5>
                    <p className="m-0">Revisamos juntos el proyecto y realizamos ajustes si es necesario. Entregamos el producto final listo para su lanzamiento.</p>
                </div>
            </article>
        </div>
    </div>

  </section> -->*/}
  </>
  )
}
