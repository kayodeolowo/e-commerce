import { formatCurrency } from "../utils/formatCurrency"
import { Button } from "@material-tailwind/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import toast, { Toaster } from 'react-hot-toast';

       

type StoreItemsProps= {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem ({id, name, price, imgUrl}: StoreItemsProps) {
    const {getItemsQty, increaseCartQty, removeFromCart} = useShoppingCart()
    const remove = () => toast('Item Removed');
    const addToCart = () => toast('Added to Cart');
    const qty =getItemsQty(id);
   return <div> 
        <img className="h-20 w-20" src={imgUrl}/>

        <div className="flex space-x-4"> 
            <h1> {name}   </h1>
            <h1> {formatCurrency (price)} </h1>
        </div>

        <div> 
            {qty === 0  ? (
                <Button onClick={()=>{increaseCartQty(id);addToCart()}} size="sm" color="green" ripple={true}> Add to cart </Button>
            ): (<div className=""> 
                    
                   <div> <Button onClick={()=>{removeFromCart(id); remove()}} color="red" size="sm"> Remove From Cart </Button> </div>   
                      
             </div>)}
        </div>
        <Toaster/>
        
   </div>  


}