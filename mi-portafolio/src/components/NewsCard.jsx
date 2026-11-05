import React from 'react';

function NewsCard({ titulo, fecha, contenido }) {
  return (
    <article className="tarjeta-noticia">
      <h3>{titulo}</h3>
      <p className="fecha">{fecha}</p>
      <p>{contenido}</p>
    </article>
  );
}

export default NewsCard;