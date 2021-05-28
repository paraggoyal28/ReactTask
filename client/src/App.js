import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/Login';
import DashBoard from './components/DashBoard';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Switch>
          <Route path="/" exact component={LoginComponent} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;