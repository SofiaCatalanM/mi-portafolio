import React, { useState } from 'react';

function Navbar() {
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#inicio">Mi Portafolio</a>
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Abrir menu de navegacion"
        >
          ☰
        </button>
        <ul className={`navbar-menu ${menuActivo ? 'activo' : ''}`}>
          <li><a href="#inicio" onClick={() => setMenuActivo(false)}>Inicio</a></li>
          <li><a href="#proyectos" onClick={() => setMenuActivo(false)}>Proyectos</a></li>
          <li><a href="#noticias" onClick={() => setMenuActivo(false)}>Noticias</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;