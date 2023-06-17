import React, { useState } from 'react'

const Form = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  
  const enteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredEmail)
    setEnteredEmail('');
  }

  return (
    <section className='my-4'>
      <form onSubmit={formSubmitHandler} className='flex flex-col'>
        <label htmlFor='address' className='text-darkgrey py-2 font-bold'>Email address</label>
        <input type='email' id='address' value={enteredEmail} onChange={enteredEmailHandler} className='border-2 px-4 py-2 outline-none rounded-[6px]' placeholder='email@company.com'/>
        <button type='submit' className='bg-darkgrey rounded py-2 text-grey font-bold p-2 mt-4'>subscribe to monthly newsletter</button>
      </form>
    </section>
  )
}

export default Form