import React from 'react'

import styled from 'styled-components'

const FormContainer = styled.div`



form {
    margin: 2%;
    border: 3px solid black;
    border-radius: 12px;
}

label{
        font-weight: bold;
    }
   
`

const Submit = styled.div`

margin: auto 50%;

`

const Name = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 2%;
    border: 3px solid purple;
    border-radius: 12px;
    padding: 2%;

    label{
        font-weight: bold;
    }

`

const Drop = styled.div`
display: flex;
justify-content: center;
margin: 2%;
font-weight: bold;
border: 3px solid purple;
    border-radius: 12px;
    padding: 2%;

label{
    margin-right: 2%;
}
`


const Toppings = styled.div`
 border: 3px solid purple;
border-radius: 12px;

display: flex;
align-content: center;
align-items: center;
justify-content: center;

    margin: 2%;

input{
    margin: 2%;
}

label{
    margin: 3%;
    font-weight: bold;
    display: flex;
}

`

const Special = styled.div`
 border: 3px solid purple;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    margin: 2%;
    padding: 3%;
`




export default function PizzaForm(props){

    const { values, change, submit, errors, disabled } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { value, checked, type, name } = event.target
        const useValue = type === 'checkbox' ? checked : value;
        change(name, useValue)
    }
                     
  
    return (

        <FormContainer className='form-container'>

            <form id = 'pizza-form' onSubmit={onSubmit}>

            <Name>
                <div>{errors.size}</div>
                <label>Order For:</label>
                <div>{errors.name}</div>
                    <input
                        id='name-input'
                        name='name'
                        type='text'
                        placeholder="Name"
                        // minLength='2'
                        value={values.name}
                        onChange={onChange}
                    />
                
                </Name>

                {/* <div>{errors.size}</div> */}
            <Drop>
                <label>Size:
                    <select
                        id='size-dropdown'
                        onChange={onChange}
                        // value={values.size}
                        name='size'
                    >
                        <option value=''>- Select Size -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extra-large'>Extra-Large</option>

                    </select>
                </label>
                </Drop>


            <Toppings>
                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        // checked={values.checked}
                        onChange={onChange}
                    />
                </label>

                <label>Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    // checked={values.checked}
                    onChange={onChange}
                />
                </label>

                <label>Extra Cheese
                <input
                    type='checkbox'
                    name='extraCheese'
                    // checked={values.checked}
                    onChange={onChange}
                />
                </label>


                <label>Mushrooms
                    <input
                        type='checkbox'
                        name='mushrooms'
                        // checked={values.checked}
                        onChange={onChange}
                    />
                </label>


                <label>Peppers
                    <input
                        type='checkbox'
                        name='peppers'
                        // checked={values.checked}
                        onChange={onChange}
                    />
                </label>


                <label>Onions
                    <input
                        type='checkbox'
                        name='onions'
                        // checked={values.checked}
                        onChange={onChange}
                    />
                </label>


                <label>Tomatoes
                    <input
                        type='checkbox'
                        name='tomatoes'
                        // checked={values.checked}
                        onChange={onChange}
                    />
                </label>

                <label>Three Cheese
                    <input
                        type='checkbox'
                        name='threeCheese'
                        // checked={values.checked}
                        onChange={onChange}
                    />
                </label>

                </Toppings>

                <Special>
                <label>Special Instructions:
                    <input
                        id='special-text'
                        name='special'
                        type='text'
                        placeholder="Special instructions"
                        // value={values.special}
                        onChange={onChange}
                    />
                </label>
            </Special>
            </form>
            <Submit>
            <button id='order-button' disabled={disabled}>Submit Order</button>
            </Submit>
        </FormContainer>
       
    )
    
}

// disabled={disabled}