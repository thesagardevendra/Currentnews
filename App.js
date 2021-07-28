import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from "./Header";
import axios from "axios";
import Main from "./Main";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Entertainment from './Entertainment';
import Technology from './Technology';
import Business from './Business';
import General from './General';
import Sports from './Sports';
import Science from './Science';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/entertainment">
          <Header />
          <Entertainment />
        </Route>
        <Route path="/technology">
          <Header />
          <Technology />
        </Route>
        <Route path="/bussiness">
          <Header />
          <Business />
        </Route>
        <Route path="/general">
          <Header />
          <General/>
        </Route>
        <Route path="/science">
          <Header />
          <Science />
        </Route>
        <Route path="/sports">
          <Header />
          <Sports/>
        </Route>
        <Route path="/">
        <Header />
    <Main />
        </Route>
        </Switch>
    </Router>
  
  );
}

export default App;
