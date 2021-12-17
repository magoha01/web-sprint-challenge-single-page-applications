import React  from "react";
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
//Components
import Home from './components/home';
import Order from './components/order'
import pizzaPic from './images/Pizza.jpg'

import './App.css';




const App = () => {

  return (
    <>
    <header>
      <div>
      <h1>Bloom Bites</h1>
      <h3> Never code hungry.</h3>
      
       <div>
        <nav>
            <Link  to="/"><button className='navButton'>Home</button></Link>
            <Link to="/pizza"><button className='navButton'>Your Order</button></Link>
        </nav>
      </div>
      </div>
      <img
        id='pizzaPic'
        src={pizzaPic} 
        alt=''
      />
     
    </header>
        

    
      <Switch>
        <Route path="/pizza">
          <Order />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </>
  );
};

export default App;
