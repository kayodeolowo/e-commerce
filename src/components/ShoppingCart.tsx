import React from 'react'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { CartItem } from './CartItem'
import { useDataContext } from '../context/ProductsProvider'
import MoonLoader from 'react-spinners/MoonLoader'


const ShoppingCart = () => {
  const { cartItems } = useShoppingCart()
  const { data } = useDataContext();
  

  const Clearcart = () => {
    localStorage.clear();
    window.location.href = '/';
  }


  return (
    <div className='mx-auto lg:mb-[20rem] px-4 md:px-0 container 2xl:max-w-[1300px] '>
      <div className='md:pt-8'>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}

        <div className=' '>
          {cartItems.length === 0 ? (<div className=' w-fit mx-auto font-semibold mt-20 lg:mb-[25rem] mb-[20rem]'>  <img className='h-20 w-fit mx-auto ' src='./images/emptycart.png' alt='' />
            <h1 className='text-center mt-4'> Sorry Cart is <span> Empty </span>  </h1>
            <h1 className='mt-2'> Visit the <span className='text-green-900 font-semibold  text-center w-fit '> <Link to="/"
            >Store</Link> </span>to add items </h1>  </div>) : (
            <div className='md:w-[80%] md:pt-4 md:mx-auto  font-semibold text-end mt-4  ml-auto border-gray-500 text-sm text-gray-800'>
             <p className='mb-1 border-b '>  Total: {formatCurrency(cartItems.reduce((total, CartItem) => {
                const item = data?.find((i: { id: number }) => i.id === CartItem.id)
                return total + (item?.price || 0) * CartItem.qty
              }, 0)
              )} </p>
           
           
           <div>
        <h1 onClick={Clearcart} className='bg-green-500 hover:cursor-pointer hover:bg-green-600 py-2 m-auto mt-4 w-fit px-10 rounded text-white'> Checkout </h1>
      </div>
       </div>
            
            )}

        </div>

      </div>

     
    </div>
  )
}

export default ShoppingCart