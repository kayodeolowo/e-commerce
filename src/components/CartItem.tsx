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



    
   

    return(
        <div className=""> 
           <div className="w-10/12 hover:cursor-pointer mt-4 sm:w-8/12 mx-auto shadow-xl   mb-6 py-5 rounded-lg px-2 "> 
               <div className="flex justify-between mt-4"> 

                     <img  src={item.image} className="h-20 w-18 " />
                     <h1 className=" text-green-900 font-bold mt-2 ">  {formatCurrency(item.price  * qty )}</h1>
               </div>

            <div className="flex flex-col"> 
                <div className="flex flex-col"> 
                    <h1 className="text-sm mt-2"> {item.title} {""} </h1>
                  
                </div>
  
             <div className=" mt-2 rounded-md   w-full justify-between flex"> 
                  <div className="flex items-center border-2 rounded-full w-fit space-x-4  py-1 border-green-500 px-4"> 
                     <button className="text-xl font-bold text-red-800" onClick={()=>decreaseCartQty(id)}> <img className="h-5" src="./images/sub.png" alt=""/> </button>
                     <h1> {qty}  </h1>
                    <button onClick={()=>increaseCartQty(id)}>  <img className="h-5" src="./images/add.png" alt=""/> </button>
                   
                  </div>

                   <button onClick={()=>{removeFromCart(item.id); remove()}}> <img className="h-8" src="./images/delete.jpg" alt=""/>  </button>

                    <Toaster  toastOptions={{
                        className: '',
                        style: {
                        border: '1px solid #e90a0a',
                        padding: '10px',
                        color: '#f8062e',
                        },
                    }}/>
                    
                  
                </div>
               
                 
                   
                   
                    
                </div>
           </div>
        </div>
    )

   
}