import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Projects />
      <News />
      <footer className="footer">
        <p>© 2026 Sofia Catalan - Desarrollo Fullstack II</p>
      </footer>
    </div>
  );
}

export default App;
