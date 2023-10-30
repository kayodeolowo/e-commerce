import { formatCurrency } from "../utils/formatCurrency"
import { Button } from "@material-tailwind/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import toast, { Toaster } from 'react-hot-toast';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import {RiDeleteBin5Fill} from 'react-icons/ri'



type StoreItemsProps = {
    id: number
    name: string
    price: number
    image: string
    title: string
    rating: { rate: number; count: number };
}

const titleStyle: React.CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
};

export function StoreItemCard({ id, name, price, title, image, rating }: StoreItemsProps) {
    const { getItemsQty, increaseCartQty, removeFromCart } = useShoppingCart()
    const remove = () => toast('Item Removed');
    const addToCart = () => toast.success('Added to Cart');
    const qty = getItemsQty(id);

    const showRating = () => {
        const stars = [];
        const fullStars = Math.floor(rating.rate);
        let hasHalfStar = rating.rate - fullStars > 0;
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<BsStarFill key={i} style={{ color: '#F9BF00', fontSize: '11px' }} />);
            } else if (hasHalfStar) {
                stars.push(<BsStarHalf key={i} style={{ color: '#F9BF00', fontSize: '11px' }} />);
                hasHalfStar = false; // To prevent additional half star
            } else {
                stars.push(<BsStarFill key={i} style={{ color: '#D1D5DB', fontSize: '11px' }} />); // Unfilled star color
            }
        }
    
        return stars;
    };


    return <div className="">
        <div className="border-2 border-gray-100 shadow-lg mx-auto px-2 rounded-lg hover:cursor-pointer hover:shadow-2xl w-[10rem]  sm:w-[12rem] mb-2 mt-4 py-2 ">

            <img className="h-[6rem]  mx-auto" src={image} />
            <div className="flex items-center justify-between sm:space-x-2 mt-1">
                <p style={titleStyle} className="text-sm sm:text-xs "> {title} </p>
            </div>
            <div>
                <h1 className="font-semibold text-sm text-[#013D29]"> {formatCurrency(price)} </h1>
            </div>
            <div className="flex items-center">
                {showRating()} {/* Display the rating */}
                <span className="ml-1 text-xs  text-gray-400"> ({rating.count}) </span>
            </div>
            <div className="mt-4 w-fit mx-auto">
                {qty === 0 ? (
                    <button className="border-2 rounded-3xl px-3 text-sm text-gray-200 py-1  bg-[#2f9b77] hover:bg-white hover:text-[#013D29] hover:border-[#013D29] transition duration-300 ease-in " onClick={() => { increaseCartQty(id); addToCart() }} > Add to Cart </button>
                ) : (<div className="">

                    <div> <button className="border-2 rounded-3xl px-3 text-sm text-white py-1  bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300 ease-in  " onClick={() => { removeFromCart(id); remove() }} > Remove  </button> </div>

                </div>)}
            </div>
            <Toaster />
        </div>

    </div>


}