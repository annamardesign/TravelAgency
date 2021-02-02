import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar";
import Logo from "./components/logo";
import Home from "./pages/home";
import Explore from "./pages/explore";
import SignUp from "./pages/signup";
import Book from "./pages/book";
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
      <Route path="/book"><Book/></Route>
      <Redirect from="/" exact to ="/home"/>
      <Redirect from="/logo" exact to ="/home"/>
      <Redirect to="/not-found"/>
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
  
