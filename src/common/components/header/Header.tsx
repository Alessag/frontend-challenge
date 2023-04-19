import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full bg-blue-1 p-5">
      <img src={logo} alt="Macropay logo" className="w-28 md:w-52" />
      <div className="text-xs md:text-xl flex items-center justify-evenly md:justify-end w-3/4 md:w-full">
        <button className="text-blue-2 bg-yellow- h-7 md:h-[72px] w-24 md:w-[194px] rounded-sm md:mr-10">
          Crea tu cuenta
        </button>
        <button className="text-white md:mr-10">Iniciar sesión</button>
        <div className="bg-gray-100 w-5 md:w-11 h-5 md:h-11 rounded-full flex justify-center items-center">
          <AiOutlineShoppingCart color="gray" />
        </div>
      </div>
    </header>
  );
};
