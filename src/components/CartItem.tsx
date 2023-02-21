import { Button } from "@material-tailwind/react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency"

type CartItemProps = {
    id: number
    qty: number
}


export function CartItem ({id, qty}: CartItemProps) {
    const {removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id ==id)
    if (item == null) return null

    return(
        <div> 
            <img src={item.imgUrl} className="h-20 w-20" />

            <div> 
                {item.name} {""} {qty >1 && (<span>x{qty} </span>)}
                {formatCurrency(item.price)}
                 
                
            </div>

            <div> {formatCurrency(item.price  * qty )} </div>
            <Button onClick={()=>removeFromCart(item.id)}> Remove </Button>
        </div>
    )
}