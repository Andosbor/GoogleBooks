import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import "./index.css";
import App from "./App";
import SavedBooks from './components/SavedBooks';
import registerServiceWorker from "./registerServiceWorker";

const routing = (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/savedBooks" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

registerServiceWorker();
