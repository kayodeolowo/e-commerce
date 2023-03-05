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
    <div className="mx-auto border-b border-gray-100  px-6 lg:px-2 container max-w-[1140px] h-14 ">
      <div className="  w-full mt-4  lg:mt-2 flex items-center justify-between text-blue-gray-900">
        
         <Link to="/"> 
             <div className="flex items-center mt-1">
              <img className="h-8" src="./images/logo.png" alt="logo"/> 
              <h1 className="font-bold text-[#f04952] text-sm ml-2 ">KRAYA STORES</h1>
               
             </div>
      
         </Link>

         
         <Link to="/cart"> 
                <div     className=' mt-[-1rem] ml-[-2rem] lg:mr-0 text-black fixed  '> 
                    <span  className='relative'>
                  <button   onClick={openCart}>  <img className='h-8 md:h-10 hover:shadow-2xl' src="./images/cart.png" />  </button>
                    <span
                      className={`w-5 h-5 absolute -top-1 -right-2 text-center text-sm  rounded-full bg-red-600 text-white grid place-items-center hover:translate-y-[-5px] transition ease-in duration-300 ${
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