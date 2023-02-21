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
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/store" className="flex items-center">
          Store
        </a>
      </Typography>
     
    </ul>
  );
 
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

         <Typography
          as="a"
          href="/"
          variant="small"
          className=" cursor-pointer py-1.5 ml-auto lg:ml-0 font-normal"
        >
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
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>

        
      </MobileNav>
    </Navbar>
  );
}