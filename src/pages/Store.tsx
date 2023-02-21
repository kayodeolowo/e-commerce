import React from 'react'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

const Store = () => {
  return (
    <div className=''>
        <h1> Store </h1>

        {storeItems.map(item=>(
          <div key={item.id}> <StoreItem {...item}/>  </div>
          
        ))}
    </div>
  )
}

export default Store