import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart" style={{marginBottom:'70px'}}>
      <div>
        <h1 style={{color: 'gray' ,marginTop: '25px', fontSize: '30px'}}>Ваша корзина</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Итог товар : ${totalAmount} </p>
          <div style={{display: 'flex'}}>

          <button onClick={() => navigate("/")}> Продолжить покупки </button>
         <div>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Удалить {" "}
          </button>
          </div>
          </div> 
        </div>
      ) : (
        <h1 style={{fontSize:'20px',color: "red"}} > Ваша корзина пуста.</h1>
      )}
    </div>
  );
};
