import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/banner';
import Background from '../../images/home-background.jpg';

const NotFound = () => (
  <Fragment>
    <Banner image={Background} title={'404 Page Not Found'} subTitle={'Sorry! You have visted a page that is unavailable.'} />
  </Fragment>
);

export default NotFound;