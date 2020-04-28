import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Link} from 'react-router-dom';
import Main from './Main'
import './style.css';

class App extends Component {
 render() {
    return (
      <ul>
      <li><Link to="/">Home</Link></li>
     <li> <Link to="/one">One</Link></li>
      <li><Link to="/two">Two</Link></li>
         <Main />
      </ul>
    );
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
