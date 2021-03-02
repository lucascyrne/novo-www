import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

import logo from "../../assets/logo/logo.svg";
import location from "../../assets/icons/location.png";

const Header: FunctionalComponent = () => {
  return (
    <header id={style.header}>
      <div id={style.logo}>
        <a href="/">
          <img src={logo} alt="Novo Atacarejo Logo" />
        </a>
      </div>
      <div id={style.menu}>
        <nav>
          <Link activeClassName={style.active} href="/quem-somos">
            Quem somos
          </Link>
          <Link activeClassName={style.active} href="/nossas-lojas">
            Nossas Lojas
          </Link>
          <Link activeClassName={style.active} href="/ofertas">
            Ofertas
          </Link>
          <Link activeClassName={style.active} href="/cartao-novo">
            Cartão Novo
          </Link>
          <Link activeClassName={style.active} href="/contato">
            Contato
          </Link>
        </nav>
      </div>
      <div id={style.location}>
        <div>
          <img src={location} alt="Location icon" />
          <p>
            Você está proximo a nossa loja do{" "}
            <span id={style.bold}>Recife - PE</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
