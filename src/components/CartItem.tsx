import { Button } from "@material-tailwind/react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utils/formatCurrency"
import toast, { Toaster } from 'react-hot-toast';
import { useDataContext } from '../context/ProductsProvider'

type CartItemProps = {
    id: number
    
}

const remove = () => toast('Item Removed');


export function CartItem ({id,}: CartItemProps) {
    const {getItemsQty, increaseCartQty, decreaseCartQty, removeFromCart} = useShoppingCart()
         const { data, isLoading } = useDataContext();
    const qty =getItemsQty(id);
    const item = data?.find((i: { id: number; }) => i.id ===id)
    if (item == null) return null



    if (isLoading) {
    return <div>Loading...</div>;
  }
   

    return(
        <div> 
            <img src={item.image} className="h-20 w-20" />

            <div> 
                {item.title} {""} {qty >1 && (<span>x{qty} </span>)}
                {formatCurrency(item.price)}
                 
                
            </div>

            <div className=""> {formatCurrency(item.price  * qty )} </div>
            <Button onClick={()=>{removeFromCart(item.id); remove()}}> Remove </Button>
             <Toaster/>
             <Button onClick={()=>decreaseCartQty(id)}> - </Button>
            <p> {qty} in cart </p>
            <Button onClick={()=>increaseCartQty(id)}> + </Button>
           
        </div>
    )

   
}