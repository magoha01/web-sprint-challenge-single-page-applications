import React from 'react'

export default function PizzaForm(){

    return (

        <div className='form-container'>

            <h2>Build Your Own Pizza</h2>
            <form id = 'pizza-form'>

                <label>Order For:
                    <input
                        id='name-input'
                        name='name'
                        type='text'
                        placeholder="Name"
                        minLength='2'
                        // value={values.first_name}
                        // onChange={change}
                    />
                </label>

                <label>Size:
                    <select
                        id='size-dropdown'
                        // onChange={onChange}
                        // value={values.role}
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
                        // checked={values.hiking}
                        // onChange={onChange}
                    />
                </label>

                <label>Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    // checked={values.reading}
                    // onChange={onChange}
                />
                </label>

                <label>Extra Cheese
                <input
                    type='checkbox'
                    name='extraCheese'
                    // checked={values.coding}
                    // onChange={onChange}
                />
                </label>

                <label>Three Cheese
                    <input
                        type='checkbox'
                        name='threeCheese'
                        // checked={values.coding}
                        // onChange={onChange}
                    />
                </label>

                <label>Special Instructions:
                    <input
                        id='special-text'
                        name='special'
                        type='text'
                        placeholder="Name"
                        // minLength='2'
                        // value={values.first_name}
                        // onChange={change}
                    />
                </label>

            </form>
            <button id='order-button'>Add to Order</button>
        </div>
       
    )
    
}