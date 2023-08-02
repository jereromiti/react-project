import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget({ artOfCart }) {
  return (
    <ul className="navbar-nav icons ms-auto mb-2 mb-lg-0">
      <li className=" nav-item pe-3">
        <Link to="/cart" className="fas fa-cart-shopping">
          <span className="num rounded-circle"> {artOfCart} </span>
        </Link>
      </li>
    </ul>
  );
}

export default CartWidget;
