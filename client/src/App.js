import logo from './logo.svg';
import React, { useState } from 'react';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" />
        <Route path="/test" />
      </Switch>
    </Router>
  );
}

export default App;
