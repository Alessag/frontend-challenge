import logo from "../../../assets/logo.svg";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-yellow-300 text-blue-3 pt-10 pb-[26px] px-2">
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="border-2 border-black flex flex-col max-w-3xl">
          <p className="uppercase text-sm md:text-xl text-blue-4 font-bold mb-3 lg:mb-6">
            Ofertas y promociones
          </p>
          <h1 className="text-3xl md:text-5xl text-blue-3 font-extrabold mb-4 lg:mb-8">
            No te pierdas <br />
            nuestras ofertas!
          </h1>
          <input
            type="text"
            placeholder="Tu direccion de correo electronico"
            className="bg-transparent border-b-3 border-black mb-8 lg:mb-[77px]"
          />

          <div className="flex flex-col md:flex-row justify-between">
            <div className="bg-blue-1 flex items-center justify-center h-20 w-52 rounded-2xl px-3 mb-2">
              <img
                src={logo}
                alt="Macropay logo"
                className="max-w-52 max-h-20"
              />
            </div>

            <ul className="border-2 border-black grid grid-cols-1 lg:grid-cols-2 max-w-md text-lg">
              <li className="mb-1">Envíos y devoluciones</li>
              <li className="mb-1">Aviso de privacidad</li>
              <li className="mb-1">Preguntas Frecuentes</li>
              <li className="mb-1">Términos y condiciones</li>
            </ul>
          </div>
          <p className="text-xs text-gray-5">
            Todos los derechos reservados - c Macroplay 2022
          </p>
        </div>

        <div>
          <p>Smile face </p>
        </div>

        <div className="border-2 border-blue-700 max-w-[365px]">
          <p className="text-4xl lg:text-5xl font-extrabold">Conversemos!</p>
          <p className="text-sm lg:text-xl mt-2 lg:mt-6 mb-3 lg:mb-8">
            Lorem ipsum dolor sit, amet consectetur
          </p>
          <ul className="flex">
            <li className="mr-4 lg:mr-8 cursor-pointer">
              <AiFillFacebook className="w-7 lg:w-14 h-7 lg:h-14" />
            </li>
            <li className="mr-4 lg:mr-8 cursor-pointer">
              <AiOutlineInstagram className="w-7 lg:w-14 h-7 lg:h-14" />
            </li>
            <li className="mr-4 lg:mr-8 cursor-pointer">
              <AiFillLinkedin className="w-7 lg:w-14 h-7 lg:h-14" />
            </li>
            <li className="cursor-pointer">
              <FaWhatsappSquare className="w-7 lg:w-14 h-7 lg:h-14" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
