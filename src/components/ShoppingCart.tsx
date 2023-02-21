import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { CartItem } from './CartItem'
import storeItems from "../data/items.json"


const ShoppingCart = () => {
    const {cartItems} = useShoppingCart()
  return (
    <div>Shoppingcart
        <div> 
             {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

          <div> 
           Total {formatCurrency(cartItems.reduce((total, CartItem)=>{
                const item =storeItems.find(i => i.id === CartItem.id)
                return total + (item?.price || 0) *  CartItem.qty
            }, 0)
            )}
          </div>
         
        </div>
    </div>
  )
}

export default ShoppingCart