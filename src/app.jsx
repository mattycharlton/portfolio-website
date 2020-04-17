import React, {Component, Fragment} from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './router';
import Header from './components/header/header';
import NotFound from './pages/notfound/notfound';
import styles from './styles/main.scss';

const App = ({routeResult = useRoutes(Routes)}) => (
  <Fragment>
    <Header />      
      {routeResult || <NotFound />}
  </Fragment>
);

export default App;