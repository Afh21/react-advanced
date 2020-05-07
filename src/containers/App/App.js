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
            <Route path="/css" component={HomeContainer} />
            <Route path="/patterns" component={HomeContainer} />
            <Route path="/hooks" component={HomeContainer} />
            <Route path="/functions" component={HomeContainer} />
            <Route path="/webgl" component={HomeContainer} />
            <Route path="/webrtc" component={HomeContainer} />
            <Route path="/html" component={HomeContainer} />
            <Route path="/regex" component={HomeContainer} />
            <Route path="/maps" component={HomeContainer} />
            <Route path="/rxjs" component={HomeContainer} />
            <Route path="/pwa" component={HomeContainer} />
            <Route path="/functional" component={HomeContainer} />
            <Route path="/tdd" component={HomeContainer} />
            <Route path="/data" component={HomeContainer} />
            <Route path="/utils" component={HomeContainer} />
            <Route path="/phrases" component={HomeContainer} />
            <Route path="/verbs" component={HomeContainer} />
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;
