import { useState, useEffect } from "react";
import {
  Navbar,
 
} from "@material-tailwind/react";
import {FiShoppingCart} from 'react-icons/fi';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
 
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const {openCart, cartQty} = useShoppingCart()
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  
 
  return (
    <div className="mx-auto mt-4 shadow px-6 container ">
      <div className=" w-full  flex items-center justify-between text-blue-gray-900">
        
         <Link to="/"> 
             <span>KayStore</span>
      
         </Link>

         
         <Link to="/cart"> 
                <div     className=' lg:mt-2  mr-4 lg:mr-0 text-black  '> 
                    <span  className='relative'>
                  <button   onClick={openCart}>  <FiShoppingCart className='text-[2rem] ' />  </button>
                    <span
                      className={`w-5 h-5 absolute -top-1 -right-2 text-center text-sm  rounded-full bg-red-600 text-white grid place-items-center ${
                        cartQty > 0 ? 'grid' : 'hidden'
                      }`}
                    >
                      {cartQty}
                    </span>
                  </span>
                                
                  </div>
          </Link>
        
       
      </div>
      
    </div>
  );
}