import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";


export const Product = (props) => {

  const { id, productName, price, desc, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <div id="content">
        < img src={productImage} />
        
      </div>
      <div className="description p-2">
        <p>
          <b style={{ fontSize: '25px' }}>{productName}</b>
        </p>
        <p style={{ color: 'gray  ' }}>{desc}</p>
        <p>{price}$</p>
        <div className="btns">
          <Link to={`/${id}`}>

            <button className="buyNow">Купить сейчас</button>
          </Link>
          {/* <button style={{color: 'white'}} className="addToCartBttn" onClick={() => addToCart(id)}>
          + {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button> */}
        </div>
      </div>


    </div>

  );
};
