import React from 'react'
import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/ProductsProvider';
import { BsArrowLeftShort, BsDot, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { formatCurrency } from "../utils/formatCurrency"
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import toast, { Toaster } from 'react-hot-toast';



const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useDataContext();
  const { getItemsQty, increaseCartQty, removeFromCart } = useShoppingCart()
  const addToCart = () => toast.success('Added to Cart');
  const remove = () => toast('Item Removed');
  if (!id) {
    return <div>Loading...</div>;
  }

  const product = data.find((item: any) => item.id === parseInt(id, 10));
  const qty = getItemsQty(product.id);

  const showRating = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating.rate);
    let hasHalfStar = product.rating.rate - fullStars > 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<BsStarFill key={i} style={{ color: '#F9BF00', fontSize: '15px' }} />);
      } else if (hasHalfStar) {
        stars.push(<BsStarHalf key={i} style={{ color: '#F9BF00', fontSize: '15px' }} />);
        hasHalfStar = false; // To prevent additional half star
      } else {
        stars.push(<BsStarFill key={i} style={{ color: '#D1D5DB', fontSize: '15px' }} />); // Unfilled star color
      }
    }

    return stars;
  };


  return (
    <div className='container max-w-[1140px] mx-auto'>

      <div>
        <Link to="/">
          <div className=' w-fit mt-4  ml-4 mr-auto'>
            <button className=' border border-gray-400 bg-gray-200 hover:bg-gray-400 transition ease-in py-1  flex px-2 rounded items-center text-xs'> <span> <BsArrowLeftShort /> </span> Back </button>
          </div>
        </Link>


        <div className='md:flex  mt-8'>
          <div className='md:w-[50%] flex items-center hover:cursor-pointer'>
            <img alt='product-image' src={product.image}
              className='max-h-[20rem]  object-contain w-[20rem] mx-auto' />
          </div>

          <div className='md:w-[50%] px-3  mt-4   '>
            <h1 className='font-bold text-lg'> {product.title} </h1>
            <div className="flex items-center">
              {showRating()} {/* Display the rating */}
              <span className='text-sm text-gray-600 ml-1 '> ( {product.rating.rate} rating ) </span>
              <span className=" mt-1 text-sm text-gray-600 flex items-center"> <BsDot color='black' size={25} />{product.rating.count} Reviews </span>
            </div>
            <h1 className='bg-green-600 mt-1 w-fit px-2  hover:cursor-pointer hover:bg-green-800 duration-300 ease-in transition text-white rounded text-sm'> In Stock </h1>
            <div className='mt-2'>
              <h1 className='font-semibold'> Description </h1>
              <p className='text-gray-700 text-sm'> {product.description}</p>
            </div>

            <div className='mt-3'>
              <h1 className="font-bold text-3xl"> {formatCurrency(product.price)} </h1>
            </div>

            <div className='mt-2'>

              {qty === 0 ? (
                <button className=" rounded px-2 text-sm text-gray-200 py-1  bg-[#2f9b77] hover:bg-[#5fbe9e] hover:text-[#013D29] transition duration-300 ease-in " onClick={() => { increaseCartQty(product.id); addToCart() }} > Add to Cart </button>
              ) : (<div className="">

                <div> <button className=" rounded px-2 text-sm text-gray-200 py-1  bg-red-300 hover:bg-red-700 hover:text-gray-200  transition duration-300 ease-in  " onClick={() => { removeFromCart(product.id); remove() }} > Remove  </button> </div>

              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
