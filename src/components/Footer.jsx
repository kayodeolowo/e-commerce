import React from 'react'

const Footer = () => {
  return (
    
<footer className="footer relative pt-1  bg-[#0f382a] mt-10">
    <div className="container max-w-[1140px] mx-auto px-6 ">

        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex text-gray-200 flex-col">
                    <span className="font-bold  uppercase mb-2 text-gray-500">Let Us Help You</span>
                    <span className="my-1"><a href="#" className="  text-sm hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Delivery Options</a></span>
                    <span className="my-1"><a href="#" className="  text-sm hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Help Center</a></span>
                    <span className="my-1"><a href="#" className="  text-sm hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">How to Shop</a></span>
                </div>
                <div className="flex flex-col text-gray-200">
                    <span className="font-bold  uppercase mt-4 md:mt-0 mb-2 text-gray-500">About KrayaStores</span>
                    <span className="my-1"><a href="#" className="  text-sm hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">About Us</a></span>
                    <span className="my-1"><a href="#" className="   text-sm hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Privacy</a></span>
                    <span className="my-1"><a href="#" className="  text-sm hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Cookies</a></span>
                </div>
                <div className="flex flex-col text-gray-200">
                    <span className="font-bold  uppercase mt-4 md:mt-0 mb-2 text-gray-500">Contact Us</span>
                    <span className="my-2"><img className='h-6 w-6 md:mx-auto hover:cursor-pointer hover:translate-y-1 transition duration-300 ease-in' href="#"  src='./images/facebook.png' /> </span>
                    <span className="my-2"><img className='h-6 w-6 md:mx-auto hover:cursor-pointer hover:translate-y-1 transition duration-300 ease-in' href="#"  src='./images/instagram.png' /> </span>
                    <span className="my-2"><img className='h-6 w-6 md:mx-auto hover:cursor-pointer hover:translate-y-1 transition duration-300 ease-in' href="#"  src='./images/twitter.png' /></span>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-10 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <a href='https://kayodeolowo.netlify.app/' target='blank'>
                <p className="text-sm text-yellow-900 font-semibold mb-2">
                    © 2023 by Kayode Olowo
                </p>
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer