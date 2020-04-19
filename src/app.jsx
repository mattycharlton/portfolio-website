import React, {Component, Fragment} from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './router';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NotFound from './pages/notfound/notfound';
import styles from './styles/main.scss';

const App = ({routeResult = useRoutes(Routes)}) => (
  <Fragment>
    <Header />      
      {routeResult}
    <Footer />
  </Fragment>
);

export default App;