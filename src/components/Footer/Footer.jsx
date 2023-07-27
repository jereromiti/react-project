import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer class="bg-dark container-fluid d-flex flex-column w-100 text-center py-2">
        <div class="fs-3 mb-3">
            <a class="mx-2 px-1 footer__a text-decoration-none" target="_blank" href="https://www.instagram.com/romitijere/">
                <i class="fa-brands fa-instagram footer__icon"></i>
            </a>
            <a class="mx-2 px-1 footer__a text-decoration-none" target="_blank" href="https://facebook.com/">
                <i class="fa-brands fa-facebook footer__icon"></i>
            </a>
            <a class="mx-2 px-1 footer__a text-decoration-none" target="_blank" href="https://github.com/jereromiti">
                <i class="fa-brands fa-github footer__icon"></i>
            </a>
            <a class="mx-2 px-1 footer__a text-decoration-none" target="_blank" href="https://www.linkedin.com/in/jerem%C3%ADas-romiti-6a7943263/">
            <i class="fa-brands fa-linkedin footer__icon"></i>
            </a>
        </div>
        <div class="footer__text text-light fs-6">
            <p class="my-0 pb-2">DeskUP 2023 - Todos los derechos reservados</p>
            <p class="mb-0">Developed by <a target="_blank" href="https://www.linkedin.com/in/jerem%C3%ADas-romiti-6a7943263/" class="jere">Jere ♥️</a></p>
        </div>
    </footer>
    )
}


export default Footer;