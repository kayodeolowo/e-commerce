import { formatCurrency } from "../utils/formatCurrency"
import { Button } from "@material-tailwind/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import toast, { Toaster } from 'react-hot-toast';

       

type StoreItemsProps= {
    id: number
    name: string
    price: number
    image: string
    title: string
}

export function StoreItem ({id, name, price,title, image}: StoreItemsProps) {
    const {getItemsQty, increaseCartQty, removeFromCart} = useShoppingCart()
    const remove = () => toast('Item Removed');
    const addToCart = () => toast.success('Added to Cart');
    const qty =getItemsQty(id);
   return <div className=""> 
       <div className="border-2 border-gray-100 shadow-lg mx-auto rounded-lg hover:cursor-pointer hover:shadow-2xl  sm:w-[15rem] w-3/5 lg:w-[16rem] mb-4 mt-4 py-4 "> 

        <img className="h-[8rem]  mx-auto" src={image}/>
        <div className="flex items-centere  mx-1 justify-between sm:space-x-2 mt-4 sm:h-[3.5rem] lg:h-[3rem]"> 
            <p className="text-sm sm:text-xs "> {title} </p>
            <h1 className="font-semibold text-sm text-[#013D29]"> {formatCurrency (price)} </h1>
        </div>

        <div className="mt-4 w-fit mx-auto"> 
            {qty === 0  ? (
                <button className="border-2 rounded-3xl px-3 text-sm text-gray-200 py-1  bg-[#2f9b77] hover:bg-white hover:text-[#013D29] hover:border-[#013D29] transition duration-300 ease-in " onClick={()=>{increaseCartQty(id);addToCart()}} > Add to Cart </button>
            ): (<div className=""> 
                    
                   <div> <button className="border-2 rounded-3xl px-3 text-sm text-white py-1  bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300 ease-in "  onClick={()=>{removeFromCart(id); remove()}} > Remove From Cart </button> </div>   
                      
             </div>)}
        </div>
        <Toaster/>
       </div>
        
   </div>  


}