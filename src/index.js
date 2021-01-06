import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './resources/style/app.scss';

require("./resources/js/script.js");

const App = () => {

  return (
    <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
        </Switch>
    </Router>
  );

}

ReactDOM.render(<App />,document.getElementById('root'));

