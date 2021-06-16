import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'
import Characters from '../views/Characters'
import Location from '../views/Location'
import Episode from '../views/Episode'
import NotFound from '../views/NotFound'


import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/episode" component={Episode} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
