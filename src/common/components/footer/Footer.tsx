import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

import logo from "../../../assets/logo.svg";
import smile from "../../../assets/smile.svg";

export const Footer = () => {
  return (
    <div className="bg-yellow- text-blue-3 pb-[26px] py-10 px-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1603px] m-auto">
        <div className="flex flex-col  lg:max-w-3xl">
          <p className="uppercase text-sm md:text-xl text-blue-4 font-bold mb-3 lg:mb-6">
            Ofertas y promociones
          </p>
          <h1 className="text-3xl md:text-5xl text-blue-3 font-extrabold mb-4 lg:mb-8">
            No te pierdas <br />
            nuestras ofertas!
          </h1>
          <input
            type="text"
            placeholder="Tu dirección de correo electrónico"
            className="bg-transparent border-2 border-black pb-3 mb-8 xl:mb-[77px] text-gray-3"
          />

          <div className="flex flex-col md:flex-row justify-start">
            <div className="bg-blue-1 flex items-center justify-center w-28 xl:w-52 h-10 xl:h-20 rounded-2xl px-3 mb-2 mr-5">
              <img
                src={logo}
                alt="Macropay logo"
                className="max-w-52 max-h-20"
              />
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-11 max-w-[451px] text-sm xl:text-lg mb-4">
              <li className="mb-1">Envíos y devoluciones</li>
              <li className="mb-1">Aviso de privacidad</li>
              <li className="mb-1">Preguntas Frecuentes</li>
              <li className="mb-1">Términos y condiciones</li>
            </ul>
          </div>
          <p className="flex items-center text-xs text-gray-5 xl:my-4">
            Todos los derechos reservados - <AiOutlineCopyrightCircle />{" "}
            Macroplay 2022
          </p>
        </div>

        <div className="w-[205px] h-[173px] my-4">
          <img src={smile} alt="smile" className="w-full h-full" />
        </div>

        <div className="max-w-[365px] max-h-[209px] box-border">
          <p className="text-4xl xl:text-[50px] font-extrabold">Conversemos!</p>
          <p className="text-sm xl:text-xl mt-2 xl:mt-[23px] mb-3 xl:mb-[31px]">
            Loren ipsum dolor sit amet
          </p>
          <ul className="flex">
            <li className="mr-4 xl:mr-8 cursor-pointer">
              <AiFillFacebook className="w-7 xl:w-14 h-7 xl:h-14" />
            </li>
            <li className="mr-4 xl:mr-8 cursor-pointer">
              <AiOutlineInstagram className="w-7 xl:w-14 h-7 xl:h-14" />
            </li>
            <li className="mr-4 xl:mr-8 cursor-pointer">
              <AiFillLinkedin className="w-7 xl:w-14 h-7 xl:h-14" />
            </li>
            <li className="cursor-pointer">
              <FaWhatsappSquare className="w-7 xl:w-14 h-7 xl:h-14" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
