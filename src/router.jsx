import React from 'react';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Skills from './pages/skills/skills';

const Routes = {
  '/': () => <Home />,
  '/about': () => <About />,
  '/contact': () => <Contact />,
  '/skills': () => <Skills />
};

export default Routes;
