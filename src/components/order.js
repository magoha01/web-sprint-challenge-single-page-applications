import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'
import schema from '../validation/pizzaSchema';

import PizzaForm from './pizzaForm'

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
    name: '',
    special: '',
    size: '',

    pepperoni: '',
    sausage: '',
    extraCheese: '',
    threeCheese: ''
  }

  const initialOrders= [];
  const disableSubmit= true;

  export default function Order(){

    const [orders, setOrders] = useState(initialOrders);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(disableSubmit);

    //SENDS POST FOR COMPLETED ORDER
    const postOrder = newOrder => { 
   
        axios.post('https://reqres.in/api/orders', newOrder)
          .then(resp => {
            setOrders([ ...orders, resp.data ]); //do not do this on auto
          }).catch(err => console.error(err))
          .finally(() => setFormValues(initialFormValues))
      }

      //VALIDATES FIELDS ARE FILLED PROPERLY
      const validate = (name, value) => {
        yup.reach(schema, name)
          .validate(value)
          .then(() => setErrors({ ...errors, [name]: '' }))
          .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
      }

    //MAKES CHANGES TO FORM AS FIELDS ARE FILLED OUT
      const updateForm = (inputName, inputValue) => {
        validate(inputName, inputValue);
        setFormValues({ ...formValues, [inputName]: inputValue });
      }

      //SUBMITS ORDER WHEN COMPLETED
      const submitForm = () => {
    
        const newOrder = {
          name: formValues.name.trim(),
          special: formValues.special.trim(),
          size: formValues.size,
          toppings: ['pepperoni', 'sausage', 'extraCheese', 'threeCheese'].filter(topping => !!formValues[topping])
        }
        postOrder(newOrder);
      }

      useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
      }, [formValues])

      return (
        <div className='order-container'>
            <header><h1>Build Your Own Pizza</h1></header>
                <PizzaForm 
                     values={formValues}
                     change={updateForm}
                     submit={submitForm}
                     disabled={disabled}
                     errors={errors}
                />

{ 
    orders.map((order) =>{
          return <Order key={order.id} details={order} />
    })
  }
              
        </div>
        
    )
  }