import React, { Component } from 'react';
import { withRouter,Link } from "react-router-dom";
import './Unauthorized.scss';
export class Unauthorized extends Component {
    constructor(){
      super();
      //npm install node-sass
    }

    render() {
        return (
            <div className='container'>
              <div class="gandalf">
                <div class="fireball"></div>
                <div class="skirt"></div>
                <div class="sleeves"></div>
                <div class="shoulders">
                  <div class="hand left"></div>
                  <div class="hand right"></div>
                </div>
                <div class="head">
                  <div class="hair"></div>
                  <div class="beard"></div>
                </div>
              </div>
              <div class="message">
                <h1>403 - You Shall Not Pass</h1>
                <p>Uh oh, Gandalf is blocking the way!<br />You did not login as user </p>
              </div>
              <br />
              <div class="message">
              <p><Link to='/'>Back to Login</Link></p>
              </div>              
            </div>
          )
    }
}
export default withRouter(Unauthorized);