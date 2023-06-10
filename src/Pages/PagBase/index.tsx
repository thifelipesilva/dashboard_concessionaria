import { Outlet } from "react-router-dom";
import MenuLateral from "../../components/MenuLateral";

const PagBase = () => {
  return(
    <div className='w-full h-screen flex'>
      <MenuLateral/>
      <Outlet/>
    </div>
  );    
}

export default PagBase;