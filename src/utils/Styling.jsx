// create an object of classes that have properties of utilities of Tailwind CSS
// it's easy to manage imo

// styling for Signup component
export const signupStyle = {
  container:
    'flex flex-col lg:flex-row items-center w-11/12 h-11/12 shadow-lg rounded-md p-2 sm:p-4 lg:p-6 bg-white',
  heroContainer: 'w-full lg:w-full',
  heroSubContainer: 'grid place-items-center',
  heroSubContainerImage: 'w-1/2 select-none',
  heroSubContainerHeading:
    'text-lg sm:text-2xl lg:text-5xl font-bold text-center text-gray-700 selection:bg-indigo-100',
  heroSubContainerHeadingHub:
    'py-1 px-2 rounded-md selection:bg-yellow-50 bg-gray-800 text-yellow-500',
  form: 'w-full sm:w-10/12 lg:w-full px-2 sm:px-4 lg:px-6 my-4 lg:my-10 lg:mt-12 space-y-8 sm:space-y-10',
  formHeading: 'text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-700',
  buttonContainer: 'w-full',
}

// styling for button component
export const buttonStyle =
  'text-sm sm:text-base font-semibold py-1.5 px-4 sm:py-2 sm:px-8 lg:px-12 border  rounded-md text-white bg-indigo-500 border-transparent hover:bg-indigo-600'

// styling for input component, such as text, email, and password
export const inputStyle = {
  container: 'relative',
  containerInput:
    'relative w-full h-8 sm:h-10 xl:h-12 outline-none rounded-md ring-1 focus-within:ring-2',
  containerInputLabel:
    'absolute left-2 -top-3 sm:-top-3.5 text-sm sm:text-base font-normal peer-placeholder-shown:top-1.5 sm:peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-2 xl:peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-400 bg-white text-gray-700 cursor-text',
  containerInputErrIcon:
    'absolute right-2.5 top-2 sm:right-3.5 sm:top-3 lg:top-3 lg:right-4 xl:top-4 text-red-500',
  containerInputErrMsg: 'absolute text-xs text-red-500 ',
  input:
    'peer w-full h-full px-2 pr-8 text-sm sm:text-base outline-none rounded-md bg-transparent placeholder-transparent selection:bg-indigo-100 text-gray-700',
}

// styling for checkbox
export const checkboxStyle = {
  container: 'w-full',
  subContainer: 'relative flex items-center space-x-2 sm:space-x-3',
  checkbox: 'lg:w-4 lg:h-4 outline-none focus:ring-1 ring-indigo-400',
  label: 'select-none text-xs sm:text-sm',
  errorMsg: 'w-full text-xs text-red-500',
}
