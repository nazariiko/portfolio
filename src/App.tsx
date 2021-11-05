import React from 'react';

import Header from './components/containers/Header';
import Hello from './components/containers/Hello';
import About from './components/containers/About';
import Skills from './components/containers/Skills';
import Works from './components/containers/Works';
import Contacts from './components/containers/Contacts';
import Footer from './components/containers/Footer';
import ScrollBar from './components/ScrollBar';
import Social from './components/Social';

function App() {
  return (
    <div>
      <ScrollBar />
      <Header />
      <Hello />
      <About />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
      <Social />
    </div>
  );
}

export default App;
