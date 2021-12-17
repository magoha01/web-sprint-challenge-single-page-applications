import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
 margin: 4% 50%;
  padding: 4% 6%;
`



export default function Home(){

const history = useHistory();

const pizzaRoute = () => {
    history.push('/pizza');
  }

return (
    <div className='home-container'>
      
      <Button
        onClick={pizzaRoute}
        id='order-pizza'
      >
        Order now!
      </Button>
    </div>
  )
}