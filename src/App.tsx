import React from 'react';

import Header from './components/containers/Header';
import Hello from './components/containers/Hello';
import About from './components/containers/About';
import Skills from './components/containers/Skills';
import Works from './components/containers/Works';
import Contacts from './components/containers/Contacts';
import Footer from './components/containers/Footer';
import ScrollProgress from './components/ScrollProgress';
import Social from './components/Social';

import { calculateScrollDistance } from './helpers/scrollProgress';

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        setScrollPosition(calculateScrollDistance());
      });
    });
  }, []);

  return (
    <div>
      <ScrollProgress scroll={scrollPosition + '%'} />
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
