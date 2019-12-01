import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import GoodsList from './pages/Goods/List';

function Routers() {
  return(
    <Router>
      <Route path="/" component={Home}>
        <Route path="home" component={Home} />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/goods" component={GoodsList}>
        <Route path="/list" component={GoodsList} />
      </Route>
      <Route path="/goods/list" component={GoodsList} />
    </Router>
  );
}

export default Routers;