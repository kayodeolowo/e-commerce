import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/ProductsProvider';
import Scrolltop from './components/Scrolltotop';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <ThemeProvider>
        <BrowserRouter>
          <DataProvider> 
            <Scrolltop/>
            <App />
          </DataProvider>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


