//React
import { useEffect } from 'react';
//Logo EIE
import eieLogoRmBG from './eie-logo-removebg.png';
//CSS config
import './App.css';

// committee photos
import defaultPhoto from './comite/logo.png';
import macarenaImg from './comite/macarena.jpeg';
import ricardoImg from './comite/ricardo.jpeg';
import victoriaImg from './comite/victoria.jpeg';
import cesarImg from './responsables/cesarbonilla.jpg';
import luisImg from './responsables/luisrojas.jpeg';
import bayronImg from './comite/Bayron.jpg';
import dianiImg from './comite/Diany.JPG';
import lucasImg from './comite/Lucas H.jpeg';
import tatianaImg from './comite/tatiana.JPG';
import luisGImg from './comite/Luis.jpeg';

import './App.css';

function App() {
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
          <a href="#programa">Programa</a>
          <a href="#fecha">Fecha</a>
          <a href="#comite">Comité</a>
          <a href="#contacto">Contacto</a>
        </nav>


        <img 
          src={eieLogoRmBG} 
          className="App-logo"
          alt="Logo EIE" 
        />
        <h1 className="App-title">Encuentro de Investigadores Emergentes</h1>
        <p className="App-subtitle">Facultad de Ciencias — Universidad Católica del Norte</p>
      </header>

      

      {/* ====================== DESCRIPCIÓN ====================== */}
      <section className="App-description">
        <p>
          El <strong>Encuentro de Investigadores Emergentes (EIE)</strong> es una iniciativa 
          organizada por estudiantes de postgrado de la 
          <a href="https://www.ucn.cl/" target="_blank" rel="noreferrer"> Universidad Católica del Norte (UCN)</a>,
          Facultad de Ciencias Básicas. Su objetivo es crear un espacio donde jóvenes investigadores 
          puedan compartir sus avances, resultados y proyectos en desarrollo.
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
      </section>

      {/* ====================== MAIN ====================== */}
      <main className="App-main">
        <section id="fecha" className="App-section">
          <h2>📅 Fechas y lugar</h2>
          <p>6–7 de enero de 2026 · Auditorio (por confirmar)</p>
        </section>



                {/* --- Sección 3: Programa / Timetable --- */}
        <section id="programa" className="App-section">
          <h2>🕒 Programa del evento</h2>
          <p>
            El siguiente programa tentativo muestra la estructura general del evento.  
            Los horarios y charlas serán confirmados próximamente.
          </p>

<div className="App-tableWrapper">
          <table className="App-table">
            <thead>
              <tr>
                <th>Día</th>
                <th>Hora</th>
                <th>Actividad</th>
                <th>Ponente / Área</th>
                <th>Ubicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Martes 6 Ene</td>
                <td>09:00 – 09:30</td>
                <td>Apertura e inauguración</td>
                <td>—</td>
                <td>Auditorio principal</td>
              </tr>
              <tr>
                <td>Martes 6 Ene</td>
                <td>09:30 – 11:00</td>
                <td>Sesión Plenaria</td>
                <td>Por confirmar</td>
                <td>Auditorio principal</td>
              </tr>
              <tr>
                <td>Martes 6 Ene</td>
                <td>11:00 – 11:30</td>
                <td>Coffee Break</td>
                <td>—</td>
                <td>Hall Facultad de Ciencias</td>
              </tr>
              <tr>
                <td colSpan="5" style={{ textAlign: "center", color: "#aaa" }}>
                  <em>Más actividades serán añadidas próximamente...</em>
                </td>
              </tr>
            </tbody>
          </table>
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
        href="#"
        onClick={(e) => e.preventDefault()}>
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
      <li>
        Al confirmar tu inscripción recibirás un <strong>QR</strong> para el acceso
        el día del evento.
      </li>
    </ul>
  </div>

    {/* Resumen (abstract) */}
    <div className="info-card">
      <h3>Resumen (abstract)</h3>
      <ul>
        <li>Extensión sugerida: 1 pagina (máx. 1 figura opcional).</li>
        <li>Formato: título, autores/afiliaciones, palabras clave.</li>
        <li>Archivo: PDF o DOCX. Nombre: <code>Apellido_PrimeraPalabraDelTítulo.pdf</code></li>
      </ul>
           <div className="info-actions">
  <a className="btn outline" href="https://drive.google.com/drive/folders/186Y5UYYzaImcDYplM_p4Sz-DhRBZUece?usp=sharing" target="_blank" rel="noreferrer">Formato de Resumen</a>
</div>
    </div>

        {/* Criterios y selección */}
    <div className="info-card">
      <h3>Criterios y selección</h3>
      <p>
        Prioridad a <strong>investigadores/as emergentes</strong> con resultados en curso o próximos a publicación.
        La asignación charla/poster se hará con base en una <strong>rúbrica</strong> de calidad, avance,
        claridad e interdisciplinariedad (versión final por publicar).
      </p>
      <ul>
        <li>Notificación de aceptación: (por confirmar fecha).</li>
        <li>Se entregarán certificados de participación/ponencia.</li>
      </ul>
            <div className="info-actions">
        <a className="btn outline" href="#" onClick={(e)=>e.preventDefault()}>Bases (PDF)</a>
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
        <td>PDF/PNG alta resolución</td>
        <td>Color</td>
      </tr>
    </tbody>
  </table>
</div>

      <ul>
        <li>Incluye logo de la UCN, EIE y tu programa/centro (si corresponde).</li>
        <li>Tip: títulos legibles.</li>
      </ul>
    </div>

    {/* Modalidades y tiempos */}
    <div className="info-card">
      <h3>Modalidades y tiempos</h3>
      <ul>
        <li><strong>Charlas</strong>: 15 min + 5 min preguntas.</li>
        <li><strong>Posters</strong>: sesión dedicada con recorrido de evaluadores.</li>
        <li><strong>Plenarias</strong>: por invitación de los departamentos (por confirmar).</li>
      </ul>
    </div>

    {/* Logística rápida */}
    <div className="info-card">
      <h3>Logística rápida</h3>
      <ul>
        <li>Registro con <strong>QR</strong> en el acceso.</li>
        <li>Coffee/snacks. </li>
        <li>Soporte audiovisual: proyector HDMI; lleva tu adaptador si usas USB-C/DisplayPort.</li>
        <li>Código de conducta: respeto, inclusión y trato profesional en todas las actividades.</li>
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
</div>

<div className="PersonCard">
  <img src={defaultPhoto} alt="Pablo Garrido" className="PersonPhoto" />
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
  <p className="PersonRole">
    <strong>Representante de Comunicación</strong>
  </p>
</div>

<div className="PersonCard">
  <img src={defaultPhoto} alt="Andrés Layana" className="PersonPhoto" />
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
      </main>

      {/* ====================== FOOTER ====================== */}
<footer className="App-footer">
  <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:12, flexWrap:"wrap"}}>
    <img
      src={require('./Escudo-UCN-Logo.png')}
      alt="Logo UCN"
      style={{height:50, width:"auto"}}
    />
    <p>© 2026 Investigadores Emergentes — Facultad de Ciencias UCN</p>
  </div>
</footer>

    </div>
  );
}

export default App;
