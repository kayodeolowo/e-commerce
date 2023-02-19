import React from 'react'
import storeItems from '../data/items.json'

const Store = () => {
  return (
    <div className=''>
        <h1> Store </h1>

        {storeItems.map(item=>(
          <div> {JSON.stringify(item)} </div>
        ))}
    </div>
  )
}

export default Store