import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from '../../components/Layout/Index'
import HomeContainer from '../Home/Home'

function App () {
  return (
    <Router>
        <Layout >
          <Switch>
            <Route path="/" component={HomeContainer} />
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;
