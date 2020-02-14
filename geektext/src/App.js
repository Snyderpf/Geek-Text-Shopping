import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './components/headerComponent/header.js';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Books from './components/pages/books';
import ShoppingCart from './components/pages/shoppingCart';
import Reviews from './components/pages/reviews';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      
      <Header />
      <Route exact path = '/' component= {Homepage}/>
      <Route exact path = '/Books' component= {Books}/>
      <Route exact path = '/Reviews' component= {Reviews}/>
      <Route exact path = '/ShoppingCart' component= {ShoppingCart}/>
      <Footer/>
    </div>
    </Router>
  );
}}

export default App;
