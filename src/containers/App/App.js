import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from '../../components/Layout/Index'
import HomeContainer from '../Home/Home'

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
