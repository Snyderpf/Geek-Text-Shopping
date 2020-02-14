import React, { Component } from 'react';
import {
    Link 
  } from 'react-router-dom';



class Header extends Component {
  render(){
  return (
    <header>
        <div className = "logo">
            Geek Text
        </div>
        <nav>
            <ul>
                <li className ="first">
                    <li className = "first"></li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Books">Books</Link>
                    
                </li>
                <li>
                    
                <Link to="/Reviews">Reviews</Link>
                </li>
                <li>
                    
                <Link to="/ShoppingCart">Shopping Cart</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}}

export default Header;
