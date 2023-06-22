import React from "react";
import "./CartStyle.css";
import CartIcon from "../../assets/image/cart-icon.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
function CartShopping() {
  return (
    <>
      <div className="header ">
        <p className="nameShop">CART SHOPPING</p>
        <img src={CartIcon} alt="cart-icon" className="cart_icon" />
      </div>
      <div className="body">
        <div className="cart_body">
          <div className="cart_body_header">
            <div className="continues_shopping">
              <AiOutlineArrowLeft />
              <a href="">Continues Shopping</a>
            </div>
            <div className="have_item">You have 4 items in your cart</div>
          </div>
          <div className="cart_item_added"></div>
        </div>
      </div>
    </>
  );
}

export default CartShopping;
