import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from "./navbar";
import Logo from "./logo";
import Home from "./home";
import Explore from "./explore";
import SignUp from "./signup";
import Book from "./book";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {

  
  return (
    <React.Fragment>
      <ToastContainer/>
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
  
