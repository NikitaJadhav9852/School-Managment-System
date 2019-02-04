import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './containers/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
