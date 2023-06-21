import React from "react";
import "./DashBroad.css";
import CartIcon from "../../assets/image/cart-icon.png";
// import { CartIcon }
function DashBroad() {
  return (
    <>
      <div className="header ">
        <div className="red"></div>
        <div className="white"></div>
        <p className="nameShop">POKÉMON SHOP</p>
        <img src={CartIcon} alt="cart-icon" className="cart_icon" />
      </div>
      <div className="search__bar">
        <div className="content_bar">
          <label htmlFor="">
            <input type="text" />
          </label>
        </div>
      </div>
    </>
  );
}

export default DashBroad;
