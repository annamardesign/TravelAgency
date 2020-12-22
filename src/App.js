import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
import Logo from "./logo";
import Home from "./home";
import Explore from "./explore";
import SignUp from "./signUp";
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
      <Route path="/signup"><SignUp/></Route>
      <Route path="/signin"><SignIn/></Route>
      <Redirect from="/" exact to ="/home"/>
      <Redirect from="/logo" exact to ="/home"/>
      <Redirect to="/not-found"/>
      </Switch>
      <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
  
