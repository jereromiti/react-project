import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "../../../node_modules/hamburgers/dist/hamburgers.css"

function NavBar() {
  return (
    <header className="w-100">
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark py-3" data-bs-theme="dark">
        <div className="header__nav__row container-fluid pe-lg-2">
          <Link to="/" className="navbar-brand fw-bold fs-3">
          XGaming
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link pe-3 me-4 fw-bold"aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/mouse" className="nav-link pe-3 me-4 fw-bold">
                  Mouse
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/headphones" className="nav-link pe-3 me-4 fw-bold">
                  Auriculares
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/keyboard" className="nav-link pe-3 me-4 fw-bold">
                  Teclados
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/contacto" className="nav-link pe-3 me-4 fw-bold">
                  Contacto
                </Link>
              </li>
            </ul>
            {/* Componente de Carrito de compras */}
            <CartWidget artOfCart="0"/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
