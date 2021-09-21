import { Form, Formik } from 'formik'
import image from '@/assets/welcome_cat.svg'
import Input from './Forms/Input'
import Button from './Forms/Button'
import Checkbox from './Forms/Checkbox'
import { validate, inputs } from '@/utils/SignupUtils'
import { signupStyle as classes } from '@/utils/Styling'

export default function Signup() {
  // returning element
  return (
    <div className={classes.container}>
      <div className={classes.heroContainer}>
        <div className={classes.heroSubContainer}>
          <img className={classes.heroSubContainerImage} src={image} alt='welcoming illustration' />
        </div>

        <h5 className={classes.heroSubContainerHeading}>
          Get started with{' '}
          <div className='inline-block'>
            <span className='text-indigo-500'>Miauw</span>{' '}
            <span className={classes.heroSubContainerHeadingHub}>Hub</span>
          </div>
        </h5>
      </div>

      {/* wrap the form with Formik fn from formik */}
      <Formik
        // set an initial values for each input element, key should match with the name of inputs or any other input elements
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          agreement: false,
        }}
        // set the validation schema, we will use from the Yup we assigned to the variable `validate` before
        validationSchema={validate}
        // Log value dari setiap input(ini hanya untuk komputer, dan untuk mobile kemungkinan perlu menggunakan plugin browser tambahan untuk mengakses console pada browser)
        onSubmit={(values) => {
          console.log(values)
        }}>
        {(formik) => (
          // create the form tag manually? no, but instead, use `Form` fn from formik so formik can handle what's happen!
          <Form className={classes.form}>
            <h5 className={classes.formHeading}>Sign Up to Miawu Hub</h5>

            {
              // after we grab the item from inputs that are exported from @utils/Signup we mapped it here
              // the i from the parameter below are stand for index each item. this is useful for assigning it to property 'key', because react need it
              inputs.map((input, i) => (
                <Input
                  key={i}
                  label={input.label}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))
            }

            <Checkbox name='agreement' label='I agree to terms and privacy' />

            <div className={classes.buttonContainer}>
              <Button
                classes={
                  // just an control flow so UI should match with what happen with the form, if everything is ok, there's no additional class send to Button componenet as a prop
                  formik.values.agreement && formik.isValid ? '' : 'cursor-not-allowed opacity-50'
                }
                // just an control flow so UI should match with what happen with the form, if everything is ok, `submit` will be send as a prop, or else the button should have type button
                type={formik.values.agreement && formik.isValid ? 'submit' : 'button'}>
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
