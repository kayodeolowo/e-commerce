import React from 'react'
import Store from './Store'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container 2xl:max-w-[1300px] mx-auto'>
      <div className='flex xl:flex-row flex-col   justify-between'>
        <div className=' bg-[#28AFB2]  flex xl:flex-row flex-col xl:w-[68%] rounded shadow-xl hover:shadow-xl hover:cursor-pointer ' >
          <div className='text-gray-200 px-4 xl:w-[70%] mt-4 xl:mt-10 xl:ml-10 ' >
            <h1 className='font-semibold'> <span className='text-2xl sm:text-3xl'> Collections and styles for Everyone  </span>    </h1>
            <p className=' mt-2'> More than products, we deliver experiences. Embrace the power of smart living. Empowering beauty, inside and out. Discover the allure of self-expression. </p>
            <Link to='/'>
            <button className='bg-[#FED65A] hover:bg-[#c8ad5d] ease-in transition duration-300 text-black text-sm py-2 xl:mt-8 mt-4  px-3 font-normal rounded-xl font-body'> Shop Now</button>

            </Link>
          </div>

          <div className='w-fit mx-auto'>
            <img src='./images/shop.png' className='xl:h-[17rem] mt-3 xl:w-[40rem] cover' />
          </div>

        </div>

        <div className='xl:w-[30%] flex justify-around px-2 mt-4 xl:px-0 xl:mt-0 flex-row  xl:space-y-4 xl:flex-col'>
        
          <div className=' bg-[#efefef] md:w-[45%] xl:w-full py-2 rounded text-gray-500 shadow-xl flex justify-between px-8 pt-4 hover:cursor-pointer hover:shadow-xl'>
            <div className='flex flex-col justify-between  '>
              <div className='text-semibold font-sans'>
                <h1 className='text-gray-500 font-semibold uppercase' > Electronics </h1>
                <h1 className='mt-2'> Laptops </h1>
                <h1> Batteries </h1>
                <h1> Mouse </h1>

              </div>
              <h1 className='text-gray-500 font-semibold'> Sale Off <span className='text-red-400 font-bold text-2xl'> 30% </span></h1>
            </div>

            <div className='xl:w-[50%] hidden xl:flex'>
              <img src='./images/elect.png'  className='cover'/>
            </div>
          </div>

          <div className=' bg-[#E0663D] md:w-[45%] xl:w-full py-2 rounded text-gray-200 shadow-xl flex  justify-between px-8 pt- hover:cursor-pointer hover:shadow-xl'>
            <div className='flex flex-col justify-between  '>
              <div className='text-semibold font-sans'>
                <h1 className=' font-semibold uppercase'> Jewelries </h1>
                <h1 className='mt-2'> Rings </h1>
                <h1> Bangles  </h1>
                <h1> Watches  </h1>


              </div>
              <h1 className='text-gray-200  font-semibold'> From  $ 9.00</h1>
            </div>

            <div className='xl:w-[50%] hidden xl:flex'>
              <img src='./images/jewl.png' className='w-[10rem]' />
            </div>
          </div>

        </div>
      </div>
      <Store />
    </div>
  )
}

export default Home