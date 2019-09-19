import React, { FunctionComponent, Fragment } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Header } from './components/layout';
import { Dashboard } from './components/leads';

import { Provider } from 'react-redux';
import store from './store';

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
