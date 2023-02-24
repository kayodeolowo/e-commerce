import React from 'react'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { CartItem } from './CartItem'
import { useDataContext } from '../context/ProductsProvider'
import MoonLoader from 'react-spinners/MoonLoader'


const ShoppingCart = () => {
    const {cartItems} = useShoppingCart()
     const { data, isLoading } = useDataContext();

     if (isLoading) {
    return <div className='mt-[50%] mb-[20rem] md:mt-[5%] w-fit mx-auto'>
        <MoonLoader color='green'/>
    </div>;
  }


  return (
    <div className='mx-auto lg:mb-[20rem] px-6 container'>
        <div> 
             {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

            <div className='w-fit mx-auto mt-10 '> 
                {cartItems.length === 0 ? (<div className=' w-fit mx-auto font-semibold mt-20 lg:mb-[25rem] mb-[20rem]'>  <img className='h-20 w-fit mx-auto ' src='./images/emptycart.png' alt='' />
                <h1 className='text-center mt-4'> Cart is <span className='text-red-900'> Empty </span>  </h1>
                <h1 className='mt-2'> Visit <span className='text-green-900 font-bold text-xl border-b-2 rounded-full px-4 border-green-900 mx-2 text-center w-fit '> <Link to="/"
                >Store</Link> </span>to add items </h1>  </div>) : ( <div className=' bg-red-900 px-10 text-white font-semibold py-6 rounded-md hover:cursor-pointer'> 
           Total {formatCurrency(cartItems.reduce((total, CartItem)=>{
                const item= data?.find((i: { id: number }) => i.id === CartItem.id)
                return total + (item?.price || 0) *  CartItem.qty 
            }, 0) 
            )}
          </div>) }

            </div>
         
        </div>
    </div>
  )
}

export default ShoppingCart