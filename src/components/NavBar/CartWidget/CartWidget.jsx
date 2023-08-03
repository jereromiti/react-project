import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget({ artOfCart }) {
  return (
    <ul className="cart__container navbar-nav col-md-4 col-sm-12">
      <li className="item__cart">
        <Link to="/cart" className="fas fa-cart-shopping">
          <span className="num rounded-circle"> {artOfCart} </span>
        </Link>
      </li>
    </ul>
  );
}

export default CartWidget;
