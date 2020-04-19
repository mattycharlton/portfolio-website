import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/banner';
import Background from '../../images/home-background.jpg';

const Home = () => (
  <Fragment>
    <Banner image={Background} title={'Matty Charlton'} subTitle={'UI / Front End Engineer'} showSocialIcons={true} />
  </Fragment>
);

export default Home;