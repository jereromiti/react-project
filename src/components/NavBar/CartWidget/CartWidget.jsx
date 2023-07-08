import React from "react";
import "./CartWidget.css";

function CartWidget( {artOfCart} ) {
  return (
    <ul class="navbar-nav icons ms-auto mb-2 mb-lg-0">
      <li class=" nav-item pe-3">
        <a href="#" class="fas fa-cart-shopping">
          <span class="num rounded-circle"> {artOfCart} </span>
        </a>
      </li>
    </ul>
  );
}

export default CartWidget;
