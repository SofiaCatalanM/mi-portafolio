import React from 'react';

function Introduction() {
  return (
    <section id="inicio" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Foto profesional de Sofia Catalan, estudiante de Ingenieria en Informatica" 
              className="rounded-circle img-fluid mb-3"
            />
          </div>
          <div className="col-md-8">
            <h1 className="display-4">Sofia Catalan</h1>
            <p className="lead text-muted">Estudiante de Ingenieria en Informatica</p>
            <p>
              Soy estudiante de Duoc UC apasionada por el desarrollo web frontend. 
              Tengo experiencia en HTML, CSS, JavaScript, Bootstrap y React. 
              Me interesa crear interfaces intuitivas y funcionales que brinden 
              una excelente experiencia de usuario.
            </p>
            <div className="mt-3">
              <a href="#proyectos" className="btn btn-success me-2">Ver Proyectos</a>
              <a href="mailto:sofia.catalan@duoc.cl" className="btn btn-outline-success">Contactar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;