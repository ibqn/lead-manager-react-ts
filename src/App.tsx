import React, { FunctionComponent, Fragment } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Header, Alerts } from './components/layout';
import { Dashboard } from './components/leads';

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <Alerts />
      <div className="container">
        <Dashboard />
      </div>
    </Fragment>
  );
};

export default App;
