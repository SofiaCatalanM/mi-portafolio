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
    <section id="noticias" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Noticias y Actualizaciones</h2>
        <div className="row">
          {noticias.map((noticia) => (
            <NewsCard
              key={noticia.id}
              titulo={noticia.titulo}
              fecha={noticia.fecha}
              contenido={noticia.contenido}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;