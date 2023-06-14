import React from 'react'
import { iconlist, signupDesktop } from '../assets/images'


const Newsletter = () => {
  return (
    <section className='flex row bg-white mx-[25%] my-[25%] p-2 rounded-xl justify-between'>
      <div className='p-6'>
        <h1 className='text-charcoal text-3xl font-bold'>Stay updated!</h1>
        <p className='text-grey pt-4'>Join 60,000+ product managers receiving monthly <br/> updates on:</p>
        <div className='flex flex-col'>
          <div className='flex row'>
          <img src={iconlist} alt='list image' className='w-[24px] h-[24px]'/>
         <p>Product discovery and building what matters</p>
          </div>
          <div>
          <img src={iconlist} alt='list image' className='w-[24px] h-[24px]'/>
         <p>Product discovery and building what matters</p>
          </div>
          <div>
          <img src={iconlist} alt='list image' className='w-[24px] h-[24px]' />
         <p>Product discovery and building what matters</p>
          </div>
        </div>
      </div>
      <div className='text-grey'>
        <img src={signupDesktop} alt='desktop image' className='w-full h-full object-fit'
         />
      </div>
    </section>
  )
}

export default Newsletter