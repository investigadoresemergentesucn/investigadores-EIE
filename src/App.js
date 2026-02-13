//React
import { useEffect, useRef, useState } from 'react';

//Logo EIE
import eieLogoRmBG from './eie-logo-removebg.png';
//CSS config
import './App.css';
//Logos sponsors
import LogoCienciasBasicas from './sponsors/logocienciasbasicas.png';
import LogoUCN from './sponsors/Escudo-UCN-Logo.png'
import LogoLithium from './sponsors/lithium.png'
import logoFISICA from './sponsors/logoFISICA.png'
import logoUCNLSA from './sponsors/logoUCNLSA.png'
import logoUCNQF from './sponsors/logoUCNQF.jpeg'
import logoIA from './sponsors/logoIA.png'

// Plenary speakers photos
import eduardoPlen from './plenaristas/eduardo.jpg';
import carlaPlen from './plenaristas/carla.jpeg';
import jonathanPlen from './plenaristas/jonathan.png';
import waiPlen from './plenaristas/wai.jpg';

//video
import salasKVideo from './videos/salasK.mp4';


// committee photos
import macarenaImg from './comite/macarena.jpeg';
import ricardoImg from './comite/ricardo.jpeg';
import victoriaImg from './comite/victoria.jpg';
import cesarImg from './responsables/cesarbonilla.jpg';
import luisImg from './responsables/luisrojas.jpeg';
import bayronImg from './comite/Bayron.jpg';
import dianiImg from './comite/Diany.JPG';
import lucasImg from './comite/Lucas H.jpeg';
import tatianaImg from './comite/tatiana.JPG';
import luisGImg from './comite/Luis.jpeg';
import andresImg from './comite/Andres.jpg';
import pabloImg from './comite/pablo.jpg';

import './App.css';


// Pictures of the event
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Gallery


function EventCarousel() {
  const images = require.context("./gallery", false, /\.jpg$/);

  const photos = Array.from({ length: 28 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: images(`./${n}.jpg`),
      alt: `EIE 2026 - Foto ${i + 1}`,
    };
  });

  return (
    <div className="carouselWrap">
<Swiper
  modules={[Navigation, Pagination, Autoplay, EffectFade]}
  slidesPerView={1}
  spaceBetween={0}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
  loop
  effect="fade"
  speed={650}
>


        {photos.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="carouselSlide">
              <img className="carouselImg" src={p.src} alt={p.alt} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



function App() {
  const videoRef = useRef(null);
const [videoVisible, setVideoVisible] = useState(false);

useEffect(() => {
  const el = videoRef.current;
  if (!el) return;

  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVideoVisible(true);
        obs.disconnect(); // animate once
      }
    },
    { threshold: 0.25 }
  );

  obs.observe(el);
  return () => obs.disconnect();
}, []);

  useEffect(() => {
    // Remove any #section from the URL
    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }

    // Force scroll to top on initial load
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);



  return (
    <div className="App">

      {/* ====================== HEADER ====================== */}
      <header className="App-header">
        <nav className="App-nav">
          <a href="#informacion">Información</a>
          <a href="#fecha">Fecha</a>
          <a href="#programa">Programa</a>
          <a href="#video">Video</a>
          <a href="#plenaristas">Invitados</a>
          <a href="#comite">Comité</a>
          <a href="#contacto">Contacto</a>
        </nav>


        <img 
          src={eieLogoRmBG} 
          className="App-logo"
          alt="Logo EIE" 
        />
        <h1 className="App-title">VIII Encuentro de Investigadores Emergentes</h1>
        <p className="App-subtitle">Facultad de Ciencias — Universidad Católica del Norte</p>
      </header>

      

      {/* ====================== DESCRIPCIÓN ====================== */}
      <section className="App-description">
        <p>
          El <strong>Encuentro de Investigadores Emergentes (EIE)</strong> es una iniciativa 
          organizada por los estudiantes de postgrado de la facultad de Ciencias de la 
          <a href="https://www.ucn.cl/" target="_blank" rel="noreferrer"> Universidad Católica del Norte (UCN)</a>. Su objetivo es promover el intercambio científico entre la comunidad universitaria, particularmente entre los estudiantes de pregrado y postgrado que desarrollan proyectos de investigación, además de fortalecer la interacción interdisciplinaria y visibilizar las lineas de investigación de cada programa dentro de la facultad de Ciencias. 
        </p>

        <p>
          El evento contará con <strong>presentaciones plenarias</strong>, 
          <strong> charlas de jóvenes investigadores</strong> y una sesión de 
          <strong> posters</strong>. Está abierto a toda la comunidad académica 
          y científica interesada en conocer y difundir el trabajo de las nuevas generaciones.
        </p>

        <p>
          ¡Todos son bienvenidos a participar y contribuir al fortalecimiento de la investigación en la Región!
        </p>
        <div className="info-card info-card--wide">
  <h3>✨ Momentos del evento</h3>
  <p>Una galería con algunos momentos del VIII EIE.</p>
  <EventCarousel />
</div>

  {/* Material de fotos del evento */}
<div className="info-card info-card--wide">
  <h3>📸 Material de fotos del evento</h3>
  <p>
    El material de fotos del evento puede ser descargado desde el siguiente enlace:
  </p>

  <div className="info-actions">
    <a
      className="btn btn-red"
      href="https://drive.google.com/drive/folders/1tdyQ3Daz62vJzem4bEs2_mDqD242QNOq?usp=drive_link"
      target="_blank"
      rel="noreferrer"
    >
      Descargar fotos
    </a>
  </div>
</div>

{/* Libro de resúmenes */}
<div className="info-card info-card--wide">
  <h3>📘 Libro de resúmenes del evento</h3>
  <p>
    El libro de resúmenes del evento puede ser descargado desde el siguiente enlace:
  </p>

  <div className="info-actions">
    <a
      className="btn btn-red"
      href="https://drive.google.com/file/d/18q7gCYDFUQWEekLLxreDQ_2tS-xWucwz/view?usp=drive_link"
      target="_blank"
      rel="noreferrer"
    >
      Descargar libro de resúmenes
    </a>
  </div>
</div>


      </section>


      {/* ====================== MAIN ====================== */}
      <main className="App-main">
<section id="fecha" className="App-section App-section--dates">
  <div className="dates-header">
    <span className="dates-header__icon">📅</span>
    <div>
      <h2>Fechas y lugar</h2>
      <p className="dates-header__subtitle">
        UCN · Salas K 121 C, Campus Universitario UCN Avda. Angamos 0610, Antofagasta
      </p>
    </div>
  </div>

  <div className="dates-grid">
    <article className="date-card">
      <span className="date-card__label">Evento</span>
      <p className="date-card__main">6–7 de enero de 2026</p>
      <p className="date-card__extra">Auditorio</p>
    </article>

    <article className="date-card">
      <span className="date-card__label">Envío de resumen</span>
      <p className="date-card__main">17 de diciembre 2025</p>
      <p className="date-card__extra">Hasta las 23:59 (CLT)</p>
    </article>

    <article className="date-card">
      <span className="date-card__label">Aviso de aceptación</span>
      <p className="date-card__main">23 de diciembre 2025</p>
      <p className="date-card__extra">Vía correo electrónico</p>
    </article>
  </div>
</section>

        {/* --- Sección 3: Programa / Timetable --- */}
<section id="programa" className="App-section">
  <h2>🕒 Programa del evento</h2>
  <p>
    El programa oficial (horarios, salas y charlas) está disponible en el siguiente documento:
  </p>

  <div className="info-actions">
    <a
      className="btn outline"
      href="https://drive.google.com/file/d/1bhTQ0m4QomFdeGJdhWhaVVK4cg1NSBrf/view?usp=drive_link"
      target="_blank"
      rel="noreferrer"
    >
      Ver programa (PDF)
    </a>
  </div>
</section>

<section id="video" className="App-section">
  <h2>🎬 Video</h2>
  <p className="Section-intro">
    Video guía de como llegar a las salas K 121 C (UCN).
  </p>

  <div
    ref={videoRef}
    className={`video-card ${videoVisible ? "is-visible" : ""}`}
  >
    <video className="video-native" controls preload="metadata">
      <source src={salasKVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>





<section id="plenaristas" className="App-section">
  <h2>🎤 Invitados a charla plenaria</h2>
  <p className="Section-intro">
    Conoce a los(as) invitados(as) a charla plenaria y los títulos de sus charlas.
  </p>

  <div className="Committee-grid plenary-grid">
    <div className="PersonCard plenary-card">
      <img src={eduardoPlen} alt="Eduardo Unda-Sanzana" className="PersonPhoto plenary-photo" />
      <h3>Dr. Eduardo Unda-Sanzana</h3>
      <p className="plenary-talk"><strong>Título:</strong> La vida, el Universo, y todo lo demás</p>
      <p className="plenary-affil">Universidad de Antofagasta</p>
    </div>

    <div className="PersonCard plenary-card">
      <img src={carlaPlen} alt="Carla ..." className="PersonPhoto plenary-photo" />
      <h3>Dra. Carla Hermann</h3>
      <p className="plenary-talk"><strong>Título:</strong> Bright and Quantum: Toward Intense and Non-Gaussian Quantum Light</p>
      <p className="plenary-affil">Universidad de Chile</p>
    </div>

    <div className="PersonCard plenary-card">
      <img src={jonathanPlen} alt="Jonathan ..." className="PersonPhoto plenary-photo" />
      <h3>Dr. Jonathan Cisterna</h3>
      <p className="plenary-talk"><strong>Título:</strong> Nuevos materiales para almacenamiento de energía</p>
      <p className="plenary-affil">Universidad Católica del Norte</p>
    </div>

    <div className="PersonCard plenary-card">
      <img src={waiPlen} alt="Wai ..." className="PersonPhoto plenary-photo" />
      <h3>Dr. Wai-Houng</h3>
      <p className="plenary-talk"><strong>Título:</strong> Nanomedicina: una oportunidad hacia la individualización de la terapia</p>
      <p className="plenary-affil">Universidad Católica del Norte</p>
    </div>
  </div>
</section>


                {/* --- Sección 4: Información general / FAQ --- */}
<section id="informacion" className="App-section">
  <h2>ℹ️ Información general / FAQ</h2>
  <p className="Section-intro">
    Aquí encontrarás lo esencial para participar: inscripción, envío de resumen,
    formatos de póster, criterios de selección y detalles logísticos.
  </p>






<div className="info-grid">
  {/* Inscripción */}
  <div className="info-card info-card--wide">
    <h3>Inscripción</h3>

    <p>La inscripción se realizará a través del siguiente enlace:</p>

    <div className="info-actions">
      <a
        className="btn outline"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdFztHRv2FsyHQy_QtwZHNG4HPqPF8-vfaVhpbaWCh58HOTYQ/viewform?usp=header">
        Formulario de Inscripción
      </a>
    </div>

    <p>
      Completa tus datos y modalidad (<strong>charla</strong> o <strong>poster</strong>).
    </p>

    <ul>
      <li>
        Recomendado: adjuntar el aval de tu director(a) si tu trabajo aún no está
        publicado.
      </li>
{/*      <li>
        Al confirmar tu inscripción recibirás un <strong>QR</strong> para el acceso
        el día del evento.
      </li> */}
    </ul>
  </div>

    {/* Resumen (abstract) */}
    <div className="info-card">
      <h3>Resumen (abstract)</h3>
      <ul>
        <li>Extensión sugerida: 1 pagina (máx. 1 figura opcional).</li>
        <li>Archivo: .PDF con nombre <code>Nombre_Apellido_Area.pdf</code></li>
      </ul>
           <div className="info-actions">
  <a className="btn outline" href="https://drive.google.com/drive/folders/186Y5UYYzaImcDYplM_p4Sz-DhRBZUece?usp=sharing" target="_blank" rel="noreferrer">Formato de Resumen</a>
</div>
    </div>

{/* Imágenes que se deben colocar en los pósters y presentaciones */}
<div className="info-card">
  <h3>Logos oficiales</h3>
  <p>
    Descarga el logo oficial del Encuentro y la barra de auspiciadores para usarlos en tus pósters
    y presentaciones.
  </p>
  <div className="info-actions">
    <a
      className="btn outline"
      href="https://drive.google.com/drive/u/2/folders/11Lmlvi9CRkvtegbmGrgREhgFIoXj7pvm"
    >
      Descargar logos
    </a>
  </div>




</div>




    {/* Posters: dimensiones (por confirmar) */}
    <div className="info-card info-card--wide">
      <h3>Posters — dimensiones y formato</h3>
      <p>Sugerencia base para que puedas diseñar desde ya:</p>
<div className="App-tableWrapper">
  <table className="App-table">
    <thead>
      <tr>
        <th>Tamaño</th>
        <th>Orientación</th>
        <th>Formato</th>
        <th>Impresión</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A0 (841 × 1189 mm)</td>
        <td>Vertical</td>
        <td>Alta resolución</td>
        <td>Color</td>
      </tr>
    </tbody>
  </table>
</div>

      <ul>
        <li>Incluir logo del evento, auspiciadores y tu programa/centro (si corresponde).</li>
      </ul>
    </div>

    {/* Modalidades y tiempos */}
    <div className="info-card">
      <h3>Modalidades y tiempos</h3>
      <ul>
        <li><strong>Charlas</strong>: 15 min + 5 min preguntas.</li>
        <li><strong>Posters</strong>: sesión interactiva.</li>
        <li><strong>Plenarias</strong>: 30 min + 10 min preguntas.</li>
      </ul>
    </div>

{/* Logística rápida */}
<div className="info-card">
  <h3>Logística rápida</h3>
  <ul>
    <li>Registro con <strong>QR</strong> el día del evento.</li>
    <li><strong>Código de conducta:</strong> respeto, inclusión y trato profesional en todas las actividades.</li>
<li>
  <strong>Seguridad:</strong> antes del evento, revisa el{" "}
  <a
    href="http://recursoshumanos.ucn.cl/wp-content//uploads/2019/04/Procedimiento-emergencia.pdf"
    className="App-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    PROCEDIMIENTO ESTRUCTURAL CRISIS Y EMERGENCIAS
  </a>
  , el plan oficial de gestión de riesgos de la UCN.
</li>
  </ul>
</div>
  </div>
</section>



<section id="comite" className="App-section">
  <h2>👥 Comité organizador</h2>

  {/* President on top, centered */}
  <div className="Committee-president">
    <div className="PersonCard PersonCard--president">
      <img src={victoriaImg} alt="Victoria Acosta" />
  <h3>Victoria Acosta</h3>
  <p>Doctorado en Física</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Finanzas</span>
    <span className="CommitteeTag">Logística</span>
  </p>
  <p className="PersonRole">
    <strong>Presidenta del comité organizador</strong>
  </p>
    </div>
  </div>

  

  <h3>Equipo de comité</h3>

  {/* Grid for the rest of the student committee */}
  <div className="Committee-grid">
<div className="PersonCard">
  <img src={macarenaImg} alt="Macarena López" className="PersonPhoto" />
  <h3>Macarena López</h3>
  <p>Magíster en Física</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Comunicación</span>
    <span className="CommitteeTag">Finanzas</span>
  </p>
  <p className="PersonRole"><strong>Representante de Finanzas</strong></p>
</div>


<div className="PersonCard">
  <img src={luisGImg} alt="Luis Miguel Galvis" className="PersonPhoto" />
  <h3>Luis Miguel Galvis</h3>
  <p>Magíster en Física</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Finanzas</span>
  </p>
</div>

<div className="PersonCard">
  <img src={dianiImg} alt="Diany Reyes" className="PersonPhoto" />
  <h3>Diany Reyes</h3>
  <p>Magíster en Química</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Logística</span>
  </p>
</div>

<div className="PersonCard">
  <img src={lucasImg} alt="Lucas Humanez" className="PersonPhoto" />
  <h3>Lucas Humanez</h3>
  <p>Magíster en Química</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Logística</span>
    <span className="CommitteeTag">Científico</span>
  </p>
  <p className="PersonRole">
    <strong>Representante de Logística</strong>
  </p>
</div>

<div className="PersonCard">
  <img src={tatianaImg} alt="Tatiana Araya" className="PersonPhoto" />
  <h3>Tatiana Araya</h3>
  <p>Doctorado en Física</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Comunicación</span>
    <span className="CommitteeTag">Logística</span>
  </p>
    <p className="PersonRole">
    <strong>Representante de Comunicación</strong>
  </p>
</div>

<div className="PersonCard">
  <img src={pabloImg} alt="Pablo Garrido" className="PersonPhoto" />
  <h3>Pablo Garrido</h3>
  <p>Magíster en Química</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Científico</span>
  </p>
</div>

<div className="PersonCard">
  <img src={bayronImg} alt="Bayron Micolta" className="PersonPhoto" />
  <h3>Bayron Micolta</h3>
  <p>Doctorado en Física</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Comunicación</span>
  </p>
</div>

<div className="PersonCard">
  <img src={andresImg} alt="Andrés Layana" className="PersonPhoto" />
  <h3>Andrés Layana</h3>
  <p>Doctorado en Física</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Logística</span>
    <span className="CommitteeTag">Científico</span>
  </p>
  <p className="PersonRole">
    <strong>Representante de Científico</strong>
  </p>
</div>

<div className="PersonCard">
  <img src={ricardoImg} alt="Ricardo Zamora" className="PersonPhoto" />
  <h3>Ricardo Zamora</h3>
  <p>Magíster en Física</p>
  <p className="PersonCommittees">
    <span className="CommitteeTag">Comunicación</span>
    <span className="CommitteeTag">Científico</span>
  </p>
</div>
  </div>

    <h3>Responsables académicos</h3>

    <div className="Committee-grid">

    <div className="PersonCard">
      <img src={cesarImg} alt="César Bonilla" />
      <h4>Dr. César Bonilla</h4>
      
      <a href="mailto:cesar.bonilla@ucn.cl">cesar.bonilla@ucn.cl</a> {/*. */}{" "}
       {/* <a href="tel:+56941029491">+56 9 4102 9491</a> */}
    </div>

    <div className="PersonCard">
      <img src={luisImg} alt="Luis Rojas" />
      <h4>Dr. Luis Rojas</h4>
      <a href="mailto:l.rojas@ucn.cl">l.rojas@ucn.cl</a> {/*.*/}{" "}
       {/* <a href="tel:+56934400287">+56 9 3440 0287</a> */}
    </div>

    </div>

</section>


        <section id="contacto" className="App-section">
          <h2>✉️ Contacto</h2>
          <br />
          <a href="mailto:investigadores.emergentes.ucn@gmail.com">investigadores.emergentes.ucn@gmail.com</a>
        </section>


<section id="Patrocinadores" className="App-section">
  <h2> Patrocinadores</h2>
  <br />

  <div className="Committee-grid">
    <div className="PersonCard">
      <img
        src={LogoUCN}
        alt="Universidad Católica del Norte"
        className="PersonPhoto sponsor-circle"
      />
      <h3>Universidad Católica del Norte</h3>
    </div>

    <div className="PersonCard">
      <img
        src={LogoCienciasBasicas}
        alt="Facultad de Ciencias"
        className="PersonPhoto sponsor-circle"
      />
      <h3>Facultad de Ciencias - UCN</h3>
    </div>

  </div>
</section>

<section id="sponsors" className="App-section">
  <h2>Sponsors</h2>



<div className="Committee-grid">

    <div className="PersonCard">
    <img
      src={logoFISICA}
      alt="Departamento de Física – UCN"
      className="sponsor-circle"
    />
    <h3>Departamento de Física – UCN</h3>
  </div>

      <div className="PersonCard">
    <img
      src={logoIA}
      alt="Instituto de Astronomía – UCN"
      className="sponsor-rect"
    />
    <h3>Instituto de Astronomía – UCN</h3>
  </div>

    <div className="PersonCard">
    <img
      src={logoUCNQF}
      alt="Química y Farmacia – UCN"
      className="sponsor-circle"
    />
    <h3>Química y Farmacia – UCN</h3>
  </div>

  <div className="PersonCard">
    <img
      src={LogoLithium}
      alt="Lithium I+D+i - UCN"
      className="sponsor-rect"
    />
    <h3>Lithium I+D+i – UCN</h3>
  </div>



  <div className="PersonCard">
    <img
      src={logoUCNLSA}
      alt="Laboratorio de Servicios Analíticos (UCN-LSA)"
      className="sponsor-rect"
    />
    <h3>Laboratorio de Servicios Analíticos - UCN</h3>
  </div>


</div>

</section>


      </main>

      {/* ====================== FOOTER ====================== */}
{/* ====================== FOOTER ====================== */}
<footer className="eieF">
  <div className="eieF__inner">
    {/* Left: logos */}
    <div className="eieF__logos" aria-label="Instituciones">
      {/* Use your already imported logos instead of require() */}
      <img
        src={LogoUCN}
        alt="Universidad Católica del Norte"
        className="eieF__logo eieF__logo--ucn"
        loading="lazy"
      />
      <img
        src={LogoCienciasBasicas}
        alt="Facultad de Ciencias - UCN"
        className="eieF__logo eieF__logo--fac"
        loading="lazy"
      />
    </div>

    {/* Center: text */}
    <div className="eieF__center">
      <p className="eieF__title">Investigadores Emergentes UCN</p>
      <p className="eieF__meta">
        © {new Date().getFullYear()} · Facultad de Ciencias — Universidad Católica del Norte
      </p>
    </div>

    {/* Right: social */}
    <div className="eieF__social" aria-label="Social links">
      <a
        className="eieF__iconLink"
        href="https://www.linkedin.com/in/ricardo-zamora-80b714193/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn de Ricardo Zamora"
        title="LinkedIn"
      >
        {/* LinkedIn icon (inline SVG) */}
        <svg viewBox="0 0 24 24" className="eieF__icon" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.267 2.369 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
        </svg>
        <span className="eieF__iconText">LinkedIn</span>
      </a>

      <a
        className="eieF__iconLink"
        href="https://github.com/ricardozamora99"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub de Ricardo Zamora"
        title="GitHub"
      >
        {/* GitHub icon (inline SVG) */}
        <svg viewBox="0 0 24 24" className="eieF__icon" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 15.07 3.633 14.7 3.633 14.7c-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.49 11.49 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
        </svg>
        <span className="eieF__iconText">GitHub</span>
      </a>
    </div>
  </div>

  {/* Bottom slim line */}
  <div className="eieF__bottom">
    <p className="eieF__bottomText">
      Sitio web desarrollado por Ricardo Zamora · {" "}
      <a
        className="eieF__bottomLink"
        href="https://www.linkedin.com/in/ricardo-zamora-80b714193/"
        target="_blank"
        rel="noreferrer"
      >
        contacto
      </a>
    </p>
  </div>
</footer>


    </div>
  );
}

export default App;
