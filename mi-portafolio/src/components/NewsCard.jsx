import React from 'react';

function NewsCard({ titulo, fecha, contenido }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text text-muted small">{fecha}</p>
          <p className="card-text">{contenido}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;