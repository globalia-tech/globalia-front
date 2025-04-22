import { useState, useEffect } from "react";
import "./style/desarrolloweb.css";

export default function DesarrolloWeb() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeHover, setActiveHover] = useState(null);
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleImageClick = (index) => {
    if (window.innerWidth <= 768) {
      setActiveHover(activeHover === index ? null : index);
    }
  };

  return (
    <>
      <section
        className="desarrollo-hero"
        style={{ height: "729px", position: "relative" }}
      >
        <div className="hero-background" style={{ height: "100%" }}>
          <img
            src="src\assets\desarrollo-web.png"
            className="d-block w-100 h-100"
            alt="Desarrollo Web GlobaliaTech"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="hero-text-servicios">
          <h1>Nuestros servicios en Desarrollo Web</h1>
          <h2>
            Creamos experiencias digitales únicas adaptadas a tus necesidades
          </h2>
        </div>
      </section>

      <section className="descripcion-seccion">
        <div className="descripcion-contenedor">
          <h2>¿Qué es un sitio web, una web app y una sección?</h2>
          <p>
            La diferencia principal entre un sitio web y una aplicación web es
            su nivel de interacción. Un sitio web suele ser estático y está
            diseñado para mostrar información, como datos de contacto, productos
            o servicios. <br />
            En cambio, una aplicación web es dinámica e interactiva, permitiendo
            acciones como comprar en línea, consultar el saldo de una cuenta
            bancaria o buscar y filtrar productos. <br />
            Por otro lado, las secciones en un sitio o aplicación web agrupan
            contenido relacionado y cumplen una función tanto en el diseño como
            en la organización de la información, ayudando a que la experiencia
            del usuario sea más clara y ordenada. <br />
            Queremos compartir esta información contigo para que conozcas todas
            las opciones que tenemos para ti.
          </p>
        </div>
      </section>

      <section className="plantillas-seccion">
        <div className="plantillas-contenedor">
          <h2>Diseñemos juntos desde plantillas pre-realizadas</h2>
          <div className="plantillas-galeria desktop-view">
            <div className="fila-superior">
              <div className="plantilla-item">
                <img src="src\assets\plantilla01.png" alt="Plantilla web 1" />
              </div>
              <div className="plantilla-item">
                <img src="src\assets\plantilla02.png" alt="Plantilla web 2" />
              </div>
              <div className="plantilla-item">
                <img src="src\assets\plantilla03.png" alt="Plantilla web 3" />
              </div>
            </div>
            <div className="fila-inferior">
              <div className="plantilla-item">
                <img src="src\assets\plantilla04.png" alt="Plantilla web 4" />
              </div>
              <div className="plantilla-item">
                <img src="src\assets\plantilla05.png" alt="Plantilla web 5" />
              </div>
            </div>
          </div>

          <div className="plantillas-galeria mobile-view">
            <div
              className="plantillas-slider-mobile"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="plantilla-item-mobile">
                <img src="src\assets\plantilla01.png" alt="Plantilla web 1" />
              </div>
              <div className="plantilla-item-mobile">
                <img src="src\assets\plantilla02.png" alt="Plantilla web 2" />
              </div>
              <div className="plantilla-item-mobile">
                <img src="src\assets\plantilla03.png" alt="Plantilla web 3" />
              </div>
              <div className="plantilla-item-mobile">
                <img src="src\assets\plantilla04.png" alt="Plantilla web 4" />
              </div>
              <div className="plantilla-item-mobile">
                <img src="src\assets\plantilla05.png" alt="Plantilla web 5" />
              </div>
            </div>
            <div className="slider-controls">
              {[...Array(totalSlides)].map((_, index) => (
                <span
                  key={index}
                  className={`slider-dot ${
                    currentSlide === index ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="titulo-boton-contenedor">
            <h3>
              Cuando nos contrates te mostraremos más plantillas para que elijas
            </h3>
            <button className="btn-primario btn-transition-scale">
              Quiero saber más
            </button>
          </div>
        </div>
      </section>

      <section className="descripcion-adicional-seccion">
        <div className="descripcion-adicional-contenedor">
          <div className="info-adicional-contenedor">
            <h2>Imagina tu producto y lo diseñamos juntos (personalizado)</h2>
            <p>
              Cuando diseñamos de manera personalizada, tenemos en cuenta tus
              necesidades, incluyendo el contenido, diseño y varios aspectos
              más. Creamos juntos desde cero, sin usar plantillas prediseñadas.
              Por ello, el resultado final será único, diferenciándolo de tu
              competencia y mejorando la experiencia de las personas usuarias
              para que fortalezcas las relaciones con tu público y clientela.
            </p>
          </div>
        </div>
      </section>

      <section className="custom-design-seccion">
        <div className="custom-design-contenedor">
          <div className="custom-design-galeria">
            <div className="design-item">
              <img
                src="src\assets\customdesign01.png"
                alt="Diseño personalizado 1"
              />
            </div>
            <div className="design-item">
              <img
                src="src\assets\customdesign02.png"
                alt="Diseño personalizado 2"
                onClick={() => handleImageClick(1)}
              />
              <div
                className={`hover-content hover-right ${
                  activeHover === 1 ? "active" : ""
                }`}
              >
                <p>
                  Foredu es una app dedicada a la educación permitiendo
                  administrar de manera fácil y ágil las actividades escolares
                  de las personas que estudian
                </p>
              </div>
            </div>
            <div className="design-item">
              <img
                src="src\assets\customdesign03.png"
                alt="Diseño personalizado 3"
                onClick={() => handleImageClick(2)}
              />
              <div
                className={`hover-content hover-left ${
                  activeHover === 2 ? "active" : ""
                }`}
              >
                <p>
                  Petopia es una web app que permite generar un QR para la
                  identificación de la mascota, además de tener una historia de
                  salud, recordatorios de vacunaciones y visitas con veterinario
                </p>
              </div>
            </div>
            <div className="design-item">
              <img
                src="src\assets\customdesign04.png"
                alt="Diseño personalizado 4"
              />
            </div>
          </div>
        </div>
        <div className="titulo-boton-contenedor">
          <button className="btn-primario btn-transition-scale">
            Quiero saber más
          </button>
        </div>
      </section>
      <section className="descripcion-final-seccion">
        <div className="descripcion-final-contenedor">
          <p>
            Globalia Tech ofrece una amplia gama de servicios tecnológicos
            diseñados para ayudarte a alcanzar tus objetivos de negocio con
            soluciones innovadoras y personalizadas
          </p>
        </div>
      </section>

      <section className="soporte-seccion">
        <div className="soporte-contenedor">
          <h2>SOPORTE GLOBALIA TECH</h2>
          <p>
            Si ya eres nuestro cliente, puedes comunicarte con nosotros por
            cualquier duda o inconveniente, a la brevedad te estaremos
            respondiendo.
            <br /> <br />
            Nuestro mail:
            <br />
            <a href="mailto:info@globalia-tech.com">info@globalia-tech.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
