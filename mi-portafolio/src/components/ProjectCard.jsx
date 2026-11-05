import React from 'react';

function ProjectCard({ titulo, descripcion, tecnologias, imagen, enlace }) {
  return (
    <article className="tarjeta-proyecto">
      <img 
        src={imagen} 
        alt={`Captura del proyecto ${titulo}`}
      />
      <div className="tarjeta-proyecto-cuerpo">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <div className="tecnologias">
          {tecnologias.map((tech, index) => (
            <span key={index} className="badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="tarjeta-proyecto-pie">
        <a href={enlace} className="btn btn-primario" target="_blank" rel="noopener noreferrer">
          Ver Proyecto
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;