import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "../../../node_modules/hamburgers/dist/hamburgers.css";

function NavBar() {
  return (
    <header className="header w-100">
      <div className="main__header bg-light border-bottom" data-bs-theme="dark">
        <div className="main__items py-3 row w-100">
          <Link to="/" className="navbar-brand fw-bold col-md-4 col-sm-6">
            XGamingShop
          </Link>
          <div class="search__container col-md-4 col-sm-6">
            <input class="search__input" type="text" placeholder="Buscador" />
          </div>
          {/* Componente de Carrito de compras */}
          <CartWidget artOfCart="0" />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="header__nav__row container-fluid pe-lg-2">
          <div className="ms-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar__nav__ul me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link pe-5 me-4 fs-5 fw-bold">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/mouse"
                  className="nav-link pe-5 me-4 fw-bold fs-5"
                >
                  Mouse
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/headphone"
                  className="nav-link pe-5 me-4 fw-bold fs-5"
                >
                  Auriculares
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/keyboard"
                  className="nav-link pe-5 me-4 fw-bold fs-5"
                >
                  Teclados
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/contacto"
                  className="nav-link pe-5 me-4 fw-bold fs-5"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
