import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import About from './components/About';
import Programs from './components/Programs';
import Community from './components/Community';
import Resources from './components/Resources';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <About />
        <Programs />
        <Community />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

