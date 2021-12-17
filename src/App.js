import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios'
import schema from './validation/pizzaSchema';
//Components
import Home from './components/home';
import PizzaForm from './components/pizzaForm'

const initialFormValues = {
  name: '',
  special: '',
  size: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  sausage: false,
  extraCheese: false,
  threeCheese: false
}

const initialErrors = {
  username: '',
  email: '',
  role: '',
  civil: '',
}

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors)

  const postOrder = newOrder => { 
   
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(resp => {
        setOrders([ ...orders, resp.data ]); //do not do this on auto
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const updateForm = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });

  }

  const submitForm = () => {
    
    const newOrder = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'extraCheese', 'threeCheese'].filter(topping => !!formValues[topping])
    }
    postOrder(newOrder);
  }

  return (
    <>
    <header>
      <h1>Bloomtech Bites</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/pizza">Order</Link>
        </nav>
    </header>
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
