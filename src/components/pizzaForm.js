import React from 'react'



export default function PizzaForm(props){

    const { values, change, submit, errors } = props

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

        <div className='form-container'>

            <form id = 'pizza-form' onSubmit={onSubmit}>

                {/* <div>{errors.name}</div> */}

                <label>Order For:
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
                </label>

                {/* <div>{errors.size}</div> */}

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

                <label>Three Cheese
                    <input
                        type='checkbox'
                        name='threeCheese'
                        // checked={values.checked}
                        onChange={onChange}
                    />
                </label>

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

            </form>
            <button id='order-button'>Submit Order</button>
        </div>
       
    )
    
}