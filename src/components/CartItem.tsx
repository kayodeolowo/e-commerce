import { Button } from "@material-tailwind/react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency"

type CartItemProps = {
    id: number
    
}


export function CartItem ({id,}: CartItemProps) {
    const {getItemsQty, increaseCartQty, decreaseCartQty, removeFromCart} = useShoppingCart()
    const qty =getItemsQty(id);
    const item = storeItems.find(i => i.id ===id)
    if (item == null) return null

    return(
        <div> 
            <img src={item.imgUrl} className="h-20 w-20" />

            <div> 
                {item.name} {""} {qty >1 && (<span>x{qty} </span>)}
                {formatCurrency(item.price)}
                 
                
            </div>

            <div className=""> {formatCurrency(item.price  * qty )} </div>
            <Button onClick={()=>removeFromCart(item.id)}> Remove </Button>
             <Button onClick={()=>decreaseCartQty(id)}> - </Button>
            <p> {qty} in cart </p>
            <Button onClick={()=>increaseCartQty(id)}> + </Button>
        </div>
    )
}