import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Playlist} from "./components/Playlist";
import {Feedback} from "./components/Feedback";
import {Unauthorized} from './components/Unauthorized';
import { Rating } from './components/Rating';


class App extends Component {

  constructor(){
    super();
    this.state = {
      user:false,
      email:null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogin(emails){
    console.log("app page "+emails);
    localStorage.setItem("email",emails);
    console.log("app page "+this.state.user);
  }

  handleLogout(){
    localStorage.removeItem("email");
    localStorage.clear();
  }


  render(){
    return(
      <BrowserRouter >
        <Route exact path='/' handleLogin={this.handleLogin} handleLogout={this.handleLogout} render={
          props => <Login {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />} />
        <Route path="/register" component={Register}/>
        <Route path="/unauthorized" component={Unauthorized} />
        <Route exact path='/home' email={this.state.email} render={
          props => <Home {...props} email={this.state.email} />} />
        <Route exact path='/playlist' email={this.state.email} render={
          props => <Playlist {...props} email={this.state.email} />} />
        <Route exact path='/feedback' email={this.state.email} render={
          props => <Feedback {...props} email={this.state.email} />} />
          <Route exact path='/rating' email={this.state.email} render={
          props => <Rating
           {...props} email={this.state.email} />} />
      </BrowserRouter>
    );
  }
}

export default App;
