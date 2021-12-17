import React from 'react'
import { useHistory } from 'react-router-dom';


export default function Home(){

const history = useHistory();

const pizzaRoute = () => {
    history.push('/pizza');
  }

return (
    <div className='home-container'>
      <img
        src='Assets/Pizza.jpg'
        alt=''
      />
      <button
        onClick={pizzaRoute}
        id='order-pizza'
      >
        Order now!
      </button>
    </div>
  )
}