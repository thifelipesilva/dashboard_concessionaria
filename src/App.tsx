import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carros from './Pages/Carros';
import Home from './Pages/Home';
import Vendas from './Pages/Vendas';
import Vendedores from './Pages/Vendedores';
import Login from './Pages/Login';
import CadatroUsuario from './Pages/CadasrtoUsuario';
import PagBase from './Pages/PagBase';

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/cadastro' element={<CadatroUsuario/>}/>
          <Route path='/dashboard' element={<PagBase/>}>
            <Route path='' element={<Home/>} />
            <Route path='vendedores' element={<Vendedores/>}/>
            <Route path='carros' element={<Carros/>}/>
            <Route path='vendas' element={<Vendas/>}/>
          </Route>
        </Routes> 
      </BrowserRouter>
   
    
      
  );
}

export default App;
