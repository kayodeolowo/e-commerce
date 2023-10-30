import React from 'react'
import storeItems from '../data/items.json'
import {  StoreItemCard } from '../components/StoreItemCard'
import { useDataContext } from '../context/ProductsProvider'
import MoonLoader from 'react-spinners/MoonLoader'

const Store:React.FC = () => {
  const { data, isLoading } = useDataContext();


  if (isLoading) {
    return <div className='mt-[50%] mb-[20rem] md:mt-[30%] w-fit mx-auto'>
        <MoonLoader color='green'
         speedMultiplier={0.3}
         size={30}/>
    </div>;
  }


  return (

    
        <div className='grid  mt-8 gap-2  grid-cols-2 md:grid-cols-3   lg:grid-cols-5 xl:gap-x-4  transition duration-300 ease-in '> 
            {data.map((item: any)=>(
          <div  key={item.id}> 
          <StoreItemCard {...item}/>  
          </div>
          
        ))}
        </div>
    
  )
}

export default Store