import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { CartItem } from './CartItem'
import storeItems from "../data/items.json"
import { useDataContext } from '../context/ProductsProvider'


const ShoppingCart = () => {
    const { data, isLoading } = useDataContext();


    if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div>Shoppingcart
        <div> 
             {data.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}

          {/* <div> 
           Total {formatCurrency(data.reduce((total:any, CartItem:any)=>{
                const item =data.find((i: { id: any }) => i.id === CartItem.id)
                return total + (item?.price || 0) *  CartItem.qty
            }, 0)
            )}
          </div> */}
         
        </div>
    </div>
  )
}

export default ShoppingCart