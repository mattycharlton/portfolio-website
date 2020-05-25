import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/banner';
import Background from '../../images/home-background.jpg';
import About from '../../components/about/about';
import FocusAreas from '../../components/focusAreas/focusAreas';
import CMS from '../../components/cms/cms';
import Skills from '../../components/skills/skills';
import Contact from '../../components/contact/contact';

const Home = () => (
  <Fragment>
    <Banner image={Background} title={'Matty Charlton'} subTitle={'Front End Engineer'} showSocialIcons={true} />
    <About />
    <FocusAreas />
    <CMS />
    <Skills />
    <Contact />
  </Fragment>
);

export default Home;