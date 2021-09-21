import * as Yup from 'yup'

// validation schema for formik by using Yup library
// min means minimum length user should type. if not, they got error
// max means maximum length user should type. if not, they got error
// required means input is required. if not, they got error
// oneOf means function and received an array of string, which is reference to password input, so the input should have same value with the refered input. if not, they got error
export const validate = Yup.object({
  // this will refer an input elements that have property name of firstName
  firstName: Yup.string()
    .max(10, 'First Name must be 10 characters or less!')
    .required('First Name is required!'),

  // this will refer an input elements that have property name of lastName
  lastName: Yup.string()
    .max(20, 'Last Name must be 20 characters or less!')
    .required('Last Name is required!'),

  // this will refer an input elements that have property name of email
  email: Yup.string()
    .email('Invalid Email address')
    .max(150, 'Sorry, but email address should be 150 characters or less!')
    .required('Email is required!'),

  // this will refer an input elements that have property name of password
  password: Yup.string()
    .min(6, 'Password must be more than 6 characters')
    .required('Password is required!'),

  // this will refer an input elements that have property name of confirmPassword
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Check your password!'),

  // this will refer an input elements that have property name of agreement which is a checkbox
  agreement: Yup.boolean()
    .isTrue('You should agree with terms and privacy of Miauw Hub')
    .required('You should agree with terms and privacy of Miauw Hub'),
})

// this inputs array is just a string to map an input with their unique type, such as text and email
export const inputs = [
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last Name',
  },
  {
    label: 'Your Email',
    name: 'email',
    type: 'email',
    placeholder: 'Your Email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
  },
]
