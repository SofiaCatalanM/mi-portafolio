import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function News() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('/datos/noticias.json')
      .then(response => response.json())
      .then(data => setNoticias(data))
      .catch(error => console.error('Error cargando noticias:', error));
  }, []);

  return (
    <section id="noticias" className="seccion noticias">
      <h2 className="seccion-titulo">Noticias y Actualizaciones</h2>
      <div className="grid-noticias">
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            titulo={noticia.titulo}
            fecha={noticia.fecha}
            contenido={noticia.contenido}
          />
        ))}
      </div>
    </section>
  );
}

export default News;