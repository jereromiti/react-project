import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <header class="w-100">
      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="header__nav__row container-fluid pe-lg-2">
          <a class="navbar-brand fw-bold fs-3" href="#">
            E-Commerce
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link pe-3 me-4 fw-bold active"
                  aria-current="page"
                  href="#"
                >
                  INICIO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-3 me-4 fw-bold" href="#">
                  TIENDA
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-3 me-4 fw-bold" href="#">
                  PAGINAS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-3 me-4 fw-bold" href="#">
                  BLOG
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-3 me-4 fw-bold" href="#">
                  CONTACTO
                </a>
              </li>
            </ul>
            {/* Componente de Carrito de compras */}
            <CartWidget artOfCart="10"/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
