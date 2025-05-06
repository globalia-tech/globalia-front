import "./style/socialmedia.css";
import imagenSocialMedia from "../assets/social-media.png";
import imagenSocialMediaMobile from "../assets/social-media-mobile.png";
import imagenCommunityManager from "../assets/community-manager-service.png";
import imagenRedesVideo01 from "../assets/redes-video01.mp4"; 
import imagenRedesImg01 from "../assets/redes-img01.jpg";

export default function SocialMedia() {
  return (
    <>
      <section className="social-hero">
        <div className="hero-background">
          <img
            src={imagenSocialMedia}
            className="hero-image-desktop"
            alt="Social Media GlobaliaTech"
          />
          <img
            src={imagenSocialMediaMobile}
            className="hero-image-mobile"
            alt="Social Media GlobaliaTech Mobile"
          />
        </div>

        <div className="hero-text-social">
          <h1>Nuestros servicios en Redes Sociales</h1>
          <h2>
            Facilitamos que las personas usuarias conozcan tu marca a través de
            las redes sociales y logren su fidelización
          </h2>
        </div>
      </section>

      <section className="community-manager-seccion">
        <div className="community-manager-contenedor">
          <h2>Social Media</h2>
          <div className="subtitulo-container">
            <h3>
              Servicios de Community <span>Manager</span>
            </h3>
          </div>
          <p>
            Gestionamos la presencia online de tu marca a través de diferentes
            canales, trazando estrategias de acuerdo a los delineamientos de la
            misma. Además, te ayudamos a definir la identidad corporativa,
            marcar los objetivos, elegir las redes sociales, establecer pautas,
            crear una imagen de tu marca y más
          </p>
        </div>
      </section>

      <section className="cta-seccion">
        <div className="cta-contenedor">
          <div className="cta-imagen-contenedor">
            <img
              src={imagenCommunityManager}
              alt="Call to action social media"
            />
            <button className="btn-primario btn-transition-scale">
              Quiero saber más
            </button>
          </div>
        </div>
      </section>

      <section className="creacion-imagenes-seccion">
        <div className="creacion-imagenes-contenedor">
          <div className="subtitulo-container">
            <h3>
              Creación de <span>imágenes y videos</span> publicitarios para{" "}
              <span>Redes Sociales</span>
            </h3>
          </div>
          <p>
            Generamos ideas para el contenido de tus redes sociales y lo
            desarrollamos para establecer vínculos y relaciones con tu audiencia
          </p>
        </div>
      </section>

      <section className="cta-seccion videos-cta">
        <div className="cta-contenedor">
          <div className="videos-contenedor">
            <div className="videos-wrapper">
              <video className="video-item" controls muted loop playsInline>
                <source src={imagenRedesVideo01} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <img
                className="video-item"
                src={imagenRedesImg01}
                alt="Call to action social media"
              />
            </div>
            <button className="btn-primario btn-transition-scale">
              Quiero saber más
            </button>
          </div>
        </div>
      </section>
      <section className="separador-seccion"></section>
    </>
  );
}
