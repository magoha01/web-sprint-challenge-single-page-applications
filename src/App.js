import React  from "react";
import { Link, Route, Switch } from 'react-router-dom';
//Components
import Home from './components/home';
import Order from './components/order'


const App = () => {

  return (
    <>
    <header>
      <h1>Bloom Bites</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/pizza">Order</Link>
        </nav>
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
