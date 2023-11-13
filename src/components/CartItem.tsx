import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utils/formatCurrency"
import toast, { Toaster } from 'react-hot-toast';
import { useDataContext } from '../context/ProductsProvider'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { RiSubtractFill } from 'react-icons/ri'

type CartItemProps = {
    id: number

}

const remove = () => toast('Item Removed');

const titleStyle: React.CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
};


export function CartItem({ id, }: CartItemProps) {
    const { getItemsQty, increaseCartQty, decreaseCartQty, removeFromCart } = useShoppingCart()
    const { data } = useDataContext();
    const qty = getItemsQty(id);
    const item = data?.find((i: { id: number; }) => i.id === id)
    if (item == null) return null

    return (
        <div className="md:w-[80%] mx-auto">
            <div className=" mt-4   mx-auto border pt-2 rounded  pb-4   px-2  ">
                <div className="md:flex md:justify-between md:items-center  ">

                    <div className="flex space-x-2">
                        <img src={item.image} className="h-14 w-12 " />
                        <div className="flex flex-col space-y-0.5 md:hidden w-[95%] overflow-hidden">
                            <h1   className="text-sm font-semibold  md:w-[15rem] truncate ">  {item.title} </h1>

                            <div className="flex items-center justify-between ">
                                {/* <p className="   text-sm font-semibold text-gray-600 "> {formatCurrency(item.price)}</p> */}
                                <h1 className=" font-semibold text-gray-700 w-[10rem] text-xs ">  {formatCurrency(item.price * qty)}</h1>
                                <div className=" flex items-center justify-start  text-sm w-[5rem] space-x-2   ">
                                    <button onClick={() => decreaseCartQty(id)}> <RiSubtractFill  size={10}/> </button>
                                    <h1 className="border px-1  text-[0.65rem]"> {qty}  </h1>
                                    <button onClick={() => increaseCartQty(id)}>  <AiOutlinePlus size={10}/> </button>
                                </div>

                                <button onClick={() => { removeFromCart(item.id); remove() }}> <AiOutlineDelete className=" text-red-500" size={13} />  </button>

                            </div>
                        </div>
                    </div>

                    <div className="md:w-[50%] md:ml-2">
                        <h1 className="hidden md:flex text-sm font-semibold"> {item.title} </h1>
                        <p className=" hidden md:flex  text-sm font-semibold text-gray-600 mt-"> {formatCurrency(item.price)}</p>
                    </div>

                    <div className=" md:flex items-center hidden  text-sm w-fit space-x-4  ">
                        <button onClick={() => decreaseCartQty(id)}> <RiSubtractFill /> </button>
                        <h1 className="border px-1.5 text-xs"> {qty}  </h1>
                        <button onClick={() => increaseCartQty(id)}>  <AiOutlinePlus /> </button>

                    </div>


                    <div className="w-[10%]">
                        <h1 className=" font-bold hidden md:flex ">  {formatCurrency(item.price * qty)}</h1>
                    </div>

                    <div className="hidden md:flex">  <button onClick={() => { removeFromCart(item.id); remove() }}> <AiOutlineDelete className="mt-1 text-red-500" />  </button> </div>

                </div>
            </div>
        </div>
    )


}