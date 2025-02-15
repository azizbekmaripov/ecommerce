import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { AiOutlineHeart } from 'react-icons/ai';
import "./navbar.css";
import logo from "../mylogo.jpg"


export const Navbar = () => {


  return (
    <div className="fixed navbar p-2 shadow-lg" >
      <div className="logo-site">
        <img src={logo} height={60} width={60} style={{}} className="d-inline-block align-top" alt="Logo" />
      </div>
      <div className="links">
        <ul>
          <li><Link to="/"> Главный  </Link></li>
          <li><Link to="/porduct"> Каталог  </Link></li>
          <li><Link to="/about"> Про нас  </Link></li>

          <li><Link to="/contact"> Контакты </Link></li>
        </ul>

      </div>
      <div className="navbar-end" style={{ display: 'flex', alignItems: 'center' }}>


        <div className="cart-cart" >
          <div style={{ marginRight: '25px' }}>

            <Link to="/favorites">
              <AiOutlineHeart size={'40'} />
              <h2 style={{ paddingTop: '10px', marginLeft: '-29px' }}>Изобранное</h2>
            </Link>
          </div>


          <Link to="/cart">
            <ShoppingCart size={'40'} />
            <h2 style={{ paddingTop: '10px', marginLeft: '-10px' }}>Корзина </h2>
          </Link>
        </div>
        <Link to="/login">

          <div>
            <button className='button' style={{ marginRight: '20px' }}><p> Войти </p></button>
          </div>
        </Link>

      </div>

    </div>
  );
};
