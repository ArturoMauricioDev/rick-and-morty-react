import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Characters from '../views/Characters'
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/characters" component={Characters} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
