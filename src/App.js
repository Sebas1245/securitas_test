import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Catalog from './components/Catalog'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Catalog />
      <About />
      <Contact />
    </div>
  );
}

export default App;
