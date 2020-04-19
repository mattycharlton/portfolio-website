import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/banner';
import Background from '../../images/home-background.jpg';

const Contact = () => (
  <Fragment>
    <Banner image={Background} title={'Contact Matty'} subTitle={''} />
  </Fragment>
);

export default Contact;