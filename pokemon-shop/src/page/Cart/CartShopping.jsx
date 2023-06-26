import React from "react";
import "./CartStyle.css";
import CartIcon from "../../assets/image/cart-icon.png";
import bulbasaur from "../../assets/image/bulbasaur.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import cartSlice from "../../components/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartShopping() {
  const { cartSlice } = useSelector((state) => state);
  const renderCard = () => {
    return cartSlice.card_array.map((item) => (
      <div className="cart_item_added">
        <div className="img_item_add">
          <img src={item.img} alt="" />
        </div>
        <div className="name_item">
          <strong>{item.name}</strong>
        </div>
        <div className="quantily">
          <strong>SL: {item.sl}</strong>
        </div>
        <div className="btn_remove">
          <button>REMOVE</button>
        </div>
      </div>
    ));
  };
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
              <Link id="back" to="/">
                <AiOutlineArrowLeft />
              </Link>

              <Link id="text" to="/">
                <strong>Continues Shopping</strong>
              </Link>
            </div>
            <div className="have_item">
              You have {cartSlice.quantity} items in your cart
            </div>
            {renderCard()}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartShopping;
