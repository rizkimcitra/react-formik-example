import { ErrorMessage, useField } from 'formik'
import { checkboxStyle as classes } from '@/utils/Styling'

export default function Checkbox({ label, ...props }) {
  // call useField fn from formik and get the values from the returning value and destructure it as and array
  const [field] = useField(props)

  //   returning element
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <input
          type='checkbox'
          id={field.name}
          name={field.name}
          className={classes.checkbox}
          // this destructuring items just a properties such as values and event onChange
          {...field}
          {...props}
        />
        <label htmlFor='agreement' className={classes.label}>
          {label}
        </label>
      </div>

      <ErrorMessage name={field.name} component='div' className={classes.errorMsg} />
    </div>
  )
}
