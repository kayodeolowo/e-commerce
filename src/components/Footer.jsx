import React from 'react'

const Footer = () => {
  return (
    
<footer class="footer relative pt-1 border-b-2 border-blue-700 bg-[#0f382a] mt-10">
    <div class="container mx-auto px-6 ">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex text-gray-200 flex-col">
                    <span class="font-bold  uppercase mb-2 text-gray-500">Let Us Help You</span>
                    <span class="my-2"><a href="#" class="  text-md hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Delivery Options</a></span>
                    <span class="my-2"><a href="#" class="  text-md hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Help Center</a></span>
                    <span class="my-2"><a href="#" class="  text-md hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">How to Shop</a></span>
                </div>
                <div class="flex flex-col text-gray-200">
                    <span class="font-bold  uppercase mt-4 md:mt-0 mb-2 text-gray-500">About KrayaStores</span>
                    <span class="my-2"><a href="#" class="  text-md hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">About Us</a></span>
                    <span class="my-2"><a href="#" class="   text-md hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Privacy</a></span>
                    <span class="my-2"><a href="#" class="  text-md hover:text-yellow-900 hover:translate-y-1 transition duration-300 ease-in">Cookies</a></span>
                </div>
                <div class="flex flex-col text-gray-200">
                    <span class="font-bold  uppercase mt-4 md:mt-0 mb-2 text-gray-500">Contact Us</span>
                    <span class="my-2"><img class='h-8 w-8 md:mx-auto hover:cursor-pointer hover:translate-y-1 transition duration-300 ease-in' href="#"  src='./images/facebook.png' /> </span>
                    <span class="my-2"><img class='h-8 w-8 md:mx-auto hover:cursor-pointer hover:translate-y-1 transition duration-300 ease-in' href="#"  src='./images/instagram.png' /> </span>
                    <span class="my-2"><img class='h-8 w-8 md:mx-auto hover:cursor-pointer hover:translate-y-1 transition duration-300 ease-in' href="#"  src='./images/twitter.png' /></span>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-10 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-yellow-900 font-bold mb-2">
                    © 2023 by Kayode Olowo
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer