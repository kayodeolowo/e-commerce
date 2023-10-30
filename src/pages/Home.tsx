import React from 'react'
import Store from './Store'

const Home = () => {
  return (
    <div className='container max-w-[1140px] mx-auto'>
        <div className=' bg-[#f1a457] grid lg:grid-cols-2 rounded shadow-lg  md:pl-20' > 

<div className='text-[#013D29] px-6 font-semibold text-2xl sm:text-3xl mt-10 ' > 
  <h1 className=''> <span className='border-t-2 border-red-900'> Welcome to </span>  <span className='text-4xl font-bold uppercase '> <br/>  KrayaStores  </span>   </h1>
  <h1 className='uppercase mt-10 sm:mt-8  font-bold text-4xl sm:text-5xl'> Let's Level up <br/> your Game  </h1> 
  <p className='text-lg mt-4  italic'> Shop with us today and Enjoy </p>
  <h1 className=''> Up to <span className='text-red-900'> 30% </span> Off  </h1>

</div>

<div> 
  <img src='./images/shop.png'/>
</div>

</div>  
      <Store/>
    </div>
  )
}

export default Home