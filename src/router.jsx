import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/q1';
// import SetTwo from './components/SetTwo';
import App from './App';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={App} />
        <Route path="/q1" component={Quiz} />

      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
