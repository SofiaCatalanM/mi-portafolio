import React from 'react';

function Introduction() {
  return (
    <section id="inicio" className="introduccion">
      <div className="introduccion-contenido">
        <div className="introduccion-foto">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Foto profesional de Sofia Catalán, estudiante de Ingeniería en Informatica" 
          />
        </div>
        <div className="introduccion-texto">
          <h1>Sofia Catalán</h1>
          <p className="subtitulo">Estudiante de Ingeniería en Informatica con mencion en automatización</p>
          <p>
            Soy estudiante de Duoc UC de ingenieria en informatica con mencion en automatización. 
            Tengo experiencia en HTML, CSS, JavaScript, React, Python, Java, SQL y NoSQL. 
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