import React from 'react'
import { useHistory } from 'react-router-dom';


export default function Home(){

const history = useHistory();

const pizzaRoute = () => {
    history.push('/pizza');
  }

return (
    <div className='home-container'>
      <div>
        <img
        src="/Assets/Pizza.jpg"
        alt=''
      /></div>
      
      <button
        onClick={pizzaRoute}
        id='order-pizza'
      >
        Order now!
      </button>
    </div>
  )
}