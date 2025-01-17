import React, { Suspense } from 'react';
import './App.css';
import Loader from './components/Loader/Loader'; // Import the Loader component
import "devicon/devicon.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Regular imports without lazy loading
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      {/* Use Loader as fallback */}
      <Suspense fallback={<Loader />}>
        <NavBar />
        <section id="home">
          <HomePage />
        </section>
        <div className="section-divider"></div>

        <section id="about">
          <About />
        </section>
        <div className="section-divider"></div>

        <section id="skills">
          <Skills />
        </section>
        <div className="section-divider"></div>

        <section id="projects">
          <Projects />
        </section>
        <div className="section-divider"></div>

        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
}

export default App;