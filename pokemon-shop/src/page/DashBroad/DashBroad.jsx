import React from "react";
import "./DashBroad.css";
import CartIcon from "../../assets/image/cart-icon.png";
import Magnifyingglass from "../../assets/image/magnifying-glass.png";
import pokemonbackground from "../../assets/image/pokemon background.png";

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
            <input
              type="text"
              placeholder="Search Pokémon"
              className="input_text"
            />
            <div className="magnifyingglass">
              <img src={Magnifyingglass} alt="" />
            </div>
          </label>
        </div>
      </div>
      <div className="slider">
        <div className="red"></div>
        <div className="line_black"></div>
        <div className="white"></div>
        <div className="background_poke">
          <img src={pokemonbackground} alt="" />
        </div>
      </div>
      {/* card item */}
    </>
  );
}

export default DashBroad;
