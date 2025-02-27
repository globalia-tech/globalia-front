import { useEffect } from 'react';
import './style/contacto.css';
export default function Contactos() {

    const Submit = (event) => {
       event.preventDefault();
       const formDate = new FormData(event.target)
       const date = Object.fromEntries(formDate.entries())
       console.log(date);

       try{
    
        fetch('https://script.google.com/macros/s/AKfycbxduCLmtJXsyNmeZgu6uA27zBykzc9K7zDyP8nb1XFdQz1x2sIKzN4tJKHhSYmcS_OuFw/exec',{
            method: 'POST',
            
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               Nombre: date.Nombre,
               Negocio: date.Negocio,
               Telefono: date.codigo + date.NumeroTelefonico,
               Email: date.Email,
               Motivo: date.Motivo}
            )
        })
        .then( e => {
            if(e.ok){
                console.log( 'Datos enviados correctamente')
                 console.log(e.json())

            } else{
                console.error('Datos no Enviados', e.status)
                
            }

        })
    }catch{
        throw new Error("Error al hacer la solicitud")
    }
    }
  return (
    <>
      <div className="carousel-inner" style={{height: "100vh"}}>
            <div className="carousel-item active" style={{height: "100%"}}>
                <img src="../assets/Medida frame Hero distintas secciones Desktop.jpg" className="d-block w-100"
                  alt="Imagen 1"/>
            </div>
            
        </div>
     
        <div className="hero-text-contacto" style={{backgroundColor: "transparent"}}>
            <h1>Conectate con GlobaliaTech</h1>
            <p>Hablemos de tu próximo proyecto. <br/>Desde el concepto hasta la implementación, estamos contigo en cada paso.</p>
        </div>
    

    <p style={{fontSize: "24px", lineHeight: "32px", fontWeight: "600", maxWidth:" max-content",
     backgroundColor: "rgba(46, 132, 235, 0.2)", padding: "24px", borderRadius: "10px",
      boxShadow: "0 8px 8px rgba(0, 0, 0, 0.25)", margin: "10px auto", marginTop:" 70px"}}>
      Atención al cliente de Lunes a Viernes de 9 a 19 hs
    </p>
    <section className="container py-5">
        <section className="row justify-content-center">
            
                <div className="card " style={{background:`url("../assets/Frame4343.jpg")`, 
                  padding: "18px", width: "100%", maxWidth: "953px", margin: "0" }}>
                    <div className="card-body" style={{backgroundColor: "white", borderRadius: "15px", padding:"15px"}}>
                        <h2 className="text-center mb-6">Solicita una Consulta Gratuita</h2>
                        <h3 style={{textAlign: "center" ,fontWeight:"600" ,marginBottom: "25px"}}>Todas tus dudas te las responderemos a la brevedad</h3>
                        <form id="formContacto" onSubmit={Submit} style={{display: "flex", flexDirection: "column", gap: "27px"}}>
                            <div className="row mb-3 ">
                                <div className="col">
                                  
                                    <input type="text" className="form-control" name="Nombre" id="nombre" placeholder="Ingresa tu nombre" required/>
                                </div>
                                <div className="col">
                                  
                                    <input type="text" className="form-control" name="Negocio" id="marca" placeholder="Tu marca/Negocio" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col">
                                <select  className="form-control" name="codigo">
                                  <option>Seleccione el codigo</option>
                                  <option>+15</option>
                                  <option>+591</option>
                                </select>
                                 </div>
                                <div className="col">
                                    
                                    <input type="number" name="NumeroTelefonico" className="form-control" id="telefono" placeholder="Ingresa tu número de whatsapp" required/>
                                    <label htmlFor="telefono" className="form-label" style={{fontWeight: "600", fontSize: "14px"}}>Código de área(sin 0) + Número (sin 15)</label>
                                </div>
                                <div className="col">
                                    
                                    <input type="email" name="Email" className="form-control" id="correo" placeholder="Ingresa tu correo electrónico" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                              <select className="form-control" >
                                <option>Que tipo de servicio necesitas?</option>
                                <option>Desarrollo web</option>
                                <option>Social Media</option>
                                
                              </select>
                              <br/>
                                <textarea className="form-control" name="Motivo" style={{height: "168px"}} id="motivo" rows="3" placeholder="Escribe el motivo de tu contacto" required></textarea>
                            </div>
                            <button type="submit" className=" btn-primario btn-transition-scale" style={{width:"100%", maxWidth:"716px", margin: "0 auto"}}>Enviar Mensaje</button>
                        </form>
                        <p className="mt-4 text-center text-muted">Cuentanos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos.</p>
                    </div>
                </div>
            
        </section>
    </section>
{/*
  <!--  <div className="container">
      <div className="row">
        <!-- Card 1: Icono de llamada 
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="card2">
            <div className="icon-title">
              <i className="fas fa-phone-alt"></i>
              <h2>Contacto Telefónico</h2>
            </div>
            <p>Llame para asistencia inmediata o más detalles.</p>
          </div>
        </div>
        <!-- Card 2: Icono de correo 
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="card2">
            <div className="icon-title">
              <i className="fas fa-envelope"></i>
              <h2>Correo Electrónico</h2>
            </div>
            <p>Envíanos un correo y te responderemos a la brevedad.</p>
          </div>
        </div>
        <!-- Card 3: Icono de ubicación 
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="card2">
            <div className="icon-title">
              <i className="fas fa-map-marker-alt"></i>
              <h2>Argentina <br> Colombia <br> Peru</h2>
            </div>
            <p>Visítanos en nuestra dirección física.</p>
          </div>
        </div>
      </div>
    </div>
  --->
    <!--- <div className="container2 social-section">     
       <div>            
          <h2>Redes Sociales</h2>
                  <div className="social-icons d-flex justify-content-center">
                      <a href="https://www.instagram.com" target="_blank" className="fab fa-instagram" aria-label="Instagram"></a>
                      <a href="https://www.facebook.com" target="_blank" className="fab fa-facebook" aria-label="Facebook"></a>
                      <a href="https://www.twitter.com" target="_blank" className="fab fa-twitter" aria-label="X (Twitter)"></a>
                  </div>
      </div>
    </div> -->*/}
    </>
  )
}
