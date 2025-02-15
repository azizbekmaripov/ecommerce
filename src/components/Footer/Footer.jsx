

import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import "./Footer.css"
import logo from "../mylogo.jpg"

const Footer = () => {
  return (
    <footer style={{ height: '500px' }} className="text-white">

      <h1 style={{ paddingLeft: '40px', paddingTop: '20px' }}
        className="lg:text-4xl text-4xl  md:mb-0 lg:leading-normal font-semibold
         md:w-2/5"
      >
        <div className="logo-site">
          <img src={logo} height={60} width={60} style={{}} className="d-inline-block align-top" alt="Logo" />
        </div>

      </h1>
      <div className="footer-email">
        <input
          type="text"
          placeholder="Ваш телефон номер.."
          className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-3.5 rounded px-2 focus:outline-none"
        />
        <button style={{ backgroundColor: 'mediumspringgreen', fontWeight: 'bold' }}
          className=" hover:bg-teal-500 duration-300 px-3 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
        >
          Отправлять
        </button>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7
      text-center pt-5 text-gray-400 text-sm "
      >
        <span>© 2023 Все права защищены.
        </span>
        <span> Условия · Политика конфиденциальности</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
