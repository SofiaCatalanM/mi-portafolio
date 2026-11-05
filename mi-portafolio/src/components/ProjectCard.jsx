import React from 'react';

function ProjectCard({ titulo, descripcion, tecnologias, imagen, enlace }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={imagen} 
          className="card-img-top" 
          alt={`Captura del proyecto ${titulo}`}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <div className="mb-2">
            {tecnologias.map((tech, index) => (
              <span key={index} className="badge bg-success me-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <a href={enlace} className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;