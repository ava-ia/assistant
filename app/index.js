import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Error404 from './components/404';
import App from './components/app';
import Home from './components/home';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='tasks' component={Error404} />
      <Route path='task/:id' component={Error404} />
      <Route path='*' component={Error404}/>
    </Route>
  </Router>
), document.getElementById('react-app'))
