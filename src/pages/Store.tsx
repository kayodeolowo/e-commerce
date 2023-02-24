import React from 'react'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'
import { useDataContext } from '../context/ProductsProvider'
import MoonLoader from 'react-spinners/MoonLoader'

const Store:React.FC = () => {
  const { data, isLoading } = useDataContext();


  if (isLoading) {
    return <div className='mt-[50%] md:mt-[15%] w-fit mx-auto'>
        <MoonLoader color='red'/>
    </div>;
  }


  return (
    <div className='container mx-auto '>
        <div className=' bg-[#f1a457] grid lg:grid-cols-2 rounded shadow-lg mt-4 md:pl-20' > 

          <div className='text-[#013D29] px-6 font-bold text-3xl mt-10 ' > 
            <h1 className=''> <span className='border-t-2 border-red-900'> Welcome </span> to KrayaStores Stores   </h1>
            <h1 className='uppercase mt-10 text-5xl'> Lets's Level up <br/> your Game  </h1> 
            <p className='text-lg mt-4  italic'> Shop with us today and Enjoy </p>
            <h1 className=''> Up to <span className='text-red-900'> 30% </span> Off  </h1>

          </div>
          
          <div> 
            <img src='./images/shop.png'/>
          </div>

        </div> 

        <div> 
            {data.map((item: any)=>(
          <div key={item.id}> <StoreItem {...item}/>  </div>
          
        ))}
        </div>
    </div>
  )
}

export default Store