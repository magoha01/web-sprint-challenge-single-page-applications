import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
//Components
import Home from './components/home';
import PizzaForm from './components/pizzaForm'

const App = () => {
  return (
    <>
      <h1>Bloomtech Bites</h1>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
      </nav>

      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </>
  );
};
export default App;
