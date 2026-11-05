import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const proyectos = [
    {
      titulo: "HuertoHogar E-commerce",
      descripcion: "Plataforma de venta de productos organicos con carrito de compras, validaciones y panel de administracion.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap", "LocalStorage"],
      imagen: "https://via.placeholder.com/400x200?text=HuertoHogar",
      enlace: "https://github.com/Arulloa080/huerto-hogar-frontend"
    },
    {
      titulo: "Portafolio Personal React",
      descripcion: "Portafolio desarrollado con React y Bootstrap, cargando datos dinamicamente desde archivos JSON.",
      tecnologias: ["React", "Vite", "Bootstrap", "JSON"],
      imagen: "https://via.placeholder.com/400x200?text=Portafolio",
      enlace: "#"
    },
    {
      titulo: "Sistema de Gestion",
      descripcion: "Aplicacion web para gestion de usuarios y productos con CRUD completo y validaciones en tiempo real.",
      tecnologias: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      imagen: "https://via.placeholder.com/400x200?text=Gestion",
      enlace: "#"
    }
  ];

  return (
    <section id="proyectos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <div className="row">
          {proyectos.map((proyecto, index) => (
            <ProjectCard
              key={index}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              imagen={proyecto.imagen}
              enlace={proyecto.enlace}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;