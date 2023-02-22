import React from 'react'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'
import { useDataContext } from '../context/ProductsProvider'

const Store:React.FC = () => {
  const { data, isLoading } = useDataContext();


  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className=''>
        <h1> Store </h1>

        {data.map((item: any)=>(
          <div key={item.id}> <StoreItem {...item}/>  </div>
          
        ))}
    </div>
  )
}

export default Store