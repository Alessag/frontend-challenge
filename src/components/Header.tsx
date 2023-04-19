import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.svg";
export const Header = () => {
  return (
    <header className="border flex justify-between items-center w-full bg-blue-1 p-5">
      <img src={logo} alt="Macropay logo" className="w-28" />
      <div className="border text-xs flex items-center justify-evenly w-3/4">
        <button className="text-blue-2 bg-yellow- h-7 w-24 rounded-sm">
          Crea tu cuenta
        </button>
        <button className="text-white">Iniciar sesión</button>
        <div className="bg-gray-100 w-5 h-5 rounded-full flex justify-center items-center">
          <AiOutlineShoppingCart color="gray" />
        </div>
      </div>
    </header>
  );
};
