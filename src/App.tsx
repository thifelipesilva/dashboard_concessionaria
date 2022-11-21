import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuLateral from './components/MenuLateral';
import Carros from './Pages/Carros';
import Home from './Pages/Home';
import Vendas from './Pages/Vendas';
import Vendedores from './Pages/Vendedores';

const App = () => {
  return (
    <div className='w-full h-screen flex'>
      <BrowserRouter>
        <MenuLateral/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/vendedores' element={<Vendedores/>}/>
          <Route path='/carros' element={<Carros/>}/>
          <Route path='/vendas' element={<Vendas/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
    
      
  );
}

export default App;
