import React from 'react';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import { Home, About, Store } from './pages';
 
function App() {
  return (
    <div className="container mx-auto">
      <Header/>

      <Routes> 
        <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
          <Route path='/store' element={<Store/>} />
      </Routes>
      
    </div>
  );
}

export default App;
