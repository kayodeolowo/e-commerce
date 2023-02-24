import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { CartItem } from './CartItem'
import { useDataContext } from '../context/ProductsProvider'


const ShoppingCart = () => {
    const {cartItems} = useShoppingCart()
     const { data, isLoading } = useDataContext();
  return (
    <div>
        <div> 
             {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

            <div> 
                {cartItems.length === 0 ? (<div> add  </div>) : ( <div> 
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