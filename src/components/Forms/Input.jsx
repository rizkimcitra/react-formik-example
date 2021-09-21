import { useField, ErrorMessage } from 'formik'
import { BiErrorCircle } from 'react-icons/bi'
import { inputStyle as classes } from '@/utils/Styling'

export default function Input({ label, placeholder, ...props }) {
  // call useField fn from formik and get the values from the returning value and destructure it as and array
  const [field, meta] = useField(props)

  //   returning element
  return (
    <div className={classes.container}>
      <div
        className={`${classes.containerInput} ${
          // if meta touched and error is true, the className should be:
          meta.touched && meta.error ? 'ring-red-500' : 'ring-gray-700 focus-within:ring-indigo-400'
        }`}>
        <input
          className={classes.input}
          type='text'
          id={field.name}
          placeholder={placeholder}
          autoComplete='off'
          // this destructuring items just a properties such as values and event onChange
          {...field}
          {...props}
        />

        <label htmlFor={field.name} className={classes.containerInputLabel}>
          {label}
        </label>

        {
          // if meta touched and error is true, the className should be:
          meta.touched && meta.error ? (
            <div className={classes.containerInputErrIcon}>
              <BiErrorCircle />
            </div>
          ) : //   or else null
          null
        }
      </div>
      <ErrorMessage name={field.name} component='div' className={classes.containerInputErrMsg} />
    </div>
  )
}
