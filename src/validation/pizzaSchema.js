import * as yup from 'yup';

const pizzaSchema = yup.object().shape({

    name: yup
        .string()
        .trim()
        .required('Please enter your first name')
        .min(2, "name must be at least 2 characters"),


    size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'extra-large'], 'Size is required!'),


    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    extraCheese: yup.boolean(),
    threeCheese: yup.boolean(),

    special: yup
        .string()
        .trim()
    
})

export default pizzaSchema;