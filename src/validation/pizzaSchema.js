import * as yup from 'yup';

const formSchema = yup.object().shape({

    first_name: yup
        .string()
        .trim()
        .required('Please enter your first name')
        .min(2, 'name must be at least 2 characters')
})