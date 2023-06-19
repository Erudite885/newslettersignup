import React, { useEffect, useState } from 'react'

const Form = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  
  const enteredEmailValid = enteredEmail.includes('@');
  const enteredEmailInvalid = !enteredEmailValid && enteredEmailTouched;

  let formIsValid = false;
 
  if (enteredEmailValid){
    formIsValid = true
  }

  const enteredEmailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  }

  const enteredEmailBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault(); 

    if (!enteredEmailValid){
      return;
    }

    setEnteredEmail('');
    setEnteredEmailTouched(false);
    console.log(enteredEmail);
  }



  const nameInputClasses = enteredEmail ? 'valid' : 'invalid'

  return (
    <section className='my-4'>
      <form onSubmit={formSubmitHandler} className='flex flex-col'>
        <div className={`${nameInputClasses}`}>
          <label htmlFor='email' className='text-darkgrey py-2 font-bold'>Email address</label>
          <input 
            type='email' 
            id='email' 
            value={enteredEmail} 
            onChange={enteredEmailChangeHandler} 
            onBlur={enteredEmailBlurHandler} 
            className={`${nameInputClasses} border-2 px-4 py-2 outline-none rounded-[6px]`} placeholder='email@company.com'
          />
          {enteredEmailInvalid && (
            <p className='text-tomato'>Please enter correct email </p>
          )}

        </div>
         <div>
          <button disabled={!formIsValid} className='bg-darkgrey rounded py-2 text-grey font-bold p-2 mt-4'>subscribe to monthly newsletter</button>
         </div>
      </form>
    </section>
  )
}

export default Form