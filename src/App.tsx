import React from 'react';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import { Home,  } from './pages';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer'
 
function App() {
  return (
   <ShoppingCartProvider> 
       <div className="">
      <Header/>

      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<ShoppingCart/>} />
      </Routes>
      <Footer/>
      
    </div>
   </ShoppingCartProvider>
  );
}

export default App;
