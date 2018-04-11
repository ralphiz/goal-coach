import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={SignUp} />
  </Router>, document.getElementById('root')
)