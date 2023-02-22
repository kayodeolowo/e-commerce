import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
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
    <Navbar className="mx-auto container border-2 border-red-400">
      <div className=" mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className=" cursor-pointer py-1.5 font-normal"
        >
          <span>KayStore</span>
        </Typography>

         
         <Link to="/cart"> 
                <div     className=' lg:mt-2  mr-4 lg:mr-0 text-black  '> 
                    <span  className='relative'>
                  <button   onClick={openCart}>  <FiShoppingCart className='text-[2rem] ' />  </button>
                    <span
                      className={`w-5 h-5 absolute -top-1 -right-2 text-center text-sm  rounded-full bg-green-600 text-white grid place-items-center ${
                        cartQty > 0 ? 'grid' : 'hidden'
                      }`}
                    >
                      {cartQty}
                    </span>
                  </span>
                                
                  </div>
          </Link>
        
       
      </div>
      
    </Navbar>
  );
}