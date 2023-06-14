import React from 'react'
import { iconlist } from '../assets/images'
// import iconlist from '../assets/images/iconlist.svg'

const Success = () => {
  return (
    
        <section className='container max-w-[375px] h-auto p-6 bg-white m-auto rounded-xl'>
            {/* insert icon here */}
            
            {/* <img src={image} alt='image' className='w-[150px] h-[150px] object-fit rounded-full' /> */}
            <img src={iconlist} alt='image' className='w-[70px] h-[70px] object-fit mb-6' />
            <h2 className='font-bold font-roboto text-5xl text-darkgrey mb-6'>Thanks for <br />subscribing!</h2>
            <p className='text-grey font-sans  text-sm mb-6'>A confirmation email has been sent to <br /> <span className='font-bold text-darkgrey '>ash@loremcompany.com</span>.
                Please open it and click<br /> the button inside to confirm your subscription
            </p>
            <button onClick={()=>{}} className='bg-darkgrey text-white text-sm font-roboto rounded text-center py-2 w-full'>Dismiss message</button>
            
        </section>
    
  )
}

export default Success