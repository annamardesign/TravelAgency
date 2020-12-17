import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./navbar";
import Logo from "./logo";
import Home from "./home";
import Explore from "./explore";
import Contact from "./contact";
import SignIn from "./signin";
import './App.css';


function App() {

  return (
    <React.Fragment>
    <Router>
    <NavBar />
      <Switch>
      <Route path="/logo"><Logo/></Route> 
      <Route path="/home"><Home/></Route>
      <Route path="/explore"><Explore/></Route>
      <Route path="/contact"><Contact/></Route>
      <Route path="/signin"><SignIn/></Route>
      <Redirect from="/" exact to ="/home"/>
      <Redirect from="/logo" exact to ="/home"/>
      <Redirect to="/not-found"/>
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  
