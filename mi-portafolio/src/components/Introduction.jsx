import React from 'react';

function Introduction() {
  return (
    <section id="inicio" className="introduccion">
      <div className="introduccion-contenido">
        <div className="introduccion-foto">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Foto profesional de Sofia Catalan, estudiante de Ingenieria en Informatica" 
          />
        </div>
        <div className="introduccion-texto">
          <h1>Sofia Catalan</h1>
          <p className="subtitulo">Estudiante de Ingenieria en Informatica</p>
          <p>
            Soy estudiante de Duoc UC apasionada por el desarrollo web frontend. 
            Tengo experiencia en HTML, CSS, JavaScript y React. 
            Me interesa crear interfaces intuitivas y funcionales que brinden 
            una excelente experiencia de usuario.
          </p>
          <div className="botones-introduccion">
            <a href="#proyectos" className="btn btn-primario">Ver Proyectos</a>
            <a href="mailto:sofia.catalan@duoc.cl" className="btn btn-outline">Contactar</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;