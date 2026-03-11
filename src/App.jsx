import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Solutions />
      <Portfolio />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
