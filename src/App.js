import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Catalog from './components/Catalog'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Catalog />
      <About />
    </div>
  );
}

export default App;
