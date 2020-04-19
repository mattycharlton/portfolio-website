import React from 'react';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Skills from './pages/skills/skills';

const Routes = {
  '/': () => <Home />,
  '/contact': () => <Contact />,
  '/skills': () => <Skills />
};

export default Routes;
