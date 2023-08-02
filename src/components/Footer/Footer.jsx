import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark container-fluid d-flex flex-column w-100 text-center py-2">
      <div className="fs-3 mb-3">
        <a
          className="mx-2 px-1 footer__a text-decoration-none"
          href="https://www.instagram.com/romitijere/"
        >
          <i className="fa-brands fa-instagram footer__icon"></i>
        </a>
        <a
          className="mx-2 px-1 footer__a text-decoration-none"
          href="https://facebook.com/"
        >
          <i className="fa-brands fa-facebook footer__icon"></i>
        </a>
        <a
          className="mx-2 px-1 footer__a text-decoration-none"
          href="https://github.com/jereromiti"
        >
          <i className="fa-brands fa-github footer__icon"></i>
        </a>
        <a
          className="mx-2 px-1 footer__a text-decoration-none"
          href="https://www.linkedin.com/in/jerem%C3%ADas-romiti-6a7943263/"
        >
          <i className="fa-brands fa-linkedin footer__icon"></i>
        </a>
      </div>
      <div className="footer__text text-light fs-6">
        <p className="my-0 pb-2">DeskUP 2023 - Todos los derechos reservados</p>
        <p className="mb-0">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/jerem%C3%ADas-romiti-6a7943263/"
            className="jere"
          >
            Jere ♥️
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
