import React, { useState } from 'react';
import Home from './Pages/Home';
import Returns from './Pages/Returns';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Location from './Pages/Location';
import Profile from './Pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/returns" component={Returns} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
