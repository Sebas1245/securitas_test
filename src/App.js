import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Catalog from './components/Catalog'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Catalog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
