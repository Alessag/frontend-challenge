import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full bg-blue-1 p-5 relative">
      <img src={logo} alt="Macropay logo" className="w-28 md:w-52" />
      <div className="text-xs md:text-xl flex items-center justify-evenly md:justify-end w-3/4 md:w-full">
        <button className="text-blue-2 bg-yellow h-7 md:h-[72px] w-24 md:w-[194px] rounded-sm md:mr-10">
          Crea tu cuenta
        </button>
        <button className="text-white md:mr-10">Iniciar sesión</button>
        <div className="bg-gray-100 w-5 md:w-11 h-5 md:h-11 rounded-full flex justify-center items-center lg:mr-60">
          <AiOutlineShoppingCart color="gray" />
        </div>
        <div className="absolute top-0 right-0 hidden lg:flex lg:items-center lg:justify-center uppercase bg-yellow lg:w-56 lg:h-56 rounded-bl-full text-white">
          <p className="rotate-45 text-xs lg:text-4xl pb-9">
            Compra a<br /> crédito
          </p>
        </div>
      </div>
    </header>
  );
};
